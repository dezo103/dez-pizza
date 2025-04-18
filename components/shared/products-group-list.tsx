'use client'
import React, {useEffect} from 'react';
import { Title } from '@/components/shared/title';
import { ProductCard } from '@/components/shared/product-card';
import { cn } from '@/lib/utils';
import {useIntersection} from "react-use";

type Props = {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
};

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {

  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(categoryId, title)
    }
  }, [intersection?.isIntersecting]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size={'lg'} className={'font-extrabold mb-5'} />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            //  ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
