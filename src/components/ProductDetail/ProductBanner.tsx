import React from 'react'

const ProductBanner = () => {
  return (
    <div className="xs-max:hidden">
      <section className="text-gray-600 body-font">
        <div className="container py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="md:p-2 p-1 w-1/3">
              <img
                alt="gallery"
                className="w-full object-cover h-[130px] object-center block rounded-xl drop-shadow-xl"
                src="https://dummyimage.com/380x130"
              />
            </div>
            <div className="md:p-2 p-1 w-1/3">
              <img
                alt="gallery"
                className="w-full object-cover h-[130px] object-center block rounded-xl drop-shadow-xl"
                src="https://dummyimage.com/380x130"
              />
            </div>
            <div className="md:p-2 p-1 w-1/3">
              <img
                alt="gallery"
                className="w-full object-cover h-[130px] object-center block rounded-xl drop-shadow-xl"
                src="https://dummyimage.com/380x130"
              />
            </div>
            <div className="md:p-2 p-2 w-full">
              <img
                alt="gallery"
                className="w-full h-[150px] object-cover object-center block rounded-xl drop-shadow-xl"
                src="https://dummyimage.com/1180x150"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductBanner
