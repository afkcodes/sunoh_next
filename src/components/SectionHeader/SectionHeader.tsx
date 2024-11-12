import { SectionHeaderProps } from '~/types/component.types';
import { Button } from '../ui/button';
import TextLink from '../ui/TextLink/TextLink';

const SectionHeader: React.FC<SectionHeaderProps> = ({
  heading = 'Section Header',
  actionText = 'More',
  onclick,
}) => {
  return (
    <div className='px-3 py-3 w-full flex justify-between'>
      <TextLink text={heading} fontSize='lg' fontWeight='semibold' />
      {onclick ? (
        <Button variant='secondary' className='px-2 py-0.5 rounded-full' size='none'>
          <TextLink text={actionText} fontSize='xs' fontWeight='medium' />
        </Button>
      ) : null}
    </div>
  );
};

export default SectionHeader;
