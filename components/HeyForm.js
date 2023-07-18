import React, { useEffect } from 'react'

//className="heyform xs:min-h-full heyform w-11/12 md:w-3/4 sm:max-h-full min-h-[calc(100vh_-_80px)] rounded-xl drop-shadow-md"

const HeyForm = () => {
  return (
    <>
      <iframe
        className="xs:min-h-full heyform-iframe min-h-[calc(80vh)] w-full rounded-xl shadow-lg dark:brightness-75 sm:max-h-full md:w-3/4"
        loading="lazy"
        src="https://my.heyform.net/f/KrOO98HE"
      ></iframe>
    </>
  )
}

export default HeyForm
