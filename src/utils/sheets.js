import axios from 'axios';

const baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets';
const cacheKey = 'hadith-cache';
const cacheTTL = 1000 * 60 * 60; // 1 hour in milliseconds

export async function fetchHadiths() {
  const sheetId = process.env.REACT_APP_SHEET_ID;
  const apiKey  = process.env.REACT_APP_SHEETS_API_KEY;
  const range   = 'HadithCatalog!A2:G'; // skip header

  const url = `${baseUrl}/${sheetId}/values/${range}?key=${apiKey}`;

  console.log('[Sheets API] Fetching from URL:', url); // ✅ LOG URL

  // ✅ Step 1: Check cache
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    try {
      const { timestamp, data } = JSON.parse(cached);
      if (Date.now() - timestamp < cacheTTL) {
        console.log('[CACHE] Using cached hadiths');
        return data;
      } else {
        console.log('[CACHE] Cache expired. Fetching fresh data...');
      }
    } catch (err) {
      console.warn('[CACHE] Cache corrupted, ignoring...');
    }
  }

  // ✅ Step 2: Fetch from Google Sheets
  try {
    const res = await axios.get(url);
    const rows = res.data.values || [];
    console.log(`[Sheets API] Rows fetched: ${rows.length}`); // ✅ LOG count

    const parsed = rows.map(([arabic, english, urdu, theme, postDate, category]) => ({
      arabic, english, urdu, theme, postDate, category
    }));

    console.log('[Sheets API] Parsed Data:', parsed); // ✅ LOG data

    // ✅ Step 3: Save to cache
    localStorage.setItem(cacheKey, JSON.stringify({
        timestamp: Date.now(),
        data: parsed
    }));

    return parsed;
  } catch (error) {
    console.error('[Sheets API] Error fetching data:', error); // ❌ LOG error
    return [];
  }
}
