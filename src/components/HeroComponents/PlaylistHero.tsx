import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, MoreVertical, Music2 } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import ActionButtons from '../ActionButtons';
import Figure from '../ui/Figure/Figure';
import TextLink from '../ui/TextLink/TextLink';

interface HeroData {
  type: string;
  title: string;
  subtitle?: string;
  description?: string;
  images: string;
  listCount: string;
}

interface HeroProps {
  data: HeroData;
  onPlay: () => void;
  onShuffle?: () => void;
  isPlaying?: boolean;
  isSaved?: boolean;
  onToggleSave?: () => void;
  onShare?: () => void;
}

const PlaylistHero: React.FC<HeroProps> = ({
  data,
  onPlay,
  onShuffle,
  isPlaying = false,
  isSaved = false,
  onToggleSave,
  onShare,
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

  const imageScale = useTransform(scrollY, [0, 300], [1, 1.3]);

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
              onClick={() => {}}
              className='justify-self-start shrink-0 flex flex-1'
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
              onClick={() => {}}
              className='justify-self-end shrink-0'
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

      <div className='relative h-[55vh] overflow-hidden'>
        <motion.div className='absolute inset-0' style={{ scale: imageScale }}>
          <div className='h-[55vh]'>
            <Figure
              source={data?.images as string}
              alt={data?.title}
              fit='cover'
              size='free'
              radius='md'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent' />
          <div className='absolute inset-0 bg-gradient-to-r from-background/30' />
        </motion.div>
        {/* Content */}
        <div className='relative flex flex-col justify-end h-full px-4 pb-4'>
          <div className=''>
            <div className='space-y-1' ref={titleRef}>
              <TextLink
                text={data.title}
                fontSize='3xl'
                color='primary'
                fontWeight='bold'
              />
              {data.subtitle && (
                <TextLink
                  text={data.subtitle}
                  fontSize='lg'
                  color='secondary'
                  fontWeight='medium'
                />
              )}
              {data.listCount && (
                <span className='flex items-center gap-2 mt-2'>
                  <Music2 size={12} className='text-muted-foreground' />
                  <TextLink
                    color='secondary'
                    fontSize='xs'
                    text={`${data.listCount} ${
                      Number(data.listCount) > 1 ? 'Songs' : 'Song'
                    }`}
                  />
                </span>
              )}
            </div>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <ActionButtons
              className='w-full'
              onPlay={() => {}}
              isPlaying={false}
              isSaved={false}
              onMore={() => {}}
              onShuffle={() => {}}
              onToggleSave={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistHero;
