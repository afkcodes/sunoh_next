import { BorderRadius, ObjectFit, ObjectPosition, Sizes } from '~/types/common.types';

export const objectPositionStyle: { [key in ObjectPosition]: string } = {
  top: 'object-top',
  center: 'object-center',
  left: 'object-left',
  right: 'object-right',
};

export const objectFitStyle: { [key in ObjectFit]: string } = {
  cover: 'object-cover',
  contain: 'object-contain',
};

export const figureSize: { [key in Sizes]: string } = {
  xxxs: 'size-6',
  xxs: 'size-9',
  xs: 'size-12',
  sm: 'size-14',
  md: 'size-20',
  lg: 'size-32',
  xl: 'size-40',
  xxl: 'size-44',
  xxxl: 'size-64',
  free: 'h-full w-full',
};

export const borderRadiusStyle: { [key in BorderRadius]: number } = {
  sm: 2,
  md: 6,
  lg: 8,
  xl: 12,
  none: 0,
  '2xl': 16,
  '3xl': 24,
  full: 999,
};
