'use client';

import React from 'react';
import { Title } from '@/components/shared/title';
import { FilterCheckbox } from '@/components/shared/filter-checkbox';
import { Input } from '@/components/ui';
import { RangeSlider } from '@/components/shared/range-slider';
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group';
import { UseFilterIngredients } from '@/hooks/useFilterIngredients';

type Props = {
  className?: string;
};

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = UseFilterIngredients();

  const items = ingredients.map((item) => ({ text: item.name, value: String(item.id) }));

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}

      <div className={'flex flex-col gap-4'}>
        <FilterCheckbox text={'Можно собирать'} value={'1'} />
        <FilterCheckbox text={'Новинки'} value={'2'} />
      </div>

      {/* Фильтр цен */}

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          // value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
          // onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        // name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        // onClickCheckbox={filters.setSelectedIngredients}
        // selected={filters.selectedIngredients}
      />
    </div>
  );
};
