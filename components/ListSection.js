import Image from 'next/image'

const ListSection = () => (
  <div className="mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
    <div className="mb-8 flex flex-col items-center text-center">
      <h2
        className="text-sm font-semibold uppercase tracking-wide text-logomid xs:text-lg"
        data-aos="fade-up"
        data-aos-delay="30"
      >
        2x Cheaper, More Reliable, Open Source
      </h2>
      <div className="md:w-[780px]">
        <p
          className="mt-2 pb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          MosaicML Alternative
        </p>
      </div>
    </div>
    <div className="-mx-8 flex flex-wrap items-center">
      <div className="w-full px-8 lg:w-[40%]">
        <ul className="space-y-8">
          <li className="-mx-4 flex">
            <div className="px-4">
              <h3 className="my-4 text-4xl font-bold" data-aos="fade-right" data-aos-delay="60">
                Reliability
              </h3>
              <p
                className="mt-2 pb-4 text-[18px] leading-relaxed tracking-tight text-gray-600 dark:text-gray-300"
                data-aos="fade-right"
                data-aos-delay="60"
              >
                Don't worry about high GPU fault rates. Our platform runs health checks
                intermittently and removes bad nodes when a training run crashes.
              </p>
            </div>
          </li>
          <li className="-mx-4 flex">
            <div className="px-4">
              <h3 className="my-4 text-4xl font-bold" data-aos="fade-right" data-aos-delay="90">
                Control
              </h3>
              <p
                className="mt-2 pb-4 text-[18px] leading-relaxed tracking-tight text-gray-600 dark:text-gray-300"
                data-aos="fade-right"
                data-aos-delay="90"
              >
                Engineering leaders can control resource allocation among teams, adjust job
                priority, and understand historical usage.
              </p>
            </div>
          </li>
          <li className="-mx-4 flex">
            <div className="px-4">
              <h3 className="my-4 text-4xl font-bold" data-aos="fade-right" data-aos-delay="120">
                Visibility
              </h3>
              <p
                className="mt-2 pb-4 text-[18px] leading-relaxed tracking-tight text-gray-600 dark:text-gray-300"
                data-aos="fade-right"
                data-aos-delay="120"
              >
                Our dashboard gives engineers and leaders visibility into workload status, cluster
                health, and{' '}
                <a
                  href="https://trainy.ai/blog/instrumentation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  {' '}
                  advanced performance metrics
                </a>
                .
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full px-8 lg:w-[60%]">
        <div
          data-aos="fade-up"
          data-aos-delay="60"
          className="mx-0 mt-16 pb-0 lg:mx-0 lg:mb-0 lg:mt-0 lg:pb-0"
        >
          <Image
            className="mx-auto rounded-xl bg-[#FFEFE6] dark:brightness-90"
            src="/konduktor.png"
            width={1786} // Set the intrinsic width
            height={1322} // Set the intrinsic height
            layout="responsive"
            alt="Trainy Konduktor"
          />
        </div>
      </div>
    </div>
  </div>
)

export default ListSection
