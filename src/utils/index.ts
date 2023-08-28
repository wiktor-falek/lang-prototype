export function isAlphaNumeric(s?: string) {
  return /^[a-z0-9]+$/gi.test(s ?? "");
}

export function isAlpha(s?: string) {
  return /^[a-z]+$/gi.test(s ?? "");
}

export function isNumeric(s?: string) {
  return /^[0-9]+$/gi.test(s ?? "");
}
