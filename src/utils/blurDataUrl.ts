export const getBlurDataUrl = (width: number = 8, height: number = 8) => {
  // Create a small colored rectangle
  return `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='1'/%3E%3C/filter%3E%3Crect preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' fill='%23ECECEC'/%3E%3C/svg%3E`;
};

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#ECECEC" offset="20%" />
      <stop stop-color="#F5F5F5" offset="50%" />
      <stop stop-color="#ECECEC" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#ECECEC" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

// Function to convert shimmer to base64
export const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

// Combined function to get shimmer effect
export const getShimmer = (w: number = 700, h: number = 475) => {
  return `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
};
