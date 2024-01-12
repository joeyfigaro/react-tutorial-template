import { type ReactNode, type FC } from 'react';

type ComponentProps = {
  className?: string;
  children?: ReactNode;
};

export const Component: FC<ComponentProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
