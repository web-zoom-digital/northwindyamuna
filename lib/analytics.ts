/**
 * Client-side Google Analytics (GA4) event tracking utility for Northwind Yamuna.
 * Respects user privacy: NEVER passes PII (names, phone numbers, emails).
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export type ConversionAction =
  | 'price_list_request'
  | 'site_visit_request'
  | '3bhk_inquiry'
  | 'brochure_request'
  | 'brochure_download'
  | 'general_lead';

export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, params);
    } catch (err) {
      console.warn('[ANALYTICS WARNING]', err);
    }
  }
}

export function trackFormStart(formName: string, sourcePage: string) {
  trackEvent('form_start', {
    form_name: formName,
    page_location: sourcePage,
  });
}

export function trackFormSubmit(formName: string, sourcePage: string) {
  trackEvent('form_submit', {
    form_name: formName,
    page_location: sourcePage,
  });
}

export function trackGenerateLead({
  action,
  sourcePage,
  sourceCTA,
  configuration,
}: {
  action: ConversionAction;
  sourcePage: string;
  sourceCTA?: string;
  configuration?: string;
}) {
  // Fire primary GA4 standard lead conversion
  trackEvent('generate_lead', {
    conversion_type: action,
    page_location: sourcePage,
    source_cta: sourceCTA || 'Direct Form',
    preferred_config: configuration || 'Unspecified',
  });

  // Also fire specific conversion event
  if (action === 'site_visit_request') {
    trackEvent('site_visit_request', {
      page_location: sourcePage,
      preferred_config: configuration,
    });
  } else if (action === 'brochure_request') {
    trackEvent('brochure_request', {
      page_location: sourcePage,
      preferred_config: configuration,
    });
  } else if (action === 'brochure_download') {
    trackEvent('brochure_download', {
      page_location: sourcePage,
    });
  }
}

export function trackClickToCall(source: string = 'Header') {
  trackEvent('click_to_call', {
    call_source: source,
  });
}

export function trackWhatsAppClick(source: string = 'Floating Button') {
  trackEvent('whatsapp_click', {
    chat_source: source,
  });
}
