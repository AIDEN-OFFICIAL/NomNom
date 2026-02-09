import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());

app.get('/api/swiggy', async (req, res) => {
  try {
    const swiggyURL =
      'https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=9.94060&lng=76.26530&carousel=true&third_party_vendor=1';
      // 'https://www.swiggy.com/mapi/restaurants/list/v5?lat=9.9406&lng=76.2653&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1';

    const response = await fetch(swiggyURL, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115 Safari/537.36',
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    // Log raw response status if not OK
    if (!response.ok) {
      const text = await response.text();
      console.error(`Swiggy error: ${response.status} - ${text}`);
      throw new Error(`Swiggy API responded with status ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Fetch error:', err.message);
    res.status(500).json({ error: 'Failed to fetch data from Swiggy' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
