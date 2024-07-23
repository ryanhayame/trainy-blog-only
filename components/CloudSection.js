const CloudSection = () => {
  return (
    <div className="w-full bg-slate-50 px-4 dark:bg-darkThemeColor">
      <div className="mb-8 text-center">
        <h2
          className="text-sm font-semibold uppercase tracking-wide text-logomid xs:text-lg"
          data-aos="fade-up"
          data-aos-delay="30"
        >
          Konduktor Platform
        </h2>
        <p
          className="mt-2 pb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          Interested?
        </p>
        <div className="mt-12 flex flex-col items-center justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/get-started"
            aria-label="Get Started"
            data-aos="fade-up"
            data-aos-delay="120"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-black px-5 py-3 text-center text-base font-medium text-white drop-shadow-xl hover:bg-logomid dark:bg-logomid2 dark:hover:bg-logomid"
          >
            Book a Demo
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CloudSection
