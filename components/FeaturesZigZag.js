import React from 'react'
import CopyCodeButton from './CopyCodeButton'
import CopyCodeButton2 from './CopyCodeButton2'

function FeaturesZigzag(props) {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Items */}
          <div className="grid gap-28">
            {/* 1st item */}
            <div className="items-center lg:grid lg:grid-cols-12 lg:gap-6">
              {/* Image */}
              <div
                className="mx-auto mb-8 flex max-w-xl flex-col items-center justify-center justify-items-center md:order-1 md:col-span-5 md:w-full md:max-w-none lg:col-span-6 lg:mb-0"
                data-aos="fade-up"
              >
                <div className="mx-auto h-auto max-w-full rounded-xl md:max-w-none">
                  <CopyCodeButton />
                </div>
                <div className="mx-auto mt-8 h-auto max-w-full rounded-xl md:max-w-none">
                  <CopyCodeButton2 />
                </div>
              </div>
              {/* Content */}
              <div
                className="mx-auto max-w-md md:col-span-7 md:max-w-none lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="flex flex-col items-center justify-center justify-items-center md:pr-4 lg:pr-12 xl:pr-16">
                  <p className="mb-0 mt-2 pb-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 xs:mb-4 lg:text-7xl">
                    Quick
                  </p>
                  <p className="max-w-sm text-center text-lg text-gray-700 dark:text-gray-400 lg:max-w-2xl lg:text-2xl">
                    Get started with Trainy in minutes. Just install the package with pip and load
                    your logs on tensorboard. Check out our quickstart on{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Trainy-ai"
                      className="underline hover:text-logomid"
                    >
                      GitHub
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="items-center lg:grid lg:grid-cols-12 lg:gap-6">
              {/* Image */}
              <div
                className="rtl mx-auto mb-8 max-w-xl md:col-span-5 md:w-full md:max-w-none lg:col-span-6 lg:mb-0"
                data-aos="fade-up"
              >
                <img
                  loading="lazy"
                  className="mx-auto h-auto max-w-full rounded-xl dark:brightness-90"
                  src="easy.png"
                  width="540"
                  height="405"
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="mx-auto max-w-xl md:col-span-7 md:max-w-none lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="flex flex-col items-center justify-center justify-items-center md:pl-4 lg:pl-12 xl:pl-16">
                  <p className="mb-0 mt-2 pb-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 xs:mb-4 lg:text-7xl">
                    Easy
                  </p>
                  <p className="max-w-sm text-center text-lg text-gray-700 dark:text-gray-400 lg:max-w-2xl lg:text-2xl">
                    Interpretable visualizations help you simply analyze your model’s performance
                    and identify potential speedups.
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="items-center lg:grid lg:grid-cols-12 lg:gap-6">
              {/* Image */}
              <div
                className="mx-auto mb-8 max-w-xl md:order-1 md:col-span-5 md:w-full md:max-w-none lg:col-span-6 lg:mb-0"
                data-aos="fade-up"
              >
                <img
                  loading="lazy"
                  className="mx-auto h-auto max-w-full rounded-xl dark:brightness-90"
                  src="powerful.png"
                  width="540"
                  height="405"
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="mx-auto max-w-xl md:col-span-7 md:max-w-none lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="flex flex-col items-center justify-center justify-items-center md:pr-4 lg:pr-12 xl:pr-16">
                  <p className="mb-0 mt-2 pb-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 xs:mb-4 lg:text-7xl">
                    Powerful
                  </p>
                  <p className="max-w-sm text-center text-lg text-gray-700 dark:text-gray-400 lg:max-w-2xl lg:text-2xl">
                    Access low level NCCL communication and CUDA computation timings across your
                    distributed cluster in a simple, comprehensive interface.
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

export default FeaturesZigzag
