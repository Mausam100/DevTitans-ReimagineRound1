import bs1 from './../assets/images/bestsellers/bestseller1.avif';
import bs2 from './../assets/images/bestsellers/bestseller2.avif';
import bs3 from './../assets/images/bestsellers/bestseller3.avif';
import bs4 from './../assets/images/bestsellers/bestseller4.avif';
import bs5 from './../assets/images/bestsellers/bestseller5.avif';
import bs6 from './../assets/images/bestsellers/bestseller6.avif';

import nl1 from './../assets/images/new-launches/Frizzimg1.avif';
import nl2 from './../assets/images/new-launches/LightFluid50Main.avif';
import nl3 from './../assets/images/new-launches/EyeCream1.avif';
import nl4 from './../assets/images/new-launches/AntiDandruffMain1.avif';
import nl5 from './../assets/images/new-launches/VitaminB6.avif';
import nl6 from './../assets/images/new-launches/Underarm.avif';

import babycare from '../assets/images/category/baby_care.jpg';
import skincare from '../assets/images/category/skin_care.jpg';
import haircare from '../assets/images/category/hair_care.jpg';
import bodycare from '../assets/images/category/body_care.jpg';
import lipcare from '../assets/images/category/lip_care.jpg';
import eyecare from '../assets/images/category/eye_care.jpg';
import { comment } from 'postcss';

const Bestsellers = [
    {
      id: 1,
      name: 'Salicylic Acid + LHA 2% Cleanser',
      description: 'Acne, Breakouts & Oiliness',
      price: '295/-',
      stprice: '299/-',
      image: bs1
    },
    {
      id: 2,
      name: 'SPF 50 Sunscreen',
      description: 'Sun protection, UV exposure / damage',
      price: '399/-',
      stprice: '',
      image: bs2
    },
    {
      id: 3,
      name: 'Salicylic Acid 2% Face Serum',
      description: 'Acne, Oily Skin, Blackheads & Irritation',
      price: '545/-',
      stprice: '549/-',
      image: bs3
    },
    {
      id: 4,
      name: 'Alpha Arbutin 2% Face Serum',
      description: 'Hyperpigmentation, Tanning & Sunspot',
      price: '539/-',
      stprice: '549/-',
      image: bs4
    },
    {
      id: 5,
      name: 'Vitamin C 10% Face Serum',
      description: 'Dullness, Spots & Loss of Elasticity',
      price: '695/-',
      stprice: '699/-',
      image: bs5
    },
    {
      id: 6,
      name: 'Niacinamide 10% Face Serum',
      description: 'Acne Marks, Acne Prone & Oily Skin',
      price: '599/-',
      stprice: '',
      image: bs6
    }
];

const Newlaunches = [
    {
      id: 1,
      name: 'Frizz Control Complex SPF 30 Hair Serum',
      description: 'reduces frizz, smoothens & protects from UV',
      price: '599/-',
      stprice: '',
      image: nl1
    },
    {
      id: 2,
      name: 'Light Fluid SPF 50 Sunscreen',
      description: 'Broad Spectrum SPF 50, PA++++',
      price: '495/-',
      stprice: '499/-',
      image: nl2
    },
    {
      id: 3,
      name: 'Vitamin K + Retinal 1% Eye Cream',
      description: 'Reduces dark circles, puffiness & fine lines',
      price: '495/-',
      stprice: '499/-',
      image: nl3
    },
    {
      id: 4,
      name: 'CPH Complex + Oligopeptide 0.8% Anti-Dandruff Serum',
      description: 'treats dandruff & itching',
      price: '495/-',
      stprice: '499/-',
      image: nl4,
    },
    {
      id: 5,
      name: 'Vitamin B6 + Carnitine 3% Scalp Serum',
      description: 'Regulates Scalp & Hair Oil',
      price: '495/-',
      stprice: '499/-',
      image: nl5
    },
    {
      id: 6,
      name: 'Nonapeptide + AHA 6% Underarm Roll-On',
      description: 'Controls Odour and Fades Underarm Darkness',
      price: '399/-',
      stprice: '',
      image: nl6
    }
];

const TestimonialData = [
  {
    id: 1,
    emoji: "https://via.placeholder.com/40",
    customer_name: "Shrayasi B.",
    title: "Beneficial Product",
    comment: "Minimalist 10% vitamin c is the only product which shows result on my skin. I am obsessed with the result of this product.",
    date: "06/09/24",
    product_name: "Vitamin K + Retinal 1% Eye Cream",
  },
  {
    id: 2,
    emoji: "https://via.placeholder.com/40",
    customer_name: "Sophie T.",
    title: "Game Changer!",
    comment: "This 10% niacinamide serum has really helped to clear up my blemishes and smooth my skin. I am thrilled with the results.",
    date: "07/03/24",
    product_name: "10% Niacinamide Serum"
  },
  {
    id: 3,
    emoji: "https://via.placeholder.com/40",
    customer_name: "Ravi K.",
    title: "Amazing Results!",
    comment: "This 5% hyaluronic acid serum is phenomenal for my dry skin. I have noticed a significant improvement. Highly recommend for hydration.",
    date: "07/01/24",
    product_name: "5% Hyaluronic Acid Serum"
  },
  {
    id: 4,
    emoji: "https://via.placeholder.com/40",
    customer_name: "Nina L.",
    title: "Love the Glow!",
    comment: "The 2% alpha arbutin has helped brighten my complexion and fade dark spots. Its a staple in my skincare routine now. Very satisfied!",
    date: "07/02/24",
    product_name: "2% Alpha Arbutin"
  },
  {
    id: 6,
    emoji: "https://via.placeholder.com/40",
    customer_name: "Leo R.",
    title: "Fantastic Product!",
    comment: "The 2% salicylic acid cleanser has been great for my acne-prone skin. It has reduced my breakouts and made my skin clearer.",
    date: "07/04/24",
    product_name: "2% Salicylic Acid Cleanser"
  },
  {
    id: 7,
    emoji: "https://via.placeholder.com/40",
    customer_name: "Maya J.",
    title: "Highly Effective!",
    comment: "The 20% Vitamin C serum has made my skin look radiant and even-toned. It is now a key part of my daily skincare routine.",
    date: "07/05/24",
    product_name: "20% Vitamin C Serum"
  },
  {
    id: 8,
    emoji: "https://via.placeholder.com/40",
    customer_name: "Eli F.",
    title: "Great for Dry Skin!",
    comment: "I have been using the 100% squalane oil for a month and it has made my skin feel soft and hydrated. I am very pleased with it.",
    date: "07/06/24",
    product_name: "100% Squalane Oil"
  },
  {
    id: 9,
    emoji: "https://via.placeholder.com/40",
    customer_name: "Anna W.",
    title: "Effective and Affordable",
    comment: "The 1% Retinol cream has been fantastic for improving my skin texture. It has helped reduce fine lines and is worth the price.",
    date: "07/07/24",
    product_name: "1% Retinol Cream"
  },
  {
    id: 10,
    emoji: "https://via.placeholder.com/40",
    customer_name: "Omar G.",
    title: "Brightening Wonder!",
    comment: "The 5% Vitamin C eye cream has brightened my under-eye area and reduced puffiness. It has become a staple in my skincare routine.",
    date: "07/08/24",
    product_name: "5% Vitamin C Eye Cream"
  },
  {
    id: 11,
    emoji: "https://via.placeholder.com/40",
    customer_name: "Jenna M.",
    title: "Really Impressed!",
    comment: "The 10% Lactic Acid exfoliator has made my skin feel so smooth and bright. I would definitely recommend it for regular exfoliation.",
    date: "07/09/24",
    product_name: "10% Lactic Acid Exfoliator"
  },
  {
    id: 12,
    emoji: "https://via.placeholder.com/40",
    customer_name: "Sam D.",
    title: "Fantastic for Oily Skin",
    comment: "This 3% Glycolic Acid toner has helped balance my oily skin and reduce pores. It is an excellent addition to my skincare routine.",
    date: "07/10/24",
    product_name: "3% Glycolic Acid Toner"
  },
  {
    id: 13,
    emoji: "https://via.placeholder.com/40",
    customer_name: "Lena H.",
    title: "Highly Recommended",
    comment: "The 0.5% Retinol serum has made a big difference in my skin's appearance. It helps with aging signs and is very effective.",
    date: "07/11/24",
    product_name: "0.5% Retinol Serum"
  },
  {
    id: 14,
    emoji: "https://via.placeholder.com/40",
    customer_name: "Raj P.",
    title: "Amazing for Sensitive Skin",
    comment: "The 5% Azelaic Acid serum is gentle yet effective for my sensitive skin. It has reduced redness and improved my skin tone.",
    date: "07/12/24",
    product_name: "5% Azelaic Acid Serum"
  },
  {
    id: 15,
    emoji: "https://via.placeholder.com/40",
    customer_name: "Tina S.",
    title: "Love This Product!",
    comment: "The 2% Hyaluronic Acid serum has hydrated my skin wonderfully and made it feel plump and smooth. I am very happy with this purchase.",
    date: "07/13/24",
    product_name: "2% Hyaluronic Acid Serum"
  }  
]


const catagoryData = [
  {
    num : 1,
    title : "Baby Care",
    picsrc : babycare,
  },
  {
    num : 2,
    title : "Skin Care",
    picsrc : skincare,
  },
  {
    num : 3,
    title : "Hair Care",
    picsrc : haircare,
  },
  {
    num : 4,
    title : "Body Care",
    picsrc : bodycare,
  },
  {
    num : 5,
    title : "Lip Care",
    picsrc : lipcare,
  },
  {
    num : 6,
    title : "Eye Care",
    picsrc : eyecare,
  },
]

export { Bestsellers, Newlaunches, TestimonialData, catagoryData };