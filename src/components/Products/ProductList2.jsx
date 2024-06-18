import React from 'react';
import ProductCard from './ProductCard';
import { MdArrowForwardIos } from "react-icons/md";
import { Newlaunches } from '../../data/constants.js';

const ProductList = () => {
  return (
    <div className="w-screen h-auto flex lg:flex-row  sm:flex-col ld:items-center ld:justify-between div-scrollbar-horizontal whitespace-nowrap">
        <div className='sm:w-full lg:w-[20%] h-auto p-10'>
            <h4 className='text-2xl dg-normal uppercase text-zinc-500 leading-3'>Our</h4>
            <h2 className='text-5xl dg-normal uppercase text-black leading-none tracking-tight'>New<br/>Launches</h2>
        </div>
        <div className="pb-5 ld:w-[60%] h-auto flex flex-row div-scrollbar-horizontal rounded-xl snap-x px-5 sm:self-center sm:w-[90%] sm:px-1">
        {Newlaunches.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
        </div>
        <div className='lg:w-[20%] sm:w-full h-auto'>
            <button><div className="flex flex-row items-center justify-center gap-5 uppercase text-2xl dg-normal sm:p-10 lg:p-20"><span>See all</span><MdArrowForwardIos /></div></button>
        </div>
    </div>
  );
};

export default ProductList;