import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { endpoints } from '~/api/endpoints';
import http from '~/api/http';
import { getQueryClient } from '~/utils/getQueryclient';
import Playlist from './playlist';

interface Props {
  params: {
    id: string;
  };
}
const index = async ({ params }: Props) => {
  const { id } = params;
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['playlist', id],
    queryFn: async () => await http(`${endpoints.saavn.playlist}/${id}`),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Playlist id={id} />
    </HydrationBoundary>
  );
};

export default index;
