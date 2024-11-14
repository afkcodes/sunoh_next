'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '~/constants/component.constants';
import TextLink from '../ui/TextLink/TextLink';

const BottomNavigationBar = () => {
  const pathname = usePathname();
  return (
    <footer className='fixed bottom-0 left-0 right-0  w-full bg-[#131212] min-h-14 flex  justify-between'>
      {navItems.map((navItem) => (
        <Link
          key={navItem.id}
          href={navItem.path}
          className='w-full rounded-none flex flex-col gap-1 items-center justify-center'>
          <navItem.icon
            size={24}
            className={`${
              pathname === navItem.path ? 'text-primary' : 'text-foreground'
            }`}
          />
          <TextLink
            text={navItem.title}
            fontSize='xs'
            fontWeight={pathname === navItem.path ? 'bold' : 'normal'}
            color={pathname === navItem.path ? 'accent' : 'primary'}
          />
        </Link>
      ))}
    </footer>
  );
};

export default BottomNavigationBar;
