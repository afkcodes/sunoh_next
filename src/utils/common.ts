export const isValidFunction = (fun: any) => typeof fun === 'function';
export const isValidArray = (arr: any[]) => arr && Array.isArray(arr) && arr.length > 0;
export const isValidObject = (obj: any): boolean =>
  obj !== null && typeof obj === 'object' && !Array.isArray(obj);

export const isEmptyObject = (obj: any): boolean =>
  obj !== null &&
  typeof obj === 'object' &&
  !Array.isArray(obj) &&
  Object.keys(obj).length > 0;

export const deepCompare = (obj1: any, obj2: any): boolean => {
  // Check if the types of both objects are the same
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // Handle null and primitive types (string, number, boolean, etc.)
  if (
    obj1 === null ||
    ['string', 'number', 'boolean', 'undefined'].includes(typeof obj1)
  ) {
    return obj1 === obj2;
  }

  // Handle arrays
  if (Array.isArray(obj1)) {
    // Check if the arrays have the same length
    if (obj1.length !== obj2.length) {
      return false;
    }
    // Recursively compare each element in the array
    for (let i = 0; i < obj1.length; i++) {
      if (!deepCompare(obj1[i], obj2[i])) {
        return false;
      }
    }
    return true;
  }

  // Handle objects
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  // Check if the objects have the same number of keys
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  // Recursively compare each key-value pair in the objects
  for (const key of obj1Keys) {
    // Check if the key exists in both objects and the values are deeply equal
    if (!obj2Keys.includes(key) || !deepCompare(obj1[key], obj2[key])) {
      return false;
    }
  }

  // If all checks pass, the objects are deeply equal
  return true;
};

export const typeChecker = (data: any) => {
  let type = '';

  if (typeof data === 'object' && !Array.isArray(data)) {
    type = 'object';
  }
  if (Array.isArray(data)) {
    type = 'array';
  }

  if (['string', 'number', 'boolean', 'undefined'].includes(typeof data)) {
    type = typeof data;
  }

  return type;
};

export const getColorWithOpacity = (hexColor: string, opacity: number): string => {
  // Ensure opacity is within the valid range of 0 to 1
  opacity = Math.min(1, Math.max(0, opacity));

  // Parse the hex color to RGB components
  const r: number = parseInt(hexColor.slice(1, 3), 16);
  const g: number = parseInt(hexColor.slice(3, 5), 16);
  const b: number = parseInt(hexColor.slice(5, 7), 16);

  // Calculate the new RGB values with opacity
  const newR: number = Math.round(r * opacity);
  const newG: number = Math.round(g * opacity);
  const newB: number = Math.round(b * opacity);

  // Convert the RGB values to hex and pad with zeros if needed
  const newHexR: string = newR.toString(16).padStart(2, '0');
  const newHexG: string = newG.toString(16).padStart(2, '0');
  const newHexB: string = newB.toString(16).padStart(2, '0');

  // Create the new hex color with opacity
  const newHexColor: string = `#${newHexR}${newHexG}${newHexB}`;

  return newHexColor;
};

export const findDuplicatesAndRemove = <T>(
  jsonArray: T[],
  key: keyof T,
  count?: number
): T[] => {
  const seen = new Set<any>();
  const uniqueArray: T[] = [];

  for (const item of jsonArray) {
    const keyValue = item[key];

    if (!seen.has(keyValue)) {
      seen.add(keyValue);
      uniqueArray.push(item);

      if (count !== undefined && uniqueArray.length >= count) {
        break;
      }
    }
  }

  return uniqueArray;
};

export const getGreeting = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  let greeting: string;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good morning !';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good afternoon !';
  } else if (currentHour >= 18 && currentHour < 22) {
    greeting = 'Good evening !';
  } else {
    greeting = 'Good night !';
  }
  return greeting;
};

export const isColorDark = (color: string) => {
  // Convert color to RGB
  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.replace('#', ''), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  // Calculate perceived brightness
  const calculatePerceivedBrightness = ({
    r,
    g,
    b,
  }: {
    r: number;
    g: number;
    b: number;
  }) => {
    return Math.sqrt(r * r * 0.299 + g * g * 0.587 + b * b * 0.114);
  };

  const { r, g, b } = hexToRgb(color);
  const brightness = calculatePerceivedBrightness({ r, g, b });

  // Set a threshold value for determining darkness (adjust as needed)
  const threshold = 100; // You can adjust this threshold as needed

  return brightness < threshold;
};

// interface MediaUrl {
//   quality: string;
//   link: string;
// }

interface Artist {
  name: string;
  id: string;
  image: Array<{ quality: string; link: string }>;
  type: string;
}
export type MediaQuality = '12kbps' | '48kbps' | '96kbps' | '160kbps' | '320kbps';

export const getUniqueId = () =>
  Date.now().toString(36) + Math.random().toString(36).substr(2);

type ArtistsInput = Artist[] | string;

export function getArtistNames(data: ArtistsInput): string {
  if (typeof data === 'string') {
    return data;
  }

  if (Array.isArray(data)) {
    const names = data.map((artist) => artist.name.trim());
    return names.join(', ');
  }
  return '';
}

export function decodeHtmlEntities(text: string): string {
  // Return empty string for null/undefined
  if (!text) return '';

  // Check if we're running on the server
  if (typeof window === 'undefined') {
    // Server-side decoding
    return text
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&#x27;/g, "'")
      .replace(/&#x2F;/g, '/')
      .replace(/&#32;/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&#160;/g, ' ')
      .replace(/\&zwj;/g, '')
      .replace(/\&zwnj;/g, '');
  } else {
    // Client-side decoding using DOMParser
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      return doc.documentElement.textContent || '';
    } catch (error) {
      // Fallback to server-side method if DOMParser fails
      console.warn('DOMParser failed, falling back to regex replacement');
      return text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&#x27;/g, "'")
        .replace(/&#x2F;/g, '/')
        .replace(/&#32;/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&#160;/g, ' ')
        .replace(/\&zwj;/g, '')
        .replace(/\&zwnj;/g, '');
    }
  }
}

export function timeToReadable(seconds: number) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hrs > 0) {
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  } else if (mins > 0) {
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  } else {
    return `0:${secs.toString().padStart(2, '0')}`;
  }
}

export function getNonEmptyStringData(data: string) {
  return data && data?.length > 0 ? data : null;
}

export function throttle<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let lastCall = 0;

  return function (this: any, ...args: Parameters<T>) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  } as T;
}

export function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
}

export function capitalizeFirstLetter(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Debounce function in TypeScript
export function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<F>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
}

export function addUniqueObject(
  array: any[],
  object: any,
  key: string,
  maxLength: number = 12
) {
  // Check if an object with the same key value already exists in the array
  const exists = array.some((item) => item[key] === object[key]);

  // If the object doesn't already exist, perform the operations
  if (!exists) {
    // If the array length is already at maxLength, remove the last element
    if (array.length >= maxLength) {
      array.pop();
    }
    // Add the new object to the beginning of the array
    array.unshift(object);
  }

  return array;
}

export function formatNumber(number: number) {
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  const tier = Math.floor(Math.log10(Math.abs(number)) / 3);

  if (tier === 0) return number.toString();

  const suffix = suffixes[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = number / scale;

  return scaled.toFixed(1).replace(/\.0$/, '') + suffix;
}

export function formatListeners(input: string): string {
  const regex = /•\s*(\d+)\s*Listeners/i;
  const match = input.match(regex);

  if (match && match[1]) {
    const listeners = parseInt(match[1], 10);
    const suffixes = ['K', 'M', 'B', 'T'];
    const tier = Math.floor(Math.log10(listeners) / 3);

    if (tier === 0) return `• ${listeners} Listeners`;

    const suffix = suffixes[tier - 1];
    const scale = Math.pow(10, tier * 3);
    const scaled = listeners / scale;

    return `• ${scaled.toFixed(1).replace(/\.0$/, '')}${suffix} Listeners`;
  }

  return '';
}
