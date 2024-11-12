import { proxyImageURL } from '~/api/endpoints';
import LRUCache from './Cache';

const colorCache = new LRUCache<string, string>(50);

export function getDominantColor(imageSrc: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // Check cache first
    const cachedColor = colorCache.get(imageSrc);
    if (cachedColor) {
      resolve(cachedColor);
      return;
    }

    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { willReadFrequently: true });

      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      const size = Math.min(25, img.width, img.height);
      canvas.width = size;
      canvas.height = size;

      ctx.drawImage(img, 0, 0, size, size);

      const imageData = ctx.getImageData(0, 0, size, size);
      const data = imageData.data;

      const colorCounts = new Uint32Array(64 * 64 * 64);
      let maxCount = 0;
      let dominantColor = 0;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i] >> 2;
        const g = data[i + 1] >> 2;
        const b = data[i + 2] >> 2;

        const index = (r << 12) | (g << 6) | b;
        const count = ++colorCounts[index];

        if (count > maxCount) {
          maxCount = count;
          dominantColor = index;
        }
      }

      const r = ((dominantColor >> 12) & 63) << 2;
      const g = ((dominantColor >> 6) & 63) << 2;
      const b = (dominantColor & 63) << 2;

      const color = `${r}, ${g}, ${b}`;

      // Cache the result
      colorCache.set(imageSrc, color);
      resolve(color);
    };

    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = `${proxyImageURL}${imageSrc}`;
  });
}
