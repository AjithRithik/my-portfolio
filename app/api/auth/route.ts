import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/auth
 * Initiates the GitHub OAuth flow for Decap CMS.
 * Decap CMS opens this URL in a popup when the user clicks "Login with GitHub".
 */
export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return new NextResponse('GitHub Client ID is not configured.', { status: 500 });
  }

  const scope = 'repo,user';
  const githubAuthUrl =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&scope=${encodeURIComponent(scope)}`;

  return NextResponse.redirect(githubAuthUrl);
}
