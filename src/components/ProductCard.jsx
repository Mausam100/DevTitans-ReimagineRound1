import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="relative mx-2 flex flex-col bg-[#E5E9EA] shadow-md rounded-lg min-w-[16rem] h-[32rem] snap-center">
      <div className="w-full h-[65%] overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className=" w-full h-full"
        />
      </div>
      <div className="h-[35%] p-4 flex flex-col">
        <h3 className="text-2xl leading-none dg-extrabold inline-block text-wrap tracking-none">
          {product.name}
        </h3>
        <p className="text-xl text-wrap leading-5 dg-medium text-gray-500 mt-2">
          {product.description}
        </p>
        <p className="text-lg dg-medium mt-2">
          {product.price}&nbsp;&nbsp;
          <span className="text-gray-500 line-through dg-normal">
            {product.stprice}
          </span>
        </p>
        <button className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-[70%] bg-black text-white py-2 rounded-lg hover:bg-gray-800 ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
