/**
 * Une SC_BASE_URL con un path (ej. /b2b-gateway/api/Quoted/QuoteCA7) sin // duplicados.
 */
export function joinSanCristobalUrl(base: string, path: string): string {
  const b = base.trim().replace(/\/+$/, "");
  const p = path.trim().replace(/^\/+/, "");
  if (!b) return `/${p}`;
  return `${b}/${p}`;
}
