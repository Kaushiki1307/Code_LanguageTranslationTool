// This is a Node.js function for a serverless environment like Vercel or Netlify.
// It should be placed in an `api` directory at the root of your project.
import axios from 'axios';

// This is the main handler for the serverless function.
export default async function handler(request, response) {
    // We only want to handle POST requests to this endpoint.
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    const { text, to, from } = request.body;

    // Basic validation
    if (!text || !to) {
        return response.status(400).json({ error: 'Missing required parameters: text and to.' });
    }

    // Get the Google Cloud API key from environment variables
    const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;

    if (!apiKey) {
        return response.status(500).json({ error: 'Server configuration error: Missing Google Translate API key.' });
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
        // Google's API returns a different structure than Azure
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
        
        response.status(200).json(formattedResponse);
    } catch (error) {
        console.error("Translation API Error:", error.response?.data || error.message);
        response.status(500).json({ error: 'An error occurred during translation.' });
    }
}
