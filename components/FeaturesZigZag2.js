import React from 'react'
import CopyCodeButton from './CopyCodeButton'
import CopyCodeButton2 from './CopyCodeButton2'
import Image from 'next/image'
import easyPic from 'public/easy.png'
import powerfulPic from 'public/powerful.png'
import deepopsPic from 'public/deepops.png'
import { useState } from 'react'

function FeaturesZigzag2(props) {
  const [isZoomed, setIsZoomed] = useState(false)
  const containerStyle = {
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    ...(isZoomed && {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '90vw', // Set a maximum width of 90% of the viewport width
      maxHeight: '90vh', // Set a maximum height of 90% of the viewport height
      zIndex: 999,
      backgroundColor: 'rgba(255, 255, 255, 0.001)',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    }),
  }

  const imageStyle = {
    ...(isZoomed && {
      width: 'auto',
      height: 'auto',
    }),
  }

  const closeButtonStyle = {
    position: 'absolute',
    top: '2vmin',
    right: '2vmin',
    cursor: 'pointer',
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#888',
  }

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Items */}
          <div className="grid gap-28">
            {/* 1st item */}
            <div className="items-center md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div
                className="mx-auto mb-8 flex max-w-xl justify-center rounded-xl shadow-md shadow-gray-300 dark:shadow-gray-500 md:order-1 md:col-span-5 md:w-full md:max-w-none lg:col-span-6 lg:mb-0"
                data-aos="fade-up"
                style={containerStyle}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <Image
                  loading="lazy"
                  className="mx-auto h-auto max-w-full rounded-xl dark:brightness-90"
                  src={deepopsPic}
                  width={1917}
                  height={882}
                  alt="Features 03"
                  style={imageStyle}
                />
                {isZoomed && (
                  <span style={closeButtonStyle} onClick={() => setIsZoomed(false)}>
                    &times;
                  </span>
                )}
              </div>
              {/* Content */}
              <div
                className="mx-auto max-w-xl md:col-span-7 md:max-w-none lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="mx-6 flex flex-col items-center justify-center justify-items-center">
                  <h2 className="w-full text-left text-lg font-semibold uppercase tracking-wide text-logomid">
                    Manage with Ease
                  </h2>
                  <p className="mb-0 mt-2 w-full pb-4 text-left text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 xs:mb-4 md:text-4xl">
                    Get a clear picture of your GPU cluster
                  </p>
                  <p className="w-full text-left text-lg text-gray-700 dark:text-gray-400 md:text-xl">
                    Our cluster management dashboard lets leaders understand resource allocation and
                    training efficiency across nodes.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="items-center md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div
                className="rtl mx-auto mb-8 flex max-w-xl justify-center rounded-xl shadow-md shadow-gray-300 dark:shadow-gray-500 md:col-span-5 md:w-full md:max-w-none lg:col-span-6 lg:mb-0"
                data-aos="fade-up"
              >
                <Image
                  loading="lazy"
                  className="mx-auto h-auto max-w-full rounded-xl dark:brightness-90"
                  src={powerfulPic}
                  width={540}
                  height={385}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="mx-auto max-w-xl md:col-span-7 md:max-w-none lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="mx-6 flex flex-col items-center justify-center justify-items-center">
                  <h2 className="w-full text-right text-lg font-semibold uppercase tracking-wide text-logomid">
                    Designed for Speed
                  </h2>
                  <p className="mb-0 mt-2 w-full pb-4 text-right text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 xs:mb-4 md:text-4xl">
                    Identify bottlenecks with powerful, easy-to-use tools
                  </p>
                  <p className="w-full text-right text-lg text-gray-700 dark:text-gray-400 md:text-xl">
                    We've helped customers like you see 10x speedups on billion parameter-scale
                    model trainings. Reach out for a performance tuning consultation!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesZigzag2
