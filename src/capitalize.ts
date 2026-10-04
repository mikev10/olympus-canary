/** The text with its first character upper-cased; the rest is unchanged. */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
