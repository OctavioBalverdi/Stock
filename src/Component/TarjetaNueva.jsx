import React from 'react';

const ProductCard = () => {
  return (
    <div className="product-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
      <div className="para uppercase text-center leading-none z-40">
        <p className="z-10 font-bold text-lg -mb-5 tracking-wider text-gray-500" style={{ WebkitTextStroke: '1px rgb(207, 205, 205)', WebkitTextFillColor: 'transparent' }}>
          New Product
        </p>
        <p className="font-bold text-xl tracking-wider text-[#495c48] z-30">
          New Product
        </p>
      </div>
      <div className="w-[180px] aspect-square relative z-20 after:absolute after:h-1 after:w-full after:opacity-0 after:bg-[#7b956a] after:top-8 after:left-0 after:group-hover:opacity-100 after:translate-x-1/2 after:translate-y-1/2 after:-z-20 after:group-hover:w-full after:transition-all after:duration-300 after:group-hover:origin-right after:group-hover:-translate-x-1/2 group-hover:translate-x-1/2 transition-all duration-300">
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" textRendering="geometricPrecision" shapeRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
          {/* ... (SVG content) ... */}
        </svg>
        <linearGradient
        y2="0"
        y1="512"
        x2="256"
        x1="256"
        gradientUnits="userSpaceOnUse"
        id="id0"
      >
        <stop stop-color="#495c48" offset="0"></stop>
        <stop stop-color="#9db891" offset=".490196"></stop>
        <stop stop-color="#7b956a" offset="1"></stop>
      </linearGradient>
        <div className="tooltips absolute top-0 left-0 -translate-x-[150%] p-2 flex flex-col items-start gap-10 transition-all duration-300 group-hover:-translate-x-full">
          <p className="text-[#7b956a] font-semibold text-xl uppercase group-hover:delay-1000 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
            Toner
          </p>
          <ul className="flex flex-col items-start gap-2">
            {/* ... (List items) ... */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;