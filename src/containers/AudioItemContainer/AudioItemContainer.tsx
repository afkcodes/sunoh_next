import { Fragment } from 'react';
import AudioItem from '~/components/AudioItem/AudioItem';
import { propDataCreator } from '~/helpers/component.helper';
import { isValidArray } from '~/utils/common';

interface AudioItemContainerProps {
  data: any;
  config: any;
}
const AudioItemContainer: React.FC<AudioItemContainerProps> = ({ data, config }) => {
  return (
    <section className='py-3'>
      {isValidArray(data) ? (
        <Fragment>
          {data.map((dataItem: string, idx: number) => {
            // console.log({ dataItem, config });

            const componentData = propDataCreator(dataItem, config);
            console.log(componentData);
            return (
              <AudioItem
                audioData={dataItem}
                onClick={function (item: any): void {
                  throw new Error('Function not implemented.');
                }}
                onOptionsClick={function (item: any): void {
                  throw new Error('Function not implemented.');
                }}
                type='indexed'
                currentProgress={0}
                index={idx + 1}
                currentTrackId={''}
                {...componentData}
              />
            );
          })}
        </Fragment>
      ) : null}
    </section>
  );
};

export default AudioItemContainer;
