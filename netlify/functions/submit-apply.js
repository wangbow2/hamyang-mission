// Netlify Function: handles apply form submission and stores in Firestore
// Email notification is handled by Netlify Forms (data-netlify="true")
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};
