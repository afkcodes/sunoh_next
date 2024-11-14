import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { endpoints } from '~/api/endpoints';
import http from '~/api/http';
import { getQueryClient } from '~/utils/getQueryclient';
import Album from './album';

interface Props {
  params: {
    id: string;
  };
}
const index = async ({ params }: Props) => {
  const { id } = params;
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['album', id],
    queryFn: async () => await http(`${endpoints.saavn.album}/${id}`),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Album id={id} />
    </HydrationBoundary>
  );
};

export default index;
