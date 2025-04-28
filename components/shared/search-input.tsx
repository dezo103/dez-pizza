'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({className}) => {
  return <div className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}>search input</div>;
};
