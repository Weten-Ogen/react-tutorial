import React from 'react'
import Header from '@/src/components/header/header' 
import Footer from '@/src/components/footer/footer'


const MainLayout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
