import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/callback
 * Handles the GitHub OAuth callback for Decap CMS.
 * GitHub redirects here after the user authorizes the OAuth app.
 * This route exchanges the `code` for an access token, then sends
 * it back to the CMS popup via postMessage.
 */
export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');

  if (!code) {
    return renderHTML('error', 'Missing authorization code from GitHub.');
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return renderHTML('error', 'OAuth credentials are not configured on the server.');
  }

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return renderHTML('error', tokenData.error_description ?? tokenData.error);
    }

    const payload = JSON.stringify({ token: tokenData.access_token, provider: 'github' });
    return renderHTML('success', payload);
  } catch {
    return renderHTML('error', 'Failed to exchange authorization code for token.');
  }
}

function renderHTML(status: 'success' | 'error', content: string) {
  // Decap CMS listens for a postMessage in the format:
  //   "authorization:github:success:{"token":"...","provider":"github"}"
  //   "authorization:github:error:error message"
  const message = `authorization:github:${status}:${content}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Authorizing CMS…</title>
  <style>
    body { font-family: sans-serif; display: flex; align-items: center;
           justify-content: center; height: 100vh; margin: 0; background: #f5f5f5; }
    p { color: #555; font-size: 1rem; }
  </style>
</head>
<body>
  <p>Authorizing, please wait…</p>
  <script>
    (function () {
      function receiveMessage(e) {
        window.opener.postMessage(${JSON.stringify(message)}, e.origin);
        window.close();
      }
      window.addEventListener('message', receiveMessage, false);
      // Handshake: tell the CMS popup we are ready
      window.opener.postMessage('authorizing:github', '*');
    })();
  </script>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
