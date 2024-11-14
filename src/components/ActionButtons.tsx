import { Heart, MoreVertical, Pause, Play, Shuffle } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

interface ActionButtonsProps {
  onPlay: () => void;
  isPlaying: boolean;
  isSaved?: boolean;
  onToggleSave?: () => void;
  onShuffle?: () => void;
  onMore?: () => void;
  variant?: 'header' | 'main';
  className?: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onPlay,
  isPlaying,
  isSaved = false,
  onToggleSave,
  onShuffle,
  onMore,
  variant = 'main',
  className = '',
}) => {
  // Base button classes for different variants
  const buttonClasses = {
    header: {
      play: 'w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-all duration-200',
      icon: 'w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors',
    },
    main: {
      play: 'w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-all duration-200',
      icon: 'flex items-center justify-center text-white/80 hover:text-white transition-colors',
    },
  };

  const iconSizes = {
    header: 18,
    main: 26,
  };

  const playIconSizes = {
    header: 16,
    main: 28,
  };

  return (
    <div className={`flex justify-between ${className}`}>
      {/* More Options Button */}
      {onMore && (
        <button
          onClick={onMore}
          className={`${buttonClasses[variant].icon} mr-auto`}
          aria-label='More options'>
          <MoreVertical size={iconSizes[variant]} />
        </button>
      )}
      <div className='flex gap-6'>
        {/* Like Button */}
        {onToggleSave && (
          <button
            onClick={onToggleSave}
            className={buttonClasses[variant].icon}
            aria-label={isSaved ? 'Remove from library' : 'Save to library'}>
            <Heart
              size={iconSizes[variant]}
              className={isSaved ? 'fill-red-500 stroke-red-500' : ''}
            />
          </button>
        )}

        {/* Shuffle Button */}
        {onShuffle && (
          <button
            onClick={onShuffle}
            className={buttonClasses[variant].icon}
            aria-label='Shuffle'>
            <Shuffle size={iconSizes[variant]} />
          </button>
        )}

        {/* Play/Pause Button */}
        <Button
          onClick={onPlay}
          size='none'
          className='m-0 rounded-full p-2 h-14 w-14 flex items-center justify-center'
          aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? (
            <Pause size={playIconSizes[variant]} fill='white' />
          ) : (
            <Play size={playIconSizes[variant]} fill='white' />
          )}
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;
