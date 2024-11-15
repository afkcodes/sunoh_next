'use client';

import { useQuery } from '@tanstack/react-query';
import { endpoints } from '~/api/endpoints';
import http from '~/api/http';
import PlaylistHero from '~/components/HeroComponents/PlaylistHero';
import { dataConfigs } from '~/configs/data.config';
import AudioItemContainer from '~/containers/AudioItemContainer/AudioItemContainer';
import { isValidArray } from '~/utils/common';

const Playlist = ({ id }: { id: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['playlist', id],
    queryFn: async () => (await http(`${endpoints.saavn.playlist}/${id}`)) as any,
    staleTime: 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className='bg-background min-h-screen'>
      <PlaylistHero data={data?.data?.album} onPlay={() => {}} />
      <AudioItemContainer
        data={isValidArray(data?.data?.album?.list) ? data?.data?.album?.list : []}
        config={dataConfigs.audio}
      />
    </main>
  );
};

export default Playlist;
