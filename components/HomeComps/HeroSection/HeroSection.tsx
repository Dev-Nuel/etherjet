import { images } from '@/exports/images';
// import { videos } from '@/exports/videos';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import T from '@/public/assets/icons/TelegramIcon.svg';

const HeroSection = () => {
  return (
    <section className='container homeHero flex flex-col md:flex-row flex-col-reverse justify-between items-center gap-5'>
      <article
        className='w-full md:w-5/12'
        data-aos='fade-left'
        data-aos-duration='1500'
      >
        <h1>Navigating the Future of Web3</h1>
        <p className='my-4'>
          At EtherEdge, we harness the power of decentralization to elevate your
          digital presence in the evolving world of Web3. Our agency brings
          together a dynamic team of experts, each dedicated to propelling your
          project to new heights.
        </p>

        <div className='mt-8 flex'>
          <Link href='contact-us'>
            <button className='main-btn btn' type='button'>
              BOOK  CALL{' '}
            </button>
          </Link>
          <Link href='https://t.me/EtherEdgeMediaServices' className='ml-6'>
            <Image src={T} alt='' className='w-[60px] h-[60px] '  />
          </Link>
        </div>
      </article>
      <figure
        data-aos='zoom-out'
        data-aos-duration='1500'
        className='w-full md:w-6/12 '
      >
        <Image
          src={images.heroImage}
          alt='EtherEdge Hero gif'
          unoptimized={true}
          loading="eager"
          // layout="fixed"
        />

        {/* <div className="video-background">
          <video autoPlay muted loop>
            <source src="/assets/heroImage.mp4" type="video/mp4"></source>
          </video>
          <div className="gradient-mask"></div>
        </div> */}

      </figure>
    </section>
  );
};

export default HeroSection;
