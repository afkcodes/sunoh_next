import { motion } from 'framer-motion';
import { MoreVertical } from 'lucide-react';
import { AudioItemProps } from '~/types/component.types';
import { timeToReadable } from '~/utils/common';
import Figure from '../ui/Figure/Figure';
import TextLink from '../ui/TextLink/TextLink';
import { Button } from '../ui/button';

const AudioItem: React.FC<AudioItemProps> = ({
  id,
  title,
  subtitle,
  image,
  duration,
  audioData,
  currentProgress = 0,
  type = 'indexed',
  index,
  onClick,
  onOptionsClick,
  currentTrackId,
}) => {
  // Calculate progress percentage
  const progressPercentage =
    id === currentTrackId && duration > 0 ? (currentProgress / duration) * 100 : 0;

  return (
    <div
      role='button'
      className='relative flex w-full py-2 m-0 overflow-hidden  rounded-sm bg-surface/50 items-between hover:bg-surface/60 transition-all duration-200'
      onClick={() => onClick(audioData)}>
      {/* Progress overlay */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-r from-card/35 to-white/25'
        initial={{ right: '100%' }}
        animate={{
          right: `${100 - progressPercentage}%`,
        }}
        transition={{ duration: 0.1 }}
      />

      <div className='relative w-full'>
        <div className='flex items-center h-full py-1 space-x-3'>
          {type === 'indexed' && index ? (
            <div className='flex items-center justify-center h-full w-9 shrink-0 '>
              <TextLink
                fontSize='base'
                fontWeight='normal'
                color='primary'
                text={String(index)}
              />
            </div>
          ) : (
            <div className='ml-2 shrink-0'>
              <Figure source={image} alt={title} fit='cover' size='xs' radius='md' />
            </div>
          )}

          <div className='w-2/3'>
            <TextLink fontSize='sm' fontWeight='semibold' color='primary' text={title} />
            <TextLink
              fontSize='xs'
              fontWeight='normal'
              color='secondary'
              text={subtitle || ''}
            />
          </div>

          <div className='flex items-center justify-end h-full pr-2 space-x-4 ml-auto'>
            {duration > 0 && (
              <TextLink fontSize='sm' color='secondary' text={timeToReadable(duration)} />
            )}
            <Button
              className='text-gray-400 transition-colors active:text-white active:scale-90 p-1 hover:text-gray-200'
              variant='unstyled'
              onClick={(e) => {
                e.stopPropagation();
                onOptionsClick(1);
              }}>
              <MoreVertical size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioItem;
