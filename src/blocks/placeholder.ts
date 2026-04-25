/**
 * SVG placeholder image generators.
 * Returns data URIs that render inline — no external requests needed.
 */

/** Product placeholder — shows a shopping bag icon */
export function placeholderProduct(width = 400, height = 400, label = "Product"): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="#f1f5f9"/>
    <g transform="translate(${width / 2}, ${height / 2 - 10})" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M-16 -8h32l4 28H-20z"/>
      <path d="M-8 -8V-14a12 12 0 0 1 16 0v6"/>
    </g>
    <text x="${width / 2}" y="${height / 2 + 28}" text-anchor="middle" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="13">${label}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/** Avatar placeholder — shows initials in a circle */
export function placeholderAvatar(name = "U", size = 80): string {
  const initial = name.charAt(0).toUpperCase();
  const colors = ["#6366f1", "#8b5cf6", "#ec4899", "#f97316", "#14b8a6", "#3b82f6"];
  const color = colors[initial.charCodeAt(0) % colors.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="${color}"/>
    <text x="${size / 2}" y="${size / 2 + size * 0.13}" text-anchor="middle" fill="white" font-family="system-ui,sans-serif" font-size="${size * 0.4}" font-weight="600">${initial}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/** Landscape placeholder — shows a mountain/sun icon */
export function placeholderLandscape(width = 800, height = 400, label = "Image"): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="#f1f5f9"/>
    <g transform="translate(${width / 2}, ${height / 2 - 15})">
      <circle cx="12" cy="-12" r="8" fill="#cbd5e1"/>
      <path d="M-24 20L-8 -4L4 12L12 4L24 20z" fill="#cbd5e1"/>
    </g>
    <text x="${width / 2}" y="${height / 2 + 30}" text-anchor="middle" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="13">${label}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
