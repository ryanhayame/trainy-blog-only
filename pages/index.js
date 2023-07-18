import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import NewsletterForm from '@/components/NewsletterForm'

import React, { useEffect, useState, useRef } from 'react'

import Script from 'next/script'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { animateScroll as scroll, scroller } from 'react-scroll'

import Nav from '@/components/Nav'
import HeaderSection from '@/components/HeaderSection'
import DemoSection from '@/components/DemoSection'
import FeaturesZigzag from '@/components/FeaturesZigZag'
import ListSection from '../components/ListSection'
import FeaturesSection from '../components/FeaturesSection'
import HeyForm from '../components/HeyForm'
import FAQSection from '@/components/FAQSection'

import Button from '@mui/material/Button'
import { BsGithub, BsLinkedin, BsDiscord, BsTwitter } from 'react-icons/bs'
import Footer from '@/components/Footer'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  //const [features, setFeatures] = useState(false);

  // handles scroll to contact section
  const handleClick = () => {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -35,
    })
  }

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 400,
      easing: 'ease-out-sine',
      disable: 'phone',
    })
  })

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <HeaderSection handleClick={handleClick} />

      <div
        name="scroll-to-element1"
        className="h-fit w-full justify-center bg-slate-50 py-32 shadow-inner dark:bg-darkThemeColor"
      >
        <DemoSection />
      </div>

      {/*<div name="scroll-to-element1" className='justify-center shadow-innerDark bg-white w-full py-20 h-auto'>
        <ListSection />
      </div>*/}

      <div
        name="scroll-to-element1"
        className="h-auto w-full justify-center bg-white py-20 shadow-innerDark dark:bg-gray-900"
      >
        <FeaturesZigzag handleClick={handleClick} />
      </div>

      {/*<div name="scroll-to-element1" className='justify-center shadow-innerDark bg-white w-full pt-12 h-auto'>
        <FeaturesSection />
      </div>*/}

      <div
        name="scroll-to-element"
        className="flex h-fit w-full items-center justify-center bg-slate-50 py-24 shadow-inner dark:bg-darkThemeColor xs:h-screen"
      >
        <HeyForm />
      </div>

      {/*<div name="scroll-to-element1" className='justify-center shadow-innerDark bg-white w-full h-auto'>
        <FAQSection />
      </div>*/}
    </>
  )
}
