'use client';

import { useQuery } from '@tanstack/react-query';
import { endpoints } from '~/api/endpoints';
import http from '~/api/http';
import AlbumHero from '~/components/HeroComponents/AlbumHero';

const Album = ({ id }: { id: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['album', id],
    queryFn: async () => (await http(`${endpoints.saavn.album}/${id}`)) as any,
    staleTime: 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <main className='bg-background min-h-screen'>
      <AlbumHero data={data.data.album} onPlay={() => {}} />
      {[1, 2, 34, 5, 6, 7, 8, 9, 0, 11, 22, 33].map((el) => (
        <div key={el} className='px-2 my-2'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam obcaecati
            labore unde quas, aliquid quam corrupti molestias tempore dolor voluptate
            placeat magnam aperiam eaque excepturi! Soluta pariatur dolorem neque unde.
          </p>
        </div>
      ))}
    </main>
  );
};

export default Album;
