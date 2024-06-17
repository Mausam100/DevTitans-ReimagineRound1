import React from 'react';
import ProductCard from './ProductCard';
import { MdArrowForwardIos } from "react-icons/md";
import { Newlaunches } from '../../data/constants.js';

const ProductList = () => {
  return (
    <div className="w-screen h-auto flex flex-row items-center justify-between div-scrollbar-horizontal whitespace-nowrap">
        <div className='w-[20%] h-auto p-10'>
            <h4 className='text-2xl dg-normal uppercase text-zinc-500 leading-3'>Our</h4>
            <h2 className='text-5xl dg-normal uppercase text-black leading-none tracking-tight'>New<br/>Launches</h2>
        </div>
        <div className="pb-5 w-[60%] h-auto flex flex-row div-scrollbar-horizontal rounded-xl snap-x px-5">
        {Newlaunches.map(product => (
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