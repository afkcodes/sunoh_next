import TileContainer from '~/containers/TileContainer';
import { SectionProps } from '~/types/component.types';
import SectionHeader from '../SectionHeader/SectionHeader';

const Section: React.FC<SectionProps> = ({
  sectionConfig,
  sectioHeaderConfig,
  data,
  dataConfig,
}) => {
  return (
    <section className='my-3'>
      {sectioHeaderConfig ? <SectionHeader {...sectioHeaderConfig} /> : null}
      <div className='flex px-3 overflow-x-auto no-scrollbar gap-x-3'>
        {sectionConfig.tileContainerConfig ? (
          <TileContainer
            dataConfig={dataConfig}
            data={data}
            tileConfig={sectionConfig.tileContainerConfig.tileConfig}
          />
        ) : null}
      </div>
    </section>
  );
};

export default Section;
