import Header from '@/components/Header/Header'
import HeroMovieBanner from '@/pages/Home/components/HeroMovieBanner/index'
import MasterPiece from '@/pages/Home/components/MasterPiece/index'
import MovieCategory from '@/pages/Home/components/MovieCategory/index'
import Footer from '@/components/Footer/Footer'


export default function Home() {
  return (
    <>
      <Header />
      <HeroMovieBanner />
      <MasterPiece />
      <MovieCategory />
      <Footer />
    </>

  )
}
