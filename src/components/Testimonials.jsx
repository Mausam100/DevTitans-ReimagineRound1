import React from "react";
// import { TestimonialData } from "../data/constants";
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";

import male1 from '../assets/images/pfp/male1.jpg';
import male2 from '../assets/images/pfp/male2.jpg';
import male3 from '../assets/images/pfp/male3.jpg';
import male4 from '../assets/images/pfp/male4.jpg';
import male5 from '../assets/images/pfp/male5.jpg';
import male6 from '../assets/images/pfp/male6.jpg';
import male7 from '../assets/images/pfp/male7.jpg';
import female1 from '../assets/images/pfp/female1.jpg';
import female2 from '../assets/images/pfp/female2.jpg';
import female3 from '../assets/images/pfp/female3.jpg';
import female4 from '../assets/images/pfp/female4.jpg';
import female5 from '../assets/images/pfp/female5.jpg';
import female6 from '../assets/images/pfp/female6.jpg';
import female7 from '../assets/images/pfp/female7.jpg';

const TestimonialData = [
  {
    id: 1,
    emoji: male1,
    customer_name: "Shreyas B.",
    title: "Beneficial Product",
    comment: "Minimalist 10% vitamin c is the only product which shows result on my skin. I am obsessed with the result of this product.",
    date: "06/09/24",
    product_name: "Vitamin K + Retinal 1% Eye Cream",
  },
  {
    id: 2,
    emoji: female1,
    customer_name: "Sophie T.",
    title: "Game Changer!",
    comment: "This 10% niacinamide serum has really helped to clear up my blemishes and smooth my skin. I am thrilled with the results.",
    date: "07/03/24",
    product_name: "10% Niacinamide Serum"
  },
  {
    id: 3,
    emoji: male2,
    customer_name: "Ravi K.",
    title: "Amazing Results!",
    comment: "This 5% hyaluronic acid serum is phenomenal for my dry skin. I have noticed a significant improvement. Highly recommend for hydration.",
    date: "07/01/24",
    product_name: "5% Hyaluronic Acid Serum"
  },
  {
    id: 4,
    emoji: female2,
    customer_name: "Nina L.",
    title: "Love the Glow!",
    comment: "The 2% alpha arbutin has helped brighten my complexion and fade dark spots. Its a staple in my skincare routine now. Very satisfied!",
    date: "07/02/24",
    product_name: "2% Alpha Arbutin"
  },
  {
    id: 5,
    emoji: male3,
    customer_name: "Leo R.",
    title: "Fantastic Product!",
    comment: "The 2% salicylic acid cleanser has been great for my acne-prone skin. It has reduced my breakouts and made my skin clearer.",
    date: "07/04/24",
    product_name: "2% Salicylic Acid Cleanser"
  },
  {
    id: 6,
    emoji: female3,
    customer_name: "Maya J.",
    title: "Highly Effective!",
    comment: "The 20% Vitamin C serum has made my skin look radiant and even-toned. It is now a key part of my daily skincare routine.",
    date: "07/05/24",
    product_name: "20% Vitamin C Serum"
  },
  {
    id: 7,
    emoji: male4,
    customer_name: "Eli F.",
    title: "Great for Dry Skin!",
    comment: "I have been using the 100% squalane oil for a month and it has made my skin feel soft and hydrated. I am very pleased with it.",
    date: "07/06/24",
    product_name: "100% Squalane Oil"
  },
  {
    id: 8,
    emoji: female4,
    customer_name: "Anna W.",
    title: "Effective and Affordable",
    comment: "The 1% Retinol cream has been fantastic for improving my skin texture. It has helped reduce fine lines and is worth the price.",
    date: "07/07/24",
    product_name: "1% Retinol Cream"
  },
  {
    id: 9,
    emoji: male7,
    customer_name: "Omar G.",
    title: "Brightening Wonder!",
    comment: "The 5% Vitamin C eye cream has brightened my under-eye area and reduced puffiness. It has become a staple in my skincare routine.",
    date: "07/08/24",
    product_name: "5% Vitamin C Eye Cream"
  },
  {
    id: 10,
    emoji: female5,
    customer_name: "Aliyah S.",
    title: "Really Impressed!",
    comment: "The 10% Lactic Acid exfoliator has made my skin feel so smooth and bright. I would definitely recommend it for regular exfoliation.",
    date: "07/09/24",
    product_name: "10% Lactic Acid Exfoliator"
  },
  {
    id: 11,
    emoji: male5,
    customer_name: "Sam D.",
    title: "Fantastic for Oily Skin",
    comment: "This 3% Glycolic Acid toner has helped balance my oily skin and reduce pores. It is an excellent addition to my skincare routine.",
    date: "07/10/24",
    product_name: "3% Glycolic Acid Toner"
  },
  {
    id: 12,
    emoji: female6,
    customer_name: "Lena H.",
    title: "Highly Recommended",
    comment: "The 0.5% Retinol serum has made a big difference in my skin's appearance. It helps with aging signs and is very effective.",
    date: "07/11/24",
    product_name: "0.5% Retinol Serum"
  },
  {
    id: 13,
    emoji: male6,
    customer_name: "Raj P.",
    title: "Amazing for Sensitive Skin",
    comment: "The 5% Azelaic Acid serum is gentle yet effective for my sensitive skin. It has reduced redness and improved my skin tone.",
    date: "07/12/24",
    product_name: "5% Azelaic Acid Serum"
  },
  {
    id: 14,
    emoji: female7,
    customer_name: "Tina S.",
    title: "Love This Product!",
    comment: "The 2% Hyaluronic Acid serum has hydrated my skin wonderfully and made it feel plump and smooth. I am very happy with this purchase.",
    date: "07/13/24",
    product_name: "2% Hyaluronic Acid Serum"
  },
  {
    id: 15,
    emoji: male1,
    customer_name: "Shreyas B.",
    title: "Beneficial Product",
    comment: "Minimalist 10% vitamin c is the only product which shows result on my skin. I am obsessed with the result of this product.",
    date: "06/09/24",
    product_name: "Vitamin K + Retinal 1% Eye Cream",
  },
  {
    id: 16,
    emoji: female1,
    customer_name: "Sophie T.",
    title: "Game Changer!",
    comment: "This 10% niacinamide serum has really helped to clear up my blemishes and smooth my skin. I am thrilled with the results.",
    date: "07/03/24",
    product_name: "10% Niacinamide Serum"
  },
  {
    id: 17,
    emoji: male2,
    customer_name: "Ravi K.",
    title: "Amazing Results!",
    comment: "This 5% hyaluronic acid serum is phenomenal for my dry skin. I have noticed a significant improvement. Highly recommend for hydration.",
    date: "07/01/24",
    product_name: "5% Hyaluronic Acid Serum"
  },
  {
    id: 18,
    emoji: female2,
    customer_name: "Nina L.",
    title: "Love the Glow!",
    comment: "The 2% alpha arbutin has helped brighten my complexion and fade dark spots. Its a staple in my skincare routine now. Very satisfied!",
    date: "07/02/24",
    product_name: "2% Alpha Arbutin"
  },
  {
    id: 19,
    emoji: male3,
    customer_name: "Leo R.",
    title: "Fantastic Product!",
    comment: "The 2% salicylic acid cleanser has been great for my acne-prone skin. It has reduced my breakouts and made my skin clearer.",
    date: "07/04/24",
    product_name: "2% Salicylic Acid Cleanser"
  },
  {
    id: 20,
    emoji: female3,
    customer_name: "Maya J.",
    title: "Highly Effective!",
    comment: "The 20% Vitamin C serum has made my skin look radiant and even-toned. It is now a key part of my daily skincare routine.",
    date: "07/05/24",
    product_name: "20% Vitamin C Serum"
  },
  {
    id: 21,
    emoji: male4,
    customer_name: "Eli F.",
    title: "Great for Dry Skin!",
    comment: "I have been using the 100% squalane oil for a month and it has made my skin feel soft and hydrated. I am very pleased with it.",
    date: "07/06/24",
    product_name: "100% Squalane Oil"
  },
  {
    id: 22,
    emoji: female4,
    customer_name: "Anna W.",
    title: "Effective and Affordable",
    comment: "The 1% Retinol cream has been fantastic for improving my skin texture. It has helped reduce fine lines and is worth the price.",
    date: "07/07/24",
    product_name: "1% Retinol Cream"
  },
  {
    id: 23,
    emoji: male7,
    customer_name: "Omar G.",
    title: "Brightening Wonder!",
    comment: "The 5% Vitamin C eye cream has brightened my under-eye area and reduced puffiness. It has become a staple in my skincare routine.",
    date: "07/08/24",
    product_name: "5% Vitamin C Eye Cream"
  },
  {
    id: 24,
    emoji: female5,
    customer_name: "Aliyah S.",
    title: "Really Impressed!",
    comment: "The 10% Lactic Acid exfoliator has made my skin feel so smooth and bright. I would definitely recommend it for regular exfoliation.",
    date: "07/09/24",
    product_name: "10% Lactic Acid Exfoliator"
  },
  {
    id: 25,
    emoji: male5,
    customer_name: "Sam D.",
    title: "Fantastic for Oily Skin",
    comment: "This 3% Glycolic Acid toner has helped balance my oily skin and reduce pores. It is an excellent addition to my skincare routine.",
    date: "07/10/24",
    product_name: "3% Glycolic Acid Toner"
  },
  {
    id: 26,
    emoji: female6,
    customer_name: "Lena H.",
    title: "Highly Recommended",
    comment: "The 0.5% Retinol serum has made a big difference in my skin's appearance. It helps with aging signs and is very effective.",
    date: "07/11/24",
    product_name: "0.5% Retinol Serum"
  },
  {
    id: 27,
    emoji: male6,
    customer_name: "Raj P.",
    title: "Amazing for Sensitive Skin",
    comment: "The 5% Azelaic Acid serum is gentle yet effective for my sensitive skin. It has reduced redness and improved my skin tone.",
    date: "07/12/24",
    product_name: "5% Azelaic Acid Serum"
  },
  {
    id: 28,
    emoji: female7,
    customer_name: "Tina S.",
    title: "Love This Product!",
    comment: "The 2% Hyaluronic Acid serum has hydrated my skin wonderfully and made it feel plump and smooth. I am very happy with this purchase.",
    date: "07/13/24",
    product_name: "2% Hyaluronic Acid Serum"
  }  
]

function Testimonials() {
  return (
    <>
      <div className="p-10 w-screen h-auto flex flex-col lg:flex-row sm:flex-col ld:items-center ld:justify-between div-scrollbar-horizontal whitespace-nowrap ">
        <div className="sm:w-full lg:w-[20%] h-auto ">
          <h4 className="text-5xl dg-light text-black leading-none">
            Our Customer's
          </h4>
          <h2 className="text-5xl text-black dg-light leading-none tracking-tight">
            <span className="dg-normal">Overwhelming</span>
            <br />
            Delight...
          </h2>
        </div>
      </div>

      <motion.div 
     
      className="p-4 pb-20 ld:w-[60%] h-auto flex flex-row gap-10 div-scrollbar-horizontal rounded-xl sm:self-center sm:w-[100%]">
        {TestimonialData.map((data, index) => (
          <motion.TestimonialCard
            key={data.id}
            emoji={data.emoji}
            customer_name={data.customer_name}
            title={data.title}
            comment={data.comment}
            date={data.date}
            product_name={data.product_name}
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          />
          
        ))}
      </motion.div>
    </>
  );
}

export default Testimonials;
