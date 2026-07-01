// Single source of truth for the page's contact + demo links.
// The whole landing page points at one action: text Carson for a free preview.

const PHONE_TEL = "+13614638200";

/** Prefilled SMS so the captain doesn't have to think of what to say.
 *  Send-ready as written: no blanks for him to fill in before hitting send. */
const SMS_BODY = "Hey, saw your site. I want a free preview for my charter.";

/** Carson's business line, formatted for display. */
export const PHONE_DISPLAY = "361-463-8200";

/** tel: link for the same number. */
export const PHONE_HREF = `tel:${PHONE_TEL}`;

/** tap-to-text link with the message prefilled. */
export const SMS_HREF = `sms:${PHONE_TEL}?&body=${encodeURIComponent(SMS_BODY)}`;

/** The live charter demo. Opens in a new tab so the landing page stays put. */
export const DEMO_URL = "https://rockport-bay-charters-demov1.vercel.app";
