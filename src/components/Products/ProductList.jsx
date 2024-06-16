import React from 'react';
import ProductCard from './ProductCard';
import bs1 from '../../assets/images/bestsellers/bestseller1.avif';
import bs2 from '../../assets/images/bestsellers/bestseller2.avif';
import bs3 from '../../assets/images/bestsellers/bestseller3.avif';
import bs4 from '../../assets/images/bestsellers/bestseller4.avif';
import bs5 from '../../assets/images/bestsellers/bestseller5.avif';
import bs6 from '../../assets/images/bestsellers/bestseller6.avif';
import { MdArrowForwardIos } from "react-icons/md";

const products = [
  {
    id: 1,
    name: 'Salicylic Acid + LHA 2% Cleanser',
    description: 'Acne, Breakouts & Oiliness',
    price: '295/-',
    image: bs1
  },
  {
    id: 2,
    name: 'Salicylic Acid + LHA 2% Cleanser',
    description: 'Acne, Breakouts & Oiliness',
    price: '295/-',
    image: bs2
  },
  {
    id: 3,
    name: 'Salicylic Acid + LHA 2% Cleanser',
    description: 'Acne, Breakouts & Oiliness',
    price: '295/-',
    image: bs3
  },
  {
    id: 4,
    name: 'Salicylic Acid + LHA 2% Cleanser',
    description: 'Acne, Breakouts & Oiliness',
    price: '295/-',
    image: bs4
  },
  {
    id: 5,
    name: 'Salicylic Acid + LHA 2% Cleanser',
    description: 'Acne, Breakouts & Oiliness',
    price: '295/-',
    image: bs5
  },
  {
    id: 6,
    name: 'Salicylic Acid + LHA 2% Cleanser',
    description: 'Acne, Breakouts & Oiliness',
    price: '295/-',
    image: bs6
  }
];

const ProductList = () => {
  return (
    <div className="w-screen h-auto flex flex-row items-center justify-between div-scrollbar-horizontal whitespace-nowrap">
        <div className='w-[20%] h-auto p-10'>
            <h4 className='text-2xl dg-normal uppercase text-zinc-500 leading-3'>Our</h4>
            <h2 className='text-5xl dg-normal uppercase text-black leading-none tracking-tight'>Best<br/>selling</h2>
        </div>
        <div className="pb-5 w-[60%] h-auto flex flex-row div-scrollbar-horizontal rounded-xl snap-x px-5">
        {products.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
        </div>
        <div className='w-[20%] h-auto'>
            <button><div className="flex flex-row items-center justify-center gap-5 uppercase text-2xl dg-normal p-20"><span>See all</span><MdArrowForwardIos /></div></button>
        </div>
    </div>
  );
};

export default ProductList;