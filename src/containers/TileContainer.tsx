import Tile from '~/components/Tile/Tile';
import { propDataCreator } from '~/helpers/component.helper';
import { TileContainerProps } from '~/types/component.types';
import { getNonEmptyStringData, isValidArray } from '~/utils/common';

const TileContainer: React.FC<TileContainerProps> = ({
  data,
  dataConfig,
  tileConfig,
  dataLimit = 5,
}) => {
  return (
    <ul className='flex gap-x-3'>
      {isValidArray(data?.data)
        ? data?.data?.slice(0, dataLimit).map((dataItem: any, idx: number) => {
            const componentData = propDataCreator(dataItem, dataConfig);
            return (
              <li key={idx}>
                <Tile
                  href={componentData.href}
                  figureProps={{
                    source: componentData?.image || '',
                    alt: `${componentData?.title}_poster_image`,
                    radius: tileConfig.figureProps.radius,
                  }}
                  titleProps={{
                    ...tileConfig.titleProps,
                    text: componentData?.title,
                  }}
                  subtitleProps={{
                    ...tileConfig.subtitleProps,
                    text:
                      getNonEmptyStringData(componentData?.subtitle) ||
                      componentData.artists,
                  }}
                  size={tileConfig.size}
                />
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default TileContainer;
