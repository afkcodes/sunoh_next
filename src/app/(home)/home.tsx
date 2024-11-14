'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchHomeData } from '~/api/fetchers';
import SectionContainer from '~/components/SectionContainer/SectionContainer';
import { dataConfigs } from '~/configs/data.config';
import { isValidArray } from '~/utils/common';

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['home'],
    queryFn: fetchHomeData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main>
      {isValidArray(data?.data) ? (
        <SectionContainer
          sectionHeaderConfig={{
            actionText: 'More',
            onclick: () => {},
          }}
          data={data?.data}
          sectionConfig={{
            tileContainerConfig: {
              dataLimit: 5,
              tileConfig: {
                figureProps: {
                  radius: 'md',
                },
                size: 'xl',
                titleProps: {
                  color: 'primary',
                  fontSize: 'sm',
                  fontWeight: 'semibold',
                  numOfLines: 1,
                  type: 'text',
                },
                subtitleProps: {
                  color: 'secondary',
                  fontSize: 'xs',
                  fontWeight: 'normal',
                  numOfLines: 1,
                  type: 'text',
                },
              },
            },
          }}
          dataConfig={dataConfigs.album}
        />
      ) : null}
    </main>
  );
};

export default Home;
