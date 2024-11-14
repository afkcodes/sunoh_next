import { FontSize, FontWeight, NumOfLines, TextColor } from '~/types/component.types';

export const fontSizeStyle: { [key in FontSize]: string } = {
  base: 'text-base',
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
};

export const fontWeightStyle: { [key in FontWeight]: string } = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const lineClampStyles: { [key in NumOfLines]: string } = {
  1: 'line-clamp-1',
  2: 'line-clamp-2',
  3: 'line-clamp-3',
  4: 'line-clamp-4',
};

export const textColorStyles: { [key in TextColor]: string } = {
  primary: 'text-foreground',
  secondary: 'text-muted-foreground',
  accent: 'text-primary',
};
