'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, MoreVertical } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import ActionButtons from '../ActionButtons';
import Figure from '../ui/Figure/Figure';
import TextLink from '../ui/TextLink/TextLink';

interface PlaylistData {
  title: string;
  subtitle: string;
  images: { link: string }[];
  listCount: string;
  year: string;
}

interface AlbumHeroProps {
  data: PlaylistData;
  onPlay: () => void;
  isPlaying?: boolean;
  isSaved?: boolean;
  onToggleSave?: () => void;
  onBack?: () => void;
  onMore?: () => void;
}

const AlbumHero: React.FC<AlbumHeroProps> = ({
  data,
  onPlay,
  isPlaying = false,
  isSaved = false,
  onToggleSave,
  onBack = () => window.history.back(),
  onMore = () => {},
}) => {
  const { scrollY } = useScroll();
  const titleRef = useRef<HTMLDivElement>(null);
  const [shouldShowHeader, setShouldShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        setShouldShowHeader(rect.top <= 5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageScale = useTransform(scrollY, [0, 300], [1, 0.7]);

  return (
    <div className='relative w-full'>
      {/* Header */}
      <motion.div
        className='fixed top-0 left-0 right-0 z-50 h-14 bg-background/90 backdrop-blur-sm px-2'
        initial={{ opacity: 0, y: -64 }}
        animate={{
          opacity: shouldShowHeader ? 1 : 0,
          y: shouldShowHeader ? 0 : -64,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}>
        <div className='relative h-full'>
          <div className='flex justify-between items-center h-full'>
            {/* Back Button */}
            <motion.button
              onClick={onBack}
              className='justify-self-start shrink-0 flex flex-1 '
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: shouldShowHeader ? 1 : 0,
                x: shouldShowHeader ? 0 : -20,
              }}
              transition={{ duration: 0.3, delay: 0.1 }}>
              <ChevronLeft className='w-6 h-6' />
            </motion.button>

            {/* Centered Title */}
            <motion.div
              className='flex justify-center items-center w-full px-4'
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: shouldShowHeader ? 1 : 0,
                y: shouldShowHeader ? 0 : -10,
              }}
              transition={{ duration: 0.3, delay: 0.2 }}>
              <TextLink
                text={data?.title}
                fontWeight='medium'
                fontSize='lg'
                numOfLines={1}
              />
            </motion.div>

            {/* More Button */}
            <motion.button
              onClick={onMore}
              className='justify-self-end shrink-0 '
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: shouldShowHeader ? 1 : 0,
                x: shouldShowHeader ? 0 : 20,
              }}
              transition={{ duration: 0.3, delay: 0.1 }}>
              <MoreVertical className='w-6 h-6' />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Rest of the component remains the same */}
      <div className='relative bg-background'>
        <div className='absolute top-0 left-0 right-0 h-[55vh] overflow-hidden'>
          <div
            className='absolute inset-0 bg-center bg-cover'
            style={{
              backgroundImage: `url(${data.images[2].link})`,
              filter: 'blur(20px)',
              transform: 'scale(1.5)',
            }}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-background/60 via-background/60 to-background' />
        </div>

        <div className='relative pt-10 px-2 min-h-[50vh]'>
          <div className='flex flex-col items-center gap-6'>
            <motion.div className='flex-shrink-0' style={{ scale: imageScale }}>
              <Figure
                source={data?.images[2]?.link as string}
                alt={data?.title}
                fit='cover'
                size='xxxl'
                radius='lg'
              />
            </motion.div>

            <motion.div className='flex flex-col items-center text-center md:items-start md:text-left'>
              <div ref={titleRef}>
                <TextLink
                  color='primary'
                  fontSize='2xl'
                  fontWeight='bold'
                  text={data.title}
                />
              </div>

              <div className='flex flex-col items-center text-sm'>
                <TextLink
                  color='secondary'
                  fontWeight='semibold'
                  fontSize='md'
                  text={data?.subtitle}
                />

                <div className='flex gap-2 items-center'>
                  <TextLink
                    color='secondary'
                    fontSize='xs'
                    text={`${data.listCount} ${
                      Number(data.listCount) > 1 ? 'Songs' : 'Song'
                    }`}
                  />
                  {`•`}
                  <TextLink fontSize='xs' color='secondary' text={data?.year} />
                </div>
              </div>
            </motion.div>
          </div>

          <ActionButtons
            variant='main'
            onPlay={onPlay}
            isPlaying={false}
            onMore={() => {}}
            onShuffle={() => {}}
            onToggleSave={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default AlbumHero;
