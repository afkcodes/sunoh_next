import Link, { LinkProps } from 'next/link';
import React from 'react';

interface SafeLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  onLongPress?: (param?: any) => void;
}

const SafeLink: React.FC<SafeLinkProps> = ({
  children,
  className,
  onLongPress,
  ...props
}) => {
  const preventContextMenu: any = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onLongPress?.();
  };

  return (
    <Link
      {...props}
      className={className}
      onContextMenu={preventContextMenu}
      onTouchStart={(e) => {
        e.target.addEventListener('longpress', preventContextMenu);
      }}
      onTouchEnd={(e) => {
        e.target.removeEventListener('longpress', preventContextMenu);
      }}>
      {children}
    </Link>
  );
};

export default SafeLink;
