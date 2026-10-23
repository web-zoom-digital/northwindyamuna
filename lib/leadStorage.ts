import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

export interface LeadData {
  timestamp: string;
  name: string;
  phone: string;
  email?: string;
  configuration?: string;
  budget?: string;
  visitDate?: string;
  message?: string;
  sourcePage?: string;
  sourceCTA?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  consent: boolean;
  userIp?: string;
}

const DEFAULT_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbzjmXaJ3YtAEGWaYzM22bo383pXjYju-Elzsf3o4FxLHeFQb8WJ-lS-bAIdAL4P5n3_fQ/exec';

export async function saveLead(lead: LeadData): Promise<{ success: boolean; provider: string; error?: string }> {
  const webhookUrl =
    process.env.GOOGLE_SHEET_WEBHOOK_URL ||
    process.env.GOOGLE_SCRIPT_WEBHOOK_URL ||
    DEFAULT_WEBHOOK_URL;

  // 1. If Apps Script Webhook URL is provided, send lead payload via fetch
  if (webhookUrl) {
    try {
      const dateObj = new Date(lead.timestamp);
      const dateStr = dateObj.toISOString().split('T')[0];
      const timeStr = dateObj.toTimeString().split(' ')[0];

      // Attach fields in multiple casing styles so any Apps Script column-mapping or e.parameter matches
      const targetUrl = new URL(webhookUrl);
      targetUrl.searchParams.append('name', lead.name);
      targetUrl.searchParams.append('Name', lead.name);
      targetUrl.searchParams.append('phone', lead.phone);
      targetUrl.searchParams.append('Phone', lead.phone);
      targetUrl.searchParams.append('Mobile', lead.phone);
      targetUrl.searchParams.append('email', lead.email || '');
      targetUrl.searchParams.append('Email', lead.email || '');
      targetUrl.searchParams.append('configuration', lead.configuration || '');
      targetUrl.searchParams.append('Configuration', lead.configuration || '');
      targetUrl.searchParams.append('config', lead.configuration || '');
      targetUrl.searchParams.append('budget', lead.budget || '');
      targetUrl.searchParams.append('Budget', lead.budget || '');
      targetUrl.searchParams.append('visitDate', lead.visitDate || '');
      targetUrl.searchParams.append('Visit Date', lead.visitDate || '');
      targetUrl.searchParams.append('message', lead.message || '');
      targetUrl.searchParams.append('Message', lead.message || '');
      targetUrl.searchParams.append('sourcePage', lead.sourcePage || '');
      targetUrl.searchParams.append('Source Page', lead.sourcePage || '');
      targetUrl.searchParams.append('sourceCTA', lead.sourceCTA || '');
      targetUrl.searchParams.append('Source CTA', lead.sourceCTA || '');
      targetUrl.searchParams.append('utmSource', lead.utmSource || '');
      targetUrl.searchParams.append('UTM Source', lead.utmSource || '');
      targetUrl.searchParams.append('utmMedium', lead.utmMedium || '');
      targetUrl.searchParams.append('UTM Medium', lead.utmMedium || '');
      targetUrl.searchParams.append('utmCampaign', lead.utmCampaign || '');
      targetUrl.searchParams.append('UTM Campaign', lead.utmCampaign || '');
      targetUrl.searchParams.append('utmTerm', lead.utmTerm || '');
      targetUrl.searchParams.append('UTM Term', lead.utmTerm || '');
      targetUrl.searchParams.append('utmContent', lead.utmContent || '');
      targetUrl.searchParams.append('UTM Content', lead.utmContent || '');
      targetUrl.searchParams.append('consent', lead.consent ? 'Yes' : 'No');
      targetUrl.searchParams.append('Consent', lead.consent ? 'Yes' : 'No');
      targetUrl.searchParams.append('userIp', lead.userIp || '');
      targetUrl.searchParams.append('User IP', lead.userIp || '');
      targetUrl.searchParams.append('date', dateStr);
      targetUrl.searchParams.append('Date', dateStr);
      targetUrl.searchParams.append('time', timeStr);
      targetUrl.searchParams.append('Time', timeStr);
      targetUrl.searchParams.append('timestamp', lead.timestamp);
      targetUrl.searchParams.append('Timestamp', lead.timestamp);

      const payload: Record<string, any> = {
        name: lead.name,
        Name: lead.name,
        phone: lead.phone,
        Phone: lead.phone,
        Mobile: lead.phone,
        email: lead.email || '',
        Email: lead.email || '',
        configuration: lead.configuration || '',
        Configuration: lead.configuration || '',
        config: lead.configuration || '',
        budget: lead.budget || '',
        Budget: lead.budget || '',
        visitDate: lead.visitDate || '',
        'Visit Date': lead.visitDate || '',
        message: lead.message || '',
        Message: lead.message || '',
        sourcePage: lead.sourcePage || '',
        'Source Page': lead.sourcePage || '',
        sourceCTA: lead.sourceCTA || '',
        'Source CTA': lead.sourceCTA || '',
        utmSource: lead.utmSource || '',
        'UTM Source': lead.utmSource || '',
        utmMedium: lead.utmMedium || '',
        'UTM Medium': lead.utmMedium || '',
        utmCampaign: lead.utmCampaign || '',
        'UTM Campaign': lead.utmCampaign || '',
        utmTerm: lead.utmTerm || '',
        'UTM Term': lead.utmTerm || '',
        utmContent: lead.utmContent || '',
        'UTM Content': lead.utmContent || '',
        consent: lead.consent ? 'Yes' : 'No',
        Consent: lead.consent ? 'Yes' : 'No',
        userIp: lead.userIp || '',
        'User IP': lead.userIp || '',
        date: dateStr,
        Date: dateStr,
        time: timeStr,
        Time: timeStr,
        timestamp: lead.timestamp,
        Timestamp: lead.timestamp,
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const response = await fetch(targetUrl.toString(), {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
        redirect: 'follow',
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log(`[LEAD SENT TO GOOGLE SCRIPT WEBHOOK] Phone: ${lead.phone}, status: ${response.status}`);
      if (response.ok) {
        return { success: true, provider: 'Google Apps Script Webhook' };
      }
    } catch (err: any) {
      console.error('[GOOGLE SCRIPT WEBHOOK ERROR]', err?.message || err);
      // Fall through to next provider / fallback
    }
  }

  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;

  // If Google credentials are provided, append to Google Sheet
  if (serviceAccountEmail && privateKey && sheetId) {
    try {
      // Clean private key formatting if passed as escaped string
      privateKey = privateKey.replace(/\\n/g, '\n');

      const auth = new google.auth.JWT({
        email: serviceAccountEmail,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      const dateObj = new Date(lead.timestamp);
      const dateStr = dateObj.toISOString().split('T')[0];
      const timeStr = dateObj.toTimeString().split(' ')[0];

      const rowValues = [
        dateStr,
        timeStr,
        lead.name,
        lead.phone,
        lead.email || '',
        lead.configuration || '',
        lead.budget || '',
        lead.visitDate || '',
        lead.message || '',
        lead.sourcePage || '',
        lead.sourceCTA || '',
        lead.utmSource || '',
        lead.utmMedium || '',
        lead.utmCampaign || '',
        lead.utmTerm || '',
        lead.utmContent || '',
        lead.consent ? 'Yes' : 'No',
        lead.userIp || ''
      ];

      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: 'Sheet1!A:R',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [rowValues],
        },
      });

      console.log(`[LEAD SAVED TO GOOGLE SHEET] Phone: ${lead.phone}`);
      return { success: true, provider: 'Google Sheets' };
    } catch (err: any) {
      console.error('[GOOGLE SHEETS API ERROR]', err?.message || err);
      // Fall through to local storage fallback
    }
  }

  // Local / Serverless Storage Fallback
  try {
    const isServerless = Boolean(
      process.env.VERCEL ||
      process.env.AWS_LAMBDA_FUNCTION_NAME ||
      process.env.NODE_ENV === 'production'
    );
    const baseDir = isServerless ? '/tmp' : process.cwd();
    const scratchDir = path.join(baseDir, 'scratch');
    if (!fs.existsSync(scratchDir)) {
      fs.mkdirSync(scratchDir, { recursive: true });
    }
    const logFilePath = path.join(scratchDir, 'leads_log.json');
    
    let existingLeads: LeadData[] = [];
    if (fs.existsSync(logFilePath)) {
      try {
        const raw = fs.readFileSync(logFilePath, 'utf-8');
        existingLeads = JSON.parse(raw);
      } catch (e) {
        existingLeads = [];
      }
    }

    existingLeads.push(lead);
    fs.writeFileSync(logFilePath, JSON.stringify(existingLeads, null, 2), 'utf-8');

    console.log(`[LEAD SAVED TO FALLBACK STORAGE] Phone: ${lead.phone}`);
    return { success: true, provider: 'Local / Serverless Storage Fallback' };
  } catch (err: any) {
    console.error('[LOCAL LEAD STORAGE ERROR]', err);
    // Rescue: always print full lead details to stdout so hosting logs (Vercel) keep a permanent record
    console.warn('[RESCUED LEAD RECORD]', JSON.stringify(lead));
    return { success: true, provider: 'Console Fallback' };
  }
}
