/** Home (`/`) matches exactly; other hrefs match when pathname starts with href. */
export function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
