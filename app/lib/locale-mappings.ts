export type LocaleMappings = Record<string, string>;

export function parseLocaleMappings(payload: string | null | undefined): LocaleMappings {
  if (!payload) return {};
  try {
    const parsed = JSON.parse(payload) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const mappings: LocaleMappings = {};
    for (const [shopifyLocale, apiCode] of Object.entries(parsed as Record<string, unknown>)) {
      const locale = String(shopifyLocale ?? "").trim();
      const code = String(apiCode ?? "").trim();
      if (locale && code) mappings[locale] = code;
    }
    return mappings;
  } catch {
    return {};
  }
}

export function serializeLocaleMappings(mappings: LocaleMappings): string {
  const clean: LocaleMappings = {};
  for (const [shopifyLocale, apiCode] of Object.entries(mappings)) {
    const locale = String(shopifyLocale ?? "").trim();
    const code = String(apiCode ?? "").trim();
    if (locale && code) clean[locale] = code;
  }
  return JSON.stringify(clean);
}

/** Find Shopify locale mapped to a given API language code. */
export function resolveShopifyLocaleForApiLanguage(
  mappings: LocaleMappings,
  apiLanguageCode: string,
): string | null {
  const target = String(apiLanguageCode ?? "").trim().toLowerCase();
  if (!target) return null;
  for (const [shopifyLocale, apiCode] of Object.entries(mappings)) {
    if (String(apiCode).trim().toLowerCase() === target) {
      return shopifyLocale;
    }
  }
  return null;
}

/** Resolve store locale from the first selected API language that has a mapping. */
export function resolveShopifyLocaleForApiLanguages(
  mappings: LocaleMappings,
  apiLanguageCodes: string[],
): string | null {
  for (const code of apiLanguageCodes) {
    const locale = resolveShopifyLocaleForApiLanguage(mappings, code);
    if (locale) return locale;
  }
  return null;
}
