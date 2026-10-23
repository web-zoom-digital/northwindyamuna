import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from '@/lib/siteConfig';
import { blogPosts } from '@/lib/blogData';
import { INDEXNOW_KEY, submitToIndexNow } from '@/lib/indexnow';

export function getAllSiteUrls(): string[] {
  const baseUrl = siteConfig.url.replace(/\/$/, '');

  const staticRoutes = [
    '',
    '/about',
    '/amenities',
    '/configurations',
    '/configurations/3-bhk-luxury-apartment',
    '/configurations/4-bhk-ultra-estate-residence',
    '/configurations/site-master-layout-plan',
    '/apartments-near-jewar-airport',
    '/location-sector-22d-yamuna-expressway',
    '/price-list',
    '/floor-plans',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
  ];

  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...blogRoutes].map((route) => `${baseUrl}${route}`);
}

/**
 * GET: Returns IndexNow configuration status and total discoverable site URLs.
 */
export async function GET() {
  const baseUrl = siteConfig.url.replace(/\/$/, '');
  const allUrls = getAllSiteUrls();

  return NextResponse.json({
    enabled: true,
    engine: 'Bing & Yandex IndexNow Protocol',
    host: new URL(baseUrl).host,
    key: INDEXNOW_KEY,
    keyLocation: `${baseUrl}/${INDEXNOW_KEY}.txt`,
    totalUrls: allUrls.length,
    urls: allUrls,
    usage: 'Send a POST request to this endpoint to submit all URLs to Bing IndexNow.',
  });
}

/**
 * POST: Submits either specific URLs or all indexed site URLs to IndexNow.
 */
export async function POST(req: NextRequest) {
  try {
    let urlsToSubmit: string[] = [];

    try {
      const body = await req.json();
      if (body && Array.isArray(body.urls) && body.urls.length > 0) {
        urlsToSubmit = body.urls;
      }
    } catch {
      // If no JSON body passed, default to all site URLs
    }

    if (urlsToSubmit.length === 0) {
      urlsToSubmit = getAllSiteUrls();
    }

    const result = await submitToIndexNow(urlsToSubmit);

    return NextResponse.json({
      success: result.success,
      statusCode: result.statusCode,
      message: result.message,
      submittedCount: result.submittedUrls.length,
      submittedUrls: result.submittedUrls,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Failed to submit URLs to IndexNow',
      },
      { status: 500 }
    );
  }
}
