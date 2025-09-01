import { GoogleGenerativeAI } from '@google/generative-ai';
import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'AIzaSyCen0kjK4CNEWg0D9ybs810m8cdeoblMv8');

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { prompt } = JSON.parse(event.body || '{}');

    if (!prompt) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
        },
        body: JSON.stringify({ error: 'Prompt is required' }),
      };
    }

    console.log('Received prompt:', prompt.substring(0, 100) + '...');

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({ text }),
    };
  } catch (error) {
    console.error('Error generating response:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({ error: 'Internal Server Error', details: error.message }),
    };
  }
};

export { handler };
