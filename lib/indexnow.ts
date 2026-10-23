import { siteConfig } from './siteConfig';

export const INDEXNOW_KEY = 'c74384930d634dbca233f86b7617ff14';

export interface IndexNowResponse {
  success: boolean;
  statusCode?: number;
  message: string;
  submittedUrls: string[];
}

/**
 * Submits a list of URLs to Bing and participating search engines via IndexNow protocol.
 * @param urlList Array of full URLs or relative paths to submit.
 */
export async function submitToIndexNow(urlList: string[]): Promise<IndexNowResponse> {
  const baseUrl = siteConfig.url.replace(/\/$/, '');
  const host = new URL(baseUrl).host;

  // Normalize all URLs to absolute URLs
  const normalizedUrls = urlList.map((url) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
  });

  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${baseUrl}/${INDEXNOW_KEY}.txt`,
    urlList: normalizedUrls,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    // 200: OK, 202: Accepted (Standard IndexNow responses)
    if (response.status === 200 || response.status === 202) {
      return {
        success: true,
        statusCode: response.status,
        message: `Successfully submitted ${normalizedUrls.length} URLs to IndexNow.`,
        submittedUrls: normalizedUrls,
      };
    }

    const responseText = await response.text();
    return {
      success: false,
      statusCode: response.status,
      message: `IndexNow returned status ${response.status}: ${responseText || 'Unknown error'}`,
      submittedUrls: normalizedUrls,
    };
  } catch (error: any) {
    return {
      success: false,
      message: `Failed to connect to IndexNow API: ${error?.message || error}`,
      submittedUrls: normalizedUrls,
    };
  }
}
