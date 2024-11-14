import { BorderRadius, ObjectFit, ObjectPosition, Sizes } from './common.types';

export type ImageMode = 'multi' | 'single';

export interface FallbackImageProps {
  source: string;
  alt: string;
  fill?: boolean;
  fit?: ObjectFit;
  position?: ObjectPosition;
  height?: number;
  width?: number;
  priority?: boolean;
}

export interface FigureProps extends FallbackImageProps {
  mode?: ImageMode;
  size?: Sizes;
  radius?: BorderRadius;
}

export type TextType = 'text' | 'link';
export type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type NumOfLines = 1 | 2 | 3 | 4;
export type FontSize =
  | 'base'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl';

export type TextColor = 'primary' | 'secondary' | 'accent';

export interface TextLinkProps {
  text: string;
  type?: TextType;
  fontWeight?: FontWeight;
  fontSize?: FontSize;
  color?: TextColor;
  numOfLines?: NumOfLines;
}

export interface TileProps {
  titleProps: TextLinkProps;
  subtitleProps: TextLinkProps;
  figureProps: FigureProps;
  size: Sizes;
  href?: string;
}
export interface TileConfig {
  titleProps: Omit<TextLinkProps, 'text'>;
  subtitleProps: Omit<TextLinkProps, 'text'>;
  figureProps: Omit<FigureProps, 'source' | 'alt'>;
  size: Sizes;
}

export interface TileContainerProps {
  data: any;
  dataConfig: any;
  tileConfig: TileConfig;
  dataLimit?: number;
}

export interface SectionHeaderProps {
  heading: string;
  actionText?: string;
  onclick?: (param?: any) => void;
}

export interface TileContainerConfig {
  dataLimit?: number;
  tileConfig: TileConfig;
}

export interface SectionContainerProps {
  data: any;
  dataConfig: any;
  sectionHeaderConfig: Omit<SectionHeaderProps, 'heading'>;
  sectionConfig: {
    tileContainerConfig: TileContainerConfig;
  };
}

export interface SectionProps {
  sectioHeaderConfig?: SectionHeaderProps;
  sectionConfig: {
    tileContainerConfig: TileContainerConfig;
  };
  dataConfig: any;
  data: any;
}
