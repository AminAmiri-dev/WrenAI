export const HIDE_VENDOR_DOC_LINKS =
  process.env.NEXT_PUBLIC_HIDE_VENDOR_DOC_LINKS === 'true';

export const VENDOR_DOCS_PREFIX = 'https://docs.getwren.ai/';

export function isVendorDocsUrl(href?: string | null) {
  return !!href && href.startsWith(VENDOR_DOCS_PREFIX);
}
