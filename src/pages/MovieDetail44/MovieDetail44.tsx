import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useEffect } from 'react'
import Banner from './components/Banner'
import Introduction from './components/Introduction'
import Trailers from './components/Trailers'
import Characters from './components/Characters'

export default function MovieDetail44() {
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);
    
  return (
    <>
        <Header />
        <Banner />
        <Introduction />
        <Trailers />
        <Characters />
        <Footer />
    </>
  )
}
