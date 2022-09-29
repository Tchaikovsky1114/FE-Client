import React, { ReactNode } from 'react'
import Footer from '../../footer/Footer'

interface PageLayoutProps {
  children: React.ReactNode
  layoutWidth: string
  layoutHeight?: string
  innerTop?: string
}

const PageLayout = ({ children, layoutWidth, layoutHeight }: PageLayoutProps) => {
  return (

    <div className={`w-full xs:w-full ${layoutHeight ? layoutHeight : 'h-max'} bg-[#F4F6F8] text-base min-h-screen xs:mt-40`}>
      <div
        className={`mx-auto ${layoutWidth ? layoutWidth : 'w-full'}`}
      >
        {children}
      </div>

      <Footer />
    </div>
  )
}

export default React.memo(PageLayout);
