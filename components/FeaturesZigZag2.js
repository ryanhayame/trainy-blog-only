import React from 'react'
import CopyCodeButton from './CopyCodeButton'
import CopyCodeButton2 from './CopyCodeButton2'
import Image from 'next/image'
import easyPic from 'public/easy.png'
import powerfulPic from 'public/powerful.png'

function FeaturesZigzag2(props) {
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
              >
                <Image
                  loading="lazy"
                  className="mx-auto h-auto max-w-full rounded-xl dark:brightness-90"
                  src={powerfulPic}
                  width={540}
                  height={385}
                  alt="Features 03"
                />
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
                    Drag and drop jobs to submit and schedule
                  </p>
                  <p className="w-full text-left text-lg text-gray-700 dark:text-gray-400 md:text-xl">
                    Use Trainy to schedule training jobs across different cloud providers and
                    clusters.
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
                  src={easyPic}
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
                    Interpretable visualizations help you simply analyze your model’s performance
                    and identify potential speedups.
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
