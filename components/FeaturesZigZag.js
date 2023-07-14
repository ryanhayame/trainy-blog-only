import React from 'react'
import CopyCodeButton from './CopyCodeButton'
import CopyCodeButton2 from './CopyCodeButton2'

function FeaturesZigzag(props) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Items */}
          <div className="grid gap-28">
            {/* 1st item */}
            <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              {/* Image */}
              <div
                className="flex flex-col items-center justify-center justify-items-center max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 lg:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <div className="max-w-full mx-auto md:max-w-none h-auto rounded-xl">
                  <CopyCodeButton />
                </div>
                <div className="max-w-full mx-auto md:max-w-none h-auto rounded-xl mt-8">
                  <CopyCodeButton2 />
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-md md:max-w-none mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="flex flex-col items-center justify-center justify-items-center md:pr-4 lg:pr-12 xl:pr-16">
                  <p className="mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-0 xs:mb-4">
                    Quick
                  </p>
                  <p className="max-w-sm text-lg text-gray-700 lg:text-2xl lg:max-w-2xl text-center">
                    Get started with Trainy in minutes. Just install the package with pip and load
                    your logs on tensorboard. Check out our quickstart on{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Trainy-ai/nodify"
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
            <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              {/* Image */}
              <div
                className="rtl max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 lg:mb-0"
                data-aos="fade-up"
              >
                <img
                  loading="lazy"
                  className="max-w-full mx-auto h-auto rounded-xl"
                  src="easy.png"
                  width="540"
                  height="405"
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="flex flex-col items-center justify-center justify-items-center md:pl-4 lg:pl-12 xl:pl-16">
                  <p className="mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-0 xs:mb-4">
                    Easy
                  </p>
                  <p className="max-w-sm text-lg text-gray-700 lg:text-2xl lg:max-w-2xl text-center">
                    Interpretable visualizations help you simply analyze your model’s performance
                    and identify potential speedups.
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 lg:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <img
                  loading="lazy"
                  className="max-w-full mx-auto h-auto rounded-xl"
                  src="powerful.png"
                  width="540"
                  height="405"
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="flex flex-col items-center justify-center justify-items-center md:pr-4 lg:pr-12 xl:pr-16">
                  <p className="mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-0 xs:mb-4">
                    Powerful
                  </p>
                  <p className="max-w-sm text-lg text-gray-700 lg:text-2xl lg:max-w-2xl text-center">
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
