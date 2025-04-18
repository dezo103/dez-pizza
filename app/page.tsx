import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className={'mt-10'}>
        <Title text={'Все пиццы'} size={'lg'} className={'font-extrabold'}></Title>
      </Container>

      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={'Пиццы'}
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://img.freepik.com/premium-photo/pizza-with-pepperoni-it-white-background_900101-25781.jpg?w=360',
                    price: 45,
                    items: [{ price: 55 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://img.freepik.com/premium-photo/pizza-with-pepperoni-it-white-background_900101-25781.jpg?w=360',
                    price: 45,
                    items: [{ price: 55 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://img.freepik.com/premium-photo/pizza-with-pepperoni-it-white-background_900101-25781.jpg?w=360',
                    price: 45,
                    items: [{ price: 55 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://img.freepik.com/premium-photo/pizza-with-pepperoni-it-white-background_900101-25781.jpg?w=360',
                    price: 45,
                    items: [{ price: 55 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://img.freepik.com/premium-photo/pizza-with-pepperoni-it-white-background_900101-25781.jpg?w=360',
                    price: 45,
                    items: [{ price: 55 }],
                  },
                  {
                    id: 6,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://img.freepik.com/premium-photo/pizza-with-pepperoni-it-white-background_900101-25781.jpg?w=360',
                    price: 45,
                    items: [{ price: 55 }],
                  },
                  {
                    id: 7,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://img.freepik.com/premium-photo/pizza-with-pepperoni-it-white-background_900101-25781.jpg?w=360',
                    price: 45,
                    items: [{ price: 55 }],
                  },
                  {
                    id: 8,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://img.freepik.com/premium-photo/pizza-with-pepperoni-it-white-background_900101-25781.jpg?w=360',
                    price: 45,
                    items: [{ price: 55 }],
                  },
                ]}
              />

              <ProductsGroupList
                title={'Завтраки'}
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: 'Завтрак туриста',
                    imageUrl:
                      'https://bonduelle.ru/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg',
                    price: 45,
                    items: [{ price: 55 }],
                  },
                  {
                    id: 2,
                    name: 'Завтрак туриста',
                    imageUrl:
                      'https://bonduelle.ru/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg',
                    price: 45,
                    items: [{ price: 55 }],
                  },
                  {
                    id: 3,
                    name: 'Завтрак туриста',
                    imageUrl:
                      'https://bonduelle.ru/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg',
                    price: 45,
                    items: [{ price: 55 }],
                  },
                  {
                    id: 4,
                    name: 'Завтрак туриста',
                    imageUrl:
                      'https://bonduelle.ru/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg',
                    price: 45,
                    items: [{ price: 55 }],
                  },
                  {
                    id: 5,
                    name: 'Завтрак туриста',
                    imageUrl:
                      'https://bonduelle.ru/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg',
                    price: 45,
                    items: [{ price: 55 }],
                  },
                  {
                    id: 6,
                    name: 'Завтрак туриста',
                    imageUrl:
                      'https://bonduelle.ru/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg',
                    price: 45,
                    items: [{ price: 55 }],
                  },
                  {
                    id: 7,
                    name: 'Завтрак туриста',
                    imageUrl:
                      'https://bonduelle.ru/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg',
                    price: 45,
                    items: [{ price: 55 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
