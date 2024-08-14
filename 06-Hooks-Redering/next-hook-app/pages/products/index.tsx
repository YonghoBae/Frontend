import { Category, Product } from '@/interface/product';
import { useEffect, useState } from 'react';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const originCategories: Category[] = [
  {
    category_id: 0,
    category: '전체보기',
    sort: 0,
  },
  {
    category_id: 1,
    category: '삼성전자',
    sort: 1,
  },
  {
    category_id: 2,
    category: 'LG전자',
    sort: 2,
  },
];

const originProducts: Product[] = [
  {
    product_id: 1,
    category_id: 1, // 삼성전자
    product_name: '삼성 노트북 2024 갤럭시북4 NT750XGR-A51A',
    manufacture: '삼성전자',
    price: 939000,
    stock: 20,
    image: 'samsung-notebook.jpg',
  },
  {
    product_id: 2,
    category_id: 2, // LG전자
    product_name: 'LG 노트북 그램',
    manufacture: 'LG전자',
    price: 1539000,
    stock: 15,
    image: 'lg-gram.jpg',
  },
  {
    product_id: 3,
    category_id: 2, // LG전자
    product_name: 'LG 75인치 UHD TV 75UP7750PVA',
    manufacture: 'LG전자',
    price: 2990000,
    stock: 10,
    image: 'lg-tv.jpg',
  },
  {
    product_id: 4,
    category_id: 1, // 삼성전자
    product_name: '삼성 냉장고 2023 XDFDFD071B4',
    manufacture: '삼성전자',
    price: 5090000,
    stock: 8,
    image: 'samsung-refrigerator-2023.jpg',
  },
  {
    product_id: 5,
    category_id: 1, // 삼성전자
    product_name: '삼성 냉장고 2024 RS84T5071B4',
    manufacture: '삼성전자',
    price: 6090000,
    stock: 5,
    image: 'samsung-refrigerator-2024.jpg',
  },
];

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    originCategories[0],
  );
  const [categories, setCategories] = useState<Category[]>(originCategories);
  const [products, setProducts] = useState<Product[]>(originProducts);

  useEffect(() => {
    if (selectedCategory.category_id == 0) {
      setProducts(originProducts);
    } else {
      let filterProduct = originProducts.filter(
        (item) => item.category_id === selectedCategory.category_id,
      );
      setProducts(filterProduct);
    }
  }, [selectedCategory]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Listbox value={selectedCategory} onChange={setSelectedCategory}>
        <div className="relative mt-2">
          <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
            <span className="flex items-center">
              <span className="ml-3 block truncate">
                {selectedCategory.category}
              </span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <ChevronUpDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />
            </span>
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {categories.map((category) => (
              <ListboxOption
                key={category.category_id}
                value={category}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
              >
                <div className="flex items-center">
                  <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                    {category.category}
                  </span>
                </div>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                  <CheckIcon aria-hidden="true" className="h-5 w-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>

      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-900">Product List</h2>
        <table className="min-w-full divide-y divide-gray-300 mt-4">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                제품번호
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                제품명
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                제품사
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                가격
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {products.map((product) => (
              <tr key={product.product_id}>
                <td className="px-3 py-4 text-sm text-gray-900">
                  {product.product_id}
                </td>
                <td className="px-3 py-4 text-sm text-gray-900">
                  {product.product_name}
                </td>
                <td className="px-3 py-4 text-sm text-gray-900">
                  {product.manufacture}
                </td>
                <td className="px-3 py-4 text-sm text-gray-900">
                  ${product.price.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
