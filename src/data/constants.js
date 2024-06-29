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
  {},
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