// Simple Express server to handle API requests during development
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API route for translation
app.post('/api/translate', async (req, res) => {
    const { text, to, from } = req.body;

    // Basic validation
    if (!text || !to) {
        return res.status(400).json({ error: 'Missing required parameters: text and to.' });
    }

    // Get the Google Cloud API key from environment variables
    const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'Server configuration error: Missing Google Translate API key.' });
    }

    // Google Cloud Translation API endpoint
    const endpoint = 'https://translation.googleapis.com/language/translate/v2';
    
    // Prepare request parameters for Google Cloud Translation API
    const params = {
        q: text,
        target: to,
        key: apiKey
    };
    
    // Add source language if provided
    if (from && from !== 'auto') {
        params.source = from;
    }

    try {
        // Call Google Cloud Translation API
        const translationResponse = await axios.post(endpoint, null, { params });
        
        // Format the response to match our frontend expectations
        const formattedResponse = [
            {
                translations: [
                    {
                        text: translationResponse.data.data.translations[0].translatedText,
                        to: to
                    }
                ]
            }
        ];
        
        res.status(200).json(formattedResponse);
    } catch (error) {
        console.error("Translation API Error:", error.response?.data || error.message);
        res.status(500).json({ error: 'An error occurred during translation.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`API server running on http://localhost:${PORT}`);
});
