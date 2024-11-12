import { cn } from '~/lib/utils';
import { TileProps } from '~/types/component.types';
import SafeLink from '../SafeLink';
import Figure from '../ui/Figure/Figure';
import TextLink from '../ui/TextLink/TextLink';
import { tileSizeStyles } from './tileStyles';

const Tile: React.FC<TileProps> = ({ size, figureProps, titleProps, subtitleProps }) => {
  const tileSize = tileSizeStyles[size];

  return (
    <SafeLink
      href=''
      className={cn([
        'flex flex-col active:scale-95 transition-all duration-1000 select-none',
        tileSize,
      ])}>
      <Figure {...figureProps} size={size} />
      <div className='flex flex-col mt-0.5 w-full'>
        <TextLink {...titleProps} />
        <TextLink {...subtitleProps} />
      </div>
    </SafeLink>
  );
};

export default Tile;
