const FORM_ENDPOINT = "https://formsubmit.co/ajax/adhirealty.uae@gmail.com";

/**
 * Sends a lead form to the ADHIHAVEN inbox without taking the visitor away
 * from the website. FormSubmit handles delivery for this static Vite app.
 */
export async function submitLeadForm(fields, subject) {
  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...fields,
      _subject: subject,
      _template: "table",
      _captcha: "false",
      _honey: "",
    }),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || (result?.success !== true && result?.success !== "true")) {
    throw new Error("The form could not be sent. Please try again.");
  }

  return result;
}

export const CONTACT_EMAIL = "adhirealty.uae@gmail.com";
export const CONTACT_PHONE = "+971501234567";
