'use client';

import { useEffect, useState } from 'react';
import { Ingredient } from '@prisma/client';
import { Api } from '@/services/api-client';

type ReturnProps = {
  ingredients: Ingredient[];
};

export const UseFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.error(error);
      }
    }
    fetchIngredients();
  }, []);

  return { ingredients };
};
