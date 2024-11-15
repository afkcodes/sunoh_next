import { Fragment } from 'react';
import Section from '~/components/Section/Section';
import { SectionContainerProps } from '~/types/component.types';
import { isValidArray } from '~/utils/common';

const SectionContainer: React.FC<SectionContainerProps> = ({
  data,
  dataConfig,
  sectionConfig,
  sectionHeaderConfig,
}) => {
  return (
    <Fragment>
      {isValidArray(data)
        ? data.map((dataItem: any, idx: number) => (
            <Section
              key={idx}
              data={dataItem}
              dataConfig={dataConfig}
              sectionConfig={sectionConfig}
              sectioHeaderConfig={{
                ...sectionHeaderConfig,
                heading: dataItem?.heading,
              }}
            />
          ))
        : null}
    </Fragment>
  );
};

export default SectionContainer;
