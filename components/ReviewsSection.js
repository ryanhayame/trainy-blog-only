import Image from 'next/image'

const ReviewsSection = () => {
  return (
    <div className="w-full px-4">
      <div className="mb-10 text-center">
        <h2
          className="text-sm font-semibold uppercase tracking-wide text-logomid xs:text-lg"
          data-aos="fade-up"
          data-aos-delay="30"
        >
          Testimonials
        </h2>
        <p
          className="mt-2 pb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          What Our Customers Say
        </p>
      </div>
      <div className="mb-8 flex w-full flex-wrap items-center justify-center gap-12">
        <div
          data-aos="fade-up"
          data-aos-delay="90"
          className="relative flex h-80 w-full min-w-[200px] flex-col rounded-xl bg-[#FFEFE6] p-8 pb-6 pt-10 drop-shadow-[0_3px_3px_rgba(23,23,23,0.2)] dark:bg-[#1f1c1a] sm:h-72 sm:w-5/6 sm:min-w-[450px] lg:w-1/3"
        >
          <p className="absolute left-4 top-4 font-sans text-4xl font-bold">“</p>
          <p className="absolute right-4 top-4 font-sans text-4xl font-bold">”</p>
          <p className="h-full text-center text-[15.5px] font-semibold leading-tight tracking-normal text-gray-600 dark:text-gray-100 xs:text-[17px] sm:text-[18px]">
            The Trainy team knows exactly what needs to work in a GPU cluster to get it ready for AI
            teams. They've been an essential resource in getting Digital Ocean/Paperspace GPUs
            battle-tested for customers and I highly recommend working with them.
          </p>
          <hr className="my-4 h-px border-gray-400" />
          <div className="flex h-fit w-full flex-row gap-4">
            <div className="flex h-14 w-14 flex-col rounded-full">
              <Image
                className="mx-auto rounded-full dark:brightness-90"
                src="/DillonErb.jpg"
                width={111}
                height={111}
                layout="responsive"
                alt="DillonErb"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-ls font-bold tracking-tight text-gray-600 dark:text-gray-100 sm:text-xl">
                Dillon Erb
              </p>
              <p className="text-ls -mt-1 max-w-[150px] font-normal leading-[18px] tracking-tight text-gray-500 dark:text-gray-300 sm:max-w-none sm:leading-7 2xl:text-lg">
                CEO at Paperspace (acq. Digital Ocean)
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="90"
          className="relative flex h-80 w-full min-w-[200px] flex-col rounded-xl bg-[#FFEFE6] p-8 pb-6 pt-10 drop-shadow-[0_3px_3px_rgba(23,23,23,0.2)] dark:bg-[#1f1c1a] sm:h-72 sm:w-5/6 sm:min-w-[450px] lg:w-1/3"
        >
          <p className="absolute left-4 top-4 font-sans text-4xl font-bold">“</p>
          <p className="absolute right-4 top-4 font-sans text-4xl font-bold">”</p>
          <p className="h-full text-center text-[16px] font-semibold leading-tight tracking-normal text-gray-600 dark:text-gray-100 xs:text-[18px] sm:text-[20px]">
            Trainy quickly helped us speed up our model trainings by 4x and scale by over 100x. They
            were an essential resource for troubleshooting our issues with GPU performance and
            distributed training.
          </p>
          <hr className="my-4 h-px border-gray-400" />
          <div className="flex h-fit w-full flex-row gap-4">
            <div className="flex h-14 w-14 flex-col rounded-full">
              <Image
                className="mx-auto rounded-full dark:brightness-90"
                src="/DavianHo.jpg"
                width={111}
                height={111}
                layout="responsive"
                alt="DavianHo"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-ls max-w-[150px] font-bold leading-[18px] tracking-tight text-gray-600 dark:text-gray-100 sm:max-w-none sm:text-xl sm:leading-7">
                Davian Ho
              </p>
              <p className="text-ls -mt-1 font-normal tracking-tight text-gray-500 dark:text-gray-300 2xl:text-lg">
                MLE at Diffuse Bio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsSection
