import Image from 'next/image';
import { FallbackImageProps } from '~/types/component.types';
import { getShimmer } from '~/utils/blurDataUrl';
import { objectFitStyle, objectPositionStyle } from '../Figure/figure.style';

const ImageFallback: React.FC<FallbackImageProps> = ({
  source,
  alt = 'image',
  fill = true,
  fit = 'cover',
  position = 'top',
  height,
  width,
  priority = false,
}) => {
  const objectFit = objectFitStyle[fit];
  const objectPosition = objectPositionStyle[position];

  return (
    <Image
      src={source}
      alt={alt}
      fill={fill}
      className={`${objectFit} ${objectPosition}`}
      height={height}
      width={width}
      priority={priority}
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      placeholder='blur'
      blurDataURL={getShimmer()}
    />
  );
};

export default ImageFallback;
