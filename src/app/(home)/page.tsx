import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { fetchHomeData } from '~/api/fetchers';
import { getQueryClient } from '~/utils/getQueryclient';
import Home from './home';

const index = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['home'],
    queryFn: fetchHomeData,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
};

export default index;
