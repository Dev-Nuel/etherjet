'use client'

import { IReview } from '@/Types/types';
import { images } from '@/exports/images';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ReviewCard from './ReviewCard';

const WhatPeople = () => {
  const router = useRouter();

  const [openedDropdown, setOpenedDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenedDropdown(!openedDropdown);
    router.push("#what-people-are-saying");
  };

  const RevData: IReview[] = [
    {
      id: 1,
      title: 'Stellar Market-Making Strategies',
      quote:
        "“I was blown away by their graphics design – it’s like they read my mind! The KOL management also brought some serious influencers on board. They really know their stuff.” ",
      imageUrl: images.Li,
      name: 'Abel',
      // role: 'Marketing Director at TokenCraft',
      stars: true,
    },
    {
      id: 2,
      title: 'Essential ICO Advisory Services',
      quote:
        "“If you’re launching an ICO, their advisory services are a must. Their insights made everything smoother, and the support was just incredible. Truly a professional team.”",
      imageUrl: images.JohnSmith,
      name: 'Justin Khan',
      // role: 'CEO at CryptoLaunch Advisors',
      stars: true,
    },
    {
      id: 3,
      title: 'Perfect Brand Capture and Social Media Boost',
      quote: "“I can’t say enough good things about their graphics design. They captured our brand perfectly. Plus, the KOL management boosted our social media presence massively.”",
      imageUrl: images.Yuki,
      name: 'Yuki Tanaka',
      // role: 'Brand Manager at Sakura Tech Solutions',
      stars: true,
    },
    {
      id: 4,
      title: 'Amazing Graphics and KOL Management',
      quote: "“Their team is simply amazing. The graphics design was spot on, and their KOL management brought us the right voices. Our project looks and feels fantastic now!”",
      imageUrl: images.Olivia,
      name: 'Olivia Martins',
      // role: 'Product Manager at NovaTech Enterprises',
      stars: true,
    },
    {
      id: 5,
      title: 'Boosting Liquidity and Visibility',
      quote: "“Their team is simply amazing. The graphics design was spot on, and their KOL management brought us the right voices. Our project looks and feels fantastic now!”",
      imageUrl: images.Carlos,
      name: 'Elijah carter',
      // role: 'Head of Trading at LatAm Exchange',
      stars: true,
    },
    {
      id: 6,
      title: 'Strategic and Practical Advisory Services',
      quote: "“Their advisory services are like a breath of fresh air. They offered us strategic advice and practical tips that really made a difference. You can’t go wrong with them.”",
      imageUrl: images.Sergey,
      name: 'Sergey Ivanov',
      // role: 'Strategic Consultant at EastWind Strategies ',
      stars: true,
    },
    {
      id: 7,
      title: 'Stunning Graphics and Effective Market-Making',
      quote: "“From day one, I knew we were in good hands. Their graphics are stunning, and the market-making strategies they provided were spot on. Our project’s visibility skyrocketed!”",
      imageUrl: images.Fatima,
      name: 'Fatima Al-Sayed',
      // role: 'Project Manager at Oasis Ventures ',
      stars: true,
    },
    {
      id: 8,
      title: 'Next-Level KOL Management and Advisory',
      quote: "“What a team! Their KOL management is on another level. They connected us with influencers who genuinely support our cause. Plus, their advisory services were spot on.”",
      imageUrl: images.Lars,
      name: 'Lars Johansson',
      // role: 'Marketing Consultant at Nordic Growth Partners ',
      stars: true,
    },
    {
      id: 9,
      title: 'Outstanding Marketing Strategies and Executionn',
      quote: "“Their marketing strategies are truly exceptional. They helped us reach a broader audience and effectively conveyed our brand message. Their execution was flawless, and the results exceeded our expectations.”",
      imageUrl: images.alice,
      name: 'Sofia Hernandez',
      // role: 'Chief Marketing Officer at Global Impact Ventures ',
      stars: true,
    },
    {
      id: 10,
      title: 'Next-Level KOL Management and Advisory',
      quote: "“Their market-making service was a game-changer. They improved our liquidity and gave us some valuable market insights. Can’t recommend them enough!.”",
      imageUrl: images.Ananya,
      name: 'Ananya Patel',
      // role: 'Financial Analyst at FinEdge Capital',
      stars: true,
    },

  ];

  return (
    <section className={`container ${openedDropdown ? 'typeOfPeople' : 'closedTypeOfPeople'}`}>
      <h2 className='text-center my-5'
      id="what-people-are-saying"
      >What People are Saying</h2>
      <article className='flex flex-wrap justify-between gap-4'>
        {/* Note the role vairable was taken off from the reviews and therefore not available in the map parenthesis */}
        {RevData.map(({ id, stars, title, quote, name, imageUrl }) => (
          <div key={id} className='w-full md:w-[47%]'>
            <ReviewCard
              id={id}
              stars={stars}
              title={title}
              quote={quote}
              name={name}
              // role={role}
              imageUrl={imageUrl}
              openedDropdown={openedDropdown}
            />
          </div>
        ))}
      </article>
      <div className='flex justify-center mt-5'
      onClick={toggleDropdown}
      >
        <svg
          width='244'
          height='63'
          viewBox='0 0 244 63'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='1'
            y='1'
            width='242'
            height='61'
            rx='30.5'
            stroke='url(#paint0_linear_0_2168)'
            strokeWidth='2'
          />
          <path
            d='M36.7813 38.5L32.6213 26.58H34.9893L38.2533 36.452H37.7893L41.0533 26.58H43.4213L39.2773 38.5H36.7813ZM44.5776 38.5V29.796H46.6736V38.5H44.5776ZM44.5776 28.82V26.58H46.6736V28.82H44.5776ZM52.7368 38.692C51.8408 38.692 51.0568 38.4893 50.3848 38.084C49.7128 37.6787 49.1901 37.1293 48.8168 36.436C48.4435 35.7427 48.2568 34.9747 48.2568 34.132C48.2568 33.2573 48.4435 32.484 48.8168 31.812C49.2008 31.1293 49.7181 30.5907 50.3688 30.196C51.0301 29.8013 51.7661 29.604 52.5768 29.604C53.2595 29.604 53.8568 29.716 54.3688 29.94C54.8915 30.164 55.3341 30.4733 55.6968 30.868C56.0595 31.2627 56.3368 31.716 56.5288 32.228C56.7208 32.7293 56.8168 33.2733 56.8168 33.86C56.8168 34.0093 56.8061 34.164 56.7848 34.324C56.7741 34.484 56.7475 34.6227 56.7048 34.74H49.9848V33.14H55.5208L54.5288 33.892C54.6248 33.4013 54.5981 32.964 54.4488 32.58C54.3101 32.196 54.0755 31.892 53.7448 31.668C53.4248 31.444 53.0355 31.332 52.5768 31.332C52.1395 31.332 51.7501 31.444 51.4088 31.668C51.0675 31.8813 50.8061 32.2013 50.6248 32.628C50.4541 33.044 50.3901 33.5507 50.4328 34.148C50.3901 34.6813 50.4595 35.156 50.6408 35.572C50.8328 35.9773 51.1101 36.292 51.4728 36.516C51.8461 36.74 52.2728 36.852 52.7528 36.852C53.2328 36.852 53.6381 36.7507 53.9688 36.548C54.3101 36.3453 54.5768 36.0733 54.7688 35.732L56.4648 36.564C56.2941 36.98 56.0275 37.348 55.6648 37.668C55.3021 37.988 54.8701 38.2387 54.3688 38.42C53.8781 38.6013 53.3341 38.692 52.7368 38.692ZM60.5977 38.5L57.6057 29.796H59.8137L62.0057 36.404L61.2377 36.388L63.5737 29.796H65.4297L67.7497 36.388L66.9817 36.404L69.1737 29.796H71.3817L68.3897 38.5H66.5177L64.1497 31.604H64.8537L62.4537 38.5H60.5977ZM78.0144 38.692C77.4064 38.692 76.8784 38.5907 76.4304 38.388C75.9824 38.1853 75.6358 37.8973 75.3904 37.524C75.1451 37.14 75.0224 36.6973 75.0224 36.196C75.0224 35.716 75.1291 35.2893 75.3424 34.916C75.5558 34.532 75.8864 34.212 76.3344 33.956C76.7824 33.7 77.3478 33.5187 78.0304 33.412L80.8784 32.948V34.548L78.4304 34.964C78.0144 35.0387 77.7051 35.172 77.5024 35.364C77.2998 35.556 77.1984 35.8067 77.1984 36.116C77.1984 36.4147 77.3104 36.6547 77.5344 36.836C77.7691 37.0067 78.0571 37.092 78.3984 37.092C78.8358 37.092 79.2198 37.0013 79.5504 36.82C79.8918 36.628 80.1531 36.3667 80.3344 36.036C80.5264 35.7053 80.6224 35.3427 80.6224 34.948V32.708C80.6224 32.3347 80.4731 32.0253 80.1744 31.78C79.8864 31.524 79.5024 31.396 79.0224 31.396C78.5744 31.396 78.1744 31.5187 77.8224 31.764C77.4811 31.9987 77.2304 32.3133 77.0704 32.708L75.3584 31.876C75.5291 31.4173 75.7958 31.0227 76.1584 30.692C76.5318 30.3507 76.9691 30.084 77.4704 29.892C77.9718 29.7 78.5158 29.604 79.1024 29.604C79.8171 29.604 80.4464 29.7373 80.9904 30.004C81.5344 30.26 81.9558 30.6227 82.2544 31.092C82.5638 31.5507 82.7184 32.0893 82.7184 32.708V38.5H80.7344V37.012L81.1824 36.98C80.9584 37.3533 80.6918 37.668 80.3824 37.924C80.0731 38.1693 79.7211 38.3613 79.3264 38.5C78.9318 38.628 78.4944 38.692 78.0144 38.692ZM84.6557 38.5V26.388H86.7517V38.5H84.6557ZM88.6869 38.5V26.388H90.7829V38.5H88.6869ZM95.7379 38.5V26.58H100.17C100.981 26.58 101.695 26.7293 102.314 27.028C102.943 27.316 103.434 27.7427 103.786 28.308C104.138 28.8627 104.314 29.54 104.314 30.34C104.314 31.1613 104.117 31.86 103.722 32.436C103.338 33.012 102.815 33.4387 102.154 33.716L104.89 38.5H102.426L99.4979 33.268L100.906 34.1H97.9139V38.5H95.7379ZM97.9139 32.18H100.202C100.597 32.18 100.938 32.1053 101.226 31.956C101.514 31.796 101.738 31.5773 101.898 31.3C102.058 31.0227 102.138 30.7027 102.138 30.34C102.138 29.9667 102.058 29.6467 101.898 29.38C101.738 29.1027 101.514 28.8893 101.226 28.74C100.938 28.58 100.597 28.5 100.202 28.5H97.9139V32.18ZM109.784 38.692C108.888 38.692 108.104 38.4893 107.432 38.084C106.76 37.6787 106.237 37.1293 105.864 36.436C105.49 35.7427 105.304 34.9747 105.304 34.132C105.304 33.2573 105.49 32.484 105.864 31.812C106.248 31.1293 106.765 30.5907 107.416 30.196C108.077 29.8013 108.813 29.604 109.624 29.604C110.306 29.604 110.904 29.716 111.416 29.94C111.938 30.164 112.381 30.4733 112.744 30.868C113.106 31.2627 113.384 31.716 113.576 32.228C113.768 32.7293 113.864 33.2733 113.864 33.86C113.864 34.0093 113.853 34.164 113.832 34.324C113.821 34.484 113.794 34.6227 113.752 34.74H107.032V33.14H112.568L111.576 33.892C111.672 33.4013 111.645 32.964 111.496 32.58C111.357 32.196 111.122 31.892 110.792 31.668C110.472 31.444 110.082 31.332 109.624 31.332C109.186 31.332 108.797 31.444 108.456 31.668C108.114 31.8813 107.853 32.2013 107.672 32.628C107.501 33.044 107.437 33.5507 107.48 34.148C107.437 34.6813 107.506 35.156 107.688 35.572C107.88 35.9773 108.157 36.292 108.52 36.516C108.893 36.74 109.32 36.852 109.8 36.852C110.28 36.852 110.685 36.7507 111.016 36.548C111.357 36.3453 111.624 36.0733 111.816 35.732L113.512 36.564C113.341 36.98 113.074 37.348 112.712 37.668C112.349 37.988 111.917 38.2387 111.416 38.42C110.925 38.6013 110.381 38.692 109.784 38.692ZM117.92 38.5L114.496 29.796H116.784L119.264 36.644H118.416L120.912 29.796H123.2L119.776 38.5H117.92ZM124.359 38.5V29.796H126.455V38.5H124.359ZM124.359 28.82V26.58H126.455V28.82H124.359ZM132.518 38.692C131.622 38.692 130.838 38.4893 130.166 38.084C129.494 37.6787 128.971 37.1293 128.598 36.436C128.225 35.7427 128.038 34.9747 128.038 34.132C128.038 33.2573 128.225 32.484 128.598 31.812C128.982 31.1293 129.499 30.5907 130.15 30.196C130.811 29.8013 131.547 29.604 132.358 29.604C133.041 29.604 133.638 29.716 134.15 29.94C134.673 30.164 135.115 30.4733 135.478 30.868C135.841 31.2627 136.118 31.716 136.31 32.228C136.502 32.7293 136.598 33.2733 136.598 33.86C136.598 34.0093 136.587 34.164 136.566 34.324C136.555 34.484 136.529 34.6227 136.486 34.74H129.766V33.14H135.302L134.31 33.892C134.406 33.4013 134.379 32.964 134.23 32.58C134.091 32.196 133.857 31.892 133.526 31.668C133.206 31.444 132.817 31.332 132.358 31.332C131.921 31.332 131.531 31.444 131.19 31.668C130.849 31.8813 130.587 32.2013 130.406 32.628C130.235 33.044 130.171 33.5507 130.214 34.148C130.171 34.6813 130.241 35.156 130.422 35.572C130.614 35.9773 130.891 36.292 131.254 36.516C131.627 36.74 132.054 36.852 132.534 36.852C133.014 36.852 133.419 36.7507 133.75 36.548C134.091 36.3453 134.358 36.0733 134.55 35.732L136.246 36.564C136.075 36.98 135.809 37.348 135.446 37.668C135.083 37.988 134.651 38.2387 134.15 38.42C133.659 38.6013 133.115 38.692 132.518 38.692ZM140.379 38.5L137.387 29.796H139.595L141.787 36.404L141.019 36.388L143.355 29.796H145.211L147.531 36.388L146.763 36.404L148.955 29.796H151.163L148.171 38.5H146.299L143.931 31.604H144.635L142.235 38.5H140.379ZM155.624 38.692C154.696 38.692 153.885 38.4733 153.192 38.036C152.509 37.588 152.04 36.9853 151.784 36.228L153.352 35.476C153.576 35.9667 153.885 36.3507 154.28 36.628C154.685 36.9053 155.133 37.044 155.624 37.044C156.008 37.044 156.312 36.9587 156.536 36.788C156.76 36.6173 156.872 36.3933 156.872 36.116C156.872 35.9453 156.824 35.8067 156.728 35.7C156.643 35.5827 156.52 35.4867 156.36 35.412C156.211 35.3267 156.045 35.2573 155.864 35.204L154.44 34.804C153.704 34.5907 153.144 34.2653 152.76 33.828C152.387 33.3907 152.2 32.8733 152.2 32.276C152.2 31.7427 152.333 31.2787 152.6 30.884C152.877 30.4787 153.256 30.164 153.736 29.94C154.227 29.716 154.787 29.604 155.416 29.604C156.237 29.604 156.963 29.8013 157.592 30.196C158.221 30.5907 158.669 31.1453 158.936 31.86L157.336 32.612C157.187 32.2173 156.936 31.9027 156.584 31.668C156.232 31.4333 155.837 31.316 155.4 31.316C155.048 31.316 154.771 31.396 154.568 31.556C154.365 31.716 154.264 31.924 154.264 32.18C154.264 32.34 154.307 32.4787 154.392 32.596C154.477 32.7133 154.595 32.8093 154.744 32.884C154.904 32.9587 155.085 33.028 155.288 33.092L156.68 33.508C157.395 33.7213 157.944 34.0413 158.328 34.468C158.723 34.8947 158.92 35.4173 158.92 36.036C158.92 36.5587 158.781 37.0227 158.504 37.428C158.227 37.8227 157.843 38.132 157.352 38.356C156.861 38.58 156.285 38.692 155.624 38.692Z'
            fill='url(#paint1_radial_0_2168)'
          />
          <rect
            x='172'
            y='11.5'
            width='40'
            height='40'
            rx='20'
            fill='url(#paint2_radial_0_2168)'
          />
          <path
            d='M187 36.5L197 26.5'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M187 26.5H197V36.5'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <defs>
            <linearGradient
              id='paint0_linear_0_2168'
              x1='0'
              y1='31.5'
              x2='244'
              y2='31.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FF3BFF' />
              <stop offset='0.380208' stopColor='#ECBFBF' />
              <stop offset='0.758263' stopColor='#5C24FF' />
              <stop offset='1' stopColor='#D94FD5' />
            </linearGradient>
            <radialGradient
              id='paint1_radial_0_2168'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(145.383 27.3564) rotate(170.173) scale(94.2221 30.4247)'
            >
              <stop stopColor='#7388FF' />
              <stop offset='0.503425' stopColor='#CA73FF' />
              <stop offset='1' stopColor='#FF739D' />
            </radialGradient>
            <radialGradient
              id='paint2_radial_0_2168'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(207.432 21.141) rotate(125.815) scale(49.5799 45.1714)'
            >
              <stop stopColor='#7388FF' />
              <stop offset='0.503425' stopColor='#CA73FF' />
              <stop offset='1' stopColor='#FF739D' />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default WhatPeople;
