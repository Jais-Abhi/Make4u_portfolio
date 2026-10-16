import { google } from "googleapis";
import { NextResponse } from "next/server";

const SERVICE_LABELS = {
  "web-app": "Website & App Development",
  "app-development": "App Development",
  "seo-growth": "SEO & Digital Growth",
  "design-video": "Graphic Design & Video Editing",
  "photo-video": "Photography & Videography",
  "ai-automation": "AI & Business Automation",
  "subscription": "Monthly Subscription Plan",
  "custom": "Other / Custom Enterprise Scope",
};

function validatePayload(body) {
  if (!body || typeof body !== "object") {
    return { valid: false, message: "Invalid request payload." };
  }

  const { name, email, phone, service, details } = body;

  if (!name || typeof name !== "string" || !name.trim()) {
    return { valid: false, message: "Full name is required." };
  }
  if (name.trim().length > 150) {
    return { valid: false, message: "Full name must be under 150 characters." };
  }

  if (!email || typeof email !== "string" || !email.trim()) {
    return { valid: false, message: "Email address is required." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim()) || email.trim().length > 254) {
    return { valid: false, message: "A valid email address is required." };
  }

  if (phone && typeof phone === "string" && phone.trim().length > 50) {
    return { valid: false, message: "Phone number must be under 50 characters." };
  }

  if (!service || typeof service !== "string" || !service.trim()) {
    return { valid: false, message: "Service selection is required." };
  }
  if (service.trim().length > 150) {
    return { valid: false, message: "Service selection is too long." };
  }

  if (!details || typeof details !== "string" || !details.trim()) {
    return { valid: false, message: "Project details are required." };
  }
  if (details.trim().length > 5000) {
    return { valid: false, message: "Project details must be under 5000 characters." };
  }

  return { valid: true };
}

export async function POST(request) {
  console.log("[Contact Form] Request received");

  let body;
  try {
    body = await request.json();
  } catch {
    console.warn("[Contact Form] Validation failed", { reason: "Malformed JSON payload" });
    return NextResponse.json(
      { error: "Invalid JSON in request body." },
      { status: 400 }
    );
  }

  const validation = validatePayload(body);
  if (!validation.valid) {
    console.warn("[Contact Form] Validation failed", { reason: validation.message });
    return NextResponse.json(
      { error: validation.message },
      { status: 400 }
    );
  }

  const { name, email, phone, service, details } = body;

  const sheetId = process.env.GOOGLE_SHEET_ID;
  const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

  if (!sheetId || !serviceAccountJson) {
    console.error("[Contact Form] Google configuration missing", {
      hasSheetId: !!sheetId,
      hasServiceAccount: !!serviceAccountJson,
    });
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV !== "production"
            ? "Google Sheets configuration missing on server."
            : "Unable to process inquiry. Please try again later.",
      },
      { status: 500 }
    );
  }

  let auth;
  try {
    console.log("[Contact Form] Google authentication started");

    let credentials;
    try {
      credentials =
        typeof serviceAccountJson === "string"
          ? JSON.parse(serviceAccountJson)
          : serviceAccountJson;
    } catch (parseErr) {
      console.error("[Contact Form] Google Sheets request failed", {
        stage: "credentials_parse",
        message: parseErr.message,
      });
      return NextResponse.json(
        {
          error:
            process.env.NODE_ENV !== "production"
              ? "Invalid Google service account JSON configuration."
              : "Unable to process inquiry. Please try again later.",
        },
        { status: 500 }
      );
    }

    if (credentials.private_key) {
      credentials.private_key = credentials.private_key.replace(/\\n/g, "\n");
    }

    auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
  } catch (authErr) {
    console.error("[Contact Form] Google Sheets request failed", {
      stage: "authentication_init",
      message: authErr.message,
      code: authErr.code,
    });
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV !== "production"
            ? `Google Auth error: ${authErr.message}`
            : "Unable to process inquiry. Please try again later.",
      },
      { status: 500 }
    );
  }

  try {
    const sheets = google.sheets({ version: "v4", auth });

    const timestamp = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "medium",
      hour12: true,
    }).format(new Date());

    const resolvedService = SERVICE_LABELS[service.trim()] || service.trim();

    console.log("[Contact Form] Appending row to Google Sheets");

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:F",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            timestamp,
            name.trim(),
            email.trim(),
            phone && typeof phone === "string" ? phone.trim() : "",
            resolvedService,
            details.trim(),
          ],
        ],
      },
    });

    const updatedRows = response.data?.updates?.updatedRows;
    const updatedRange = response.data?.updates?.updatedRange;

    if (!updatedRange || !updatedRows || updatedRows < 1) {
      console.error("[Contact Form] Google Sheets request failed", {
        stage: "verify_append",
        message: "Google Sheets response did not confirm updated row.",
        httpStatus: response.status,
      });
      return NextResponse.json(
        {
          error:
            process.env.NODE_ENV !== "production"
              ? "Google Sheets did not confirm row insertion."
              : "Unable to process inquiry. Please try again later.",
        },
        { status: 500 }
      );
    }

    console.log("[Contact Form] Row saved successfully", {
      updatedRange,
      updatedRows,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully.",
      },
      { status: 200 }
    );
  } catch (apiErr) {
    console.error("[Contact Form] Google Sheets request failed", {
      stage: "sheets_append",
      message: apiErr.message,
      httpStatus: apiErr.status || apiErr.code,
      googleErrorCode: apiErr.errors?.[0]?.reason || apiErr.code,
    });

    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV !== "production"
            ? `Google Sheets API error: ${apiErr.message}`
            : "Unable to process inquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}
