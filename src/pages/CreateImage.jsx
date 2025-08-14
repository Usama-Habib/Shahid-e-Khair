import React, { useState, useEffect, useRef } from 'react';
import { FiSquare, FiSmartphone, FiMonitor } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import '../styles/CreateImage.css';

const backgrounds = [
  { name: 'Pattern 1', url: '/assets/backgrounds/pattern1.jpg' },
  { name: 'Pattern 2', url: '/assets/backgrounds/pattern2.jpg' },
  { name: 'Pattern 3', url: '/assets/backgrounds/pattern3.jpg' },
  { name: 'Mosque', url: '/assets/backgrounds/mosque-pattern.jpg' },
];

// const imageSizes = [
//   { label: 'Square (1:1)', width: 400, height: 400 },
//   { label: 'Portrait (3:4)', width: 400, height: 533 },
//   { label: 'Landscape (4:3)', width: 533, height: 400 },
// ];

const OUTPUT_WIDTH = 1080;
const OUTPUT_HEIGHT = 1080;

const ImageCreator = () => {
  const location = useLocation();
  const entry = location.state?.entry;

  const [arabic, setArabic] = useState('');
  const [english, setEnglish] = useState('');
  const [urdu, setUrdu] = useState('');

  const [showArabic, setShowArabic] = useState(true);
  const [showEnglish, setShowEnglish] = useState(true);
  const [showUrdu, setShowUrdu] = useState(true);

  const [background, setBackground] = useState(backgrounds[0].url);
  // const [size, setSize] = useState(imageSizes[0]);
  const previewRef = useRef(null);

  const isAnyFieldSelected = showArabic && arabic || showEnglish && english || showUrdu && urdu;

  useEffect(() => {
    if (entry) {
      setArabic(entry.arabic_text || '');
      setEnglish(entry.english_translation || '');
      setUrdu(entry.urdu_translation || '');
    }
  }, [entry]);

  const handleDownload = async () => {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current, {
      useCORS: true,
      backgroundColor: null,
      width: OUTPUT_WIDTH,
      height: OUTPUT_HEIGHT,
    });
    const link = document.createElement('a');
    link.download = 'islamic-image.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="page-container">
      <h1 className="main-title">🖼️ Create Shareable Islamic Image</h1>
      <div className="image-creator-container">
        {/* Controls */}
        <div className="image-creator-controls">
          {/* Background Thumbnails (scrollable) */}
          <div className="bg-picker-label">Background:</div>
          <div className="bg-picker-scroll">
            {backgrounds.map((bg, idx) => (
              <button
                key={bg.url}
                className={`bg-thumb${background === bg.url ? ' selected' : ''}`}
                style={{ backgroundImage: `url(${bg.url})` }}
                onClick={() => setBackground(bg.url)}
                aria-label={bg.name}
                type="button"
              />
            ))}
          </div>
          {/* Image Size */}
          <div className="size-picker-label">Image Size:</div>
          {/* <div className="size-picker">
            <button
              className={`size-btn${size.label === 'Square (1:1)' ? ' selected' : ''}`}
              onClick={() => setSize(imageSizes[0])}
              type="button"
              title="Square"
            >
              <FiSquare size={20} />
            </button>
            <button
              className={`size-btn${size.label === 'Portrait (3:4)' ? ' selected' : ''}`}
              onClick={() => setSize(imageSizes[1])}
              type="button"
              title="Portrait"
            >
              <FiSmartphone size={20} />
            </button>
            <button
              className={`size-btn${size.label === 'Landscape (4:3)' ? ' selected' : ''}`}
              onClick={() => setSize(imageSizes[2])}
              type="button"
              title="Landscape"
            >
              <FiMonitor size={20} />
            </button>
          </div> */}
          {/* Text Fields with Toggles */}
          <div className="field-row">
            <label className="field-label">
              Arabic
              <input
                type="checkbox"
                checked={showArabic}
                onChange={e => setShowArabic(e.target.checked)}
                className="toggle-checkbox"
              />
              <span className="toggle-slider"></span>
            </label>
            <textarea
              value={arabic}
              onChange={e => setArabic(e.target.value)}
              placeholder="Enter Arabic text"
              className="field-input arabic"
              dir="rtl"
              rows={2}
            />
          </div>
          <div className="field-row">
            <label className="field-label">
              English
              <input
                type="checkbox"
                checked={showEnglish}
                onChange={e => setShowEnglish(e.target.checked)}
                className="toggle-checkbox"
              />
              <span className="toggle-slider"></span>
            </label>
            <textarea
              value={english}
              onChange={e => setEnglish(e.target.value)}
              placeholder="Enter English translation"
              className="field-input"
              rows={2}
            />
          </div>
          <div className="field-row">
            <label className="field-label">
              Urdu
              <input
                type="checkbox"
                checked={showUrdu}
                onChange={e => setShowUrdu(e.target.checked)}
                className="toggle-checkbox"
              />
              <span className="toggle-slider"></span>
            </label>
            <textarea
              value={urdu}
              onChange={e => setUrdu(e.target.value)}
              placeholder="Enter Urdu translation"
              className="field-input urdu"
              dir="rtl"
              rows={2}
            />
          </div>
          <button onClick={handleDownload} disabled={!isAnyFieldSelected}>
            Download Image
          </button>
        </div>
        {/* Preview */}
        <div
          ref={previewRef}
          className="image-creator-preview"
          style={{
            background: `url(${background}) center/cover no-repeat, var(--body-bg)`,
            width: OUTPUT_WIDTH,
            height: OUTPUT_HEIGHT,
          }}
        >
          {/* Overlay for dimming */}
          <div className="image-creator-overlay" />
          {isAnyFieldSelected && (
            <div className="image-creator-preview-content"
            style={{
              // backgroundImage: `url(${background})`,
              // backgroundSize: 'cover',
              // backgroundPosition: 'center',
              // backgroundRepeat: 'no-repeat',
              // backgroundBlendMode: 'overlay', // optional for effect
            }}
            >
              {/* Islamic Header */}
              <div className="image-header">
                <span className="bismillah-text">بسم الله الرحمن الرحيم</span>
                <div className="header-divider" />
              </div>
              {/* Main Content */}
              <div className="image-main-content">
                {showArabic && arabic && (
                  <div className="preview-arabic">{arabic}</div>
                )}
                {showEnglish && english && (
                  <div className="preview-english">{english}</div>
                )}
                {showUrdu && urdu && (
                  <div className="preview-urdu">{urdu}</div>
                )}
              </div>
              {/* Islamic Footer */}
              <div className="image-footer">
                <div className="footer-divider" />
                <span className="footer-brand">Shahid-e-Khair</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCreator;