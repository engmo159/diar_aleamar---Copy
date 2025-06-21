
/**
 * Utility function to conditionally join CSS class names
 */
export function cn(...classes: (string | undefined | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function addClass(...classes: (string | undefined | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getThemeClass(isDarkMode: boolean): string {
  return isDarkMode ? 'dark' : '';
}
