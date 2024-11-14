import { Fragment } from 'react';
import { SectionContainerProps } from '~/types/component.types';
import { isValidArray } from '~/utils/common';
import Section from '../Section/Section';

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
