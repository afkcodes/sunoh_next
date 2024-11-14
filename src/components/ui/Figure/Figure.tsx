import { Squircle } from '@squircle-js/react';
import { IMAGE_MODE } from '~/constants/component.constants';
import { cn } from '~/lib/utils';
import { FigureProps } from '~/types/component.types';

import ImageFallback from '../ImageFallback/ImageFallback';
import { borderRadiusStyle, figureSize } from './figure.style';

const Figure: React.FC<FigureProps> = ({
  size = 'md',
  mode = IMAGE_MODE.SINGLE,
  radius = 'none',
  ...props
}) => {
  const imageSize = figureSize[size];
  const borderRadius = borderRadiusStyle[radius];
  return (
    <Squircle
      cornerRadius={borderRadius}
      cornerSmoothing={1}
      className='overflow-hidden h-full w-full'>
      <figure className={cn(['relative overflow-hidden', imageSize])}>
        {IMAGE_MODE.SINGLE ? <ImageFallback {...props} /> : <ImageFallback {...props} />}
      </figure>
    </Squircle>
  );
};

export default Figure;
