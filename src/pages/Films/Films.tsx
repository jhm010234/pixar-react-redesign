import Header from '@/components/Header/Header'
import PosterImg from '@/assets/image/Poster.png'
import MovieFilter from './components/MovieFilter'
import MovieList from './components/MovieList'
import Footer from '@/components/Footer/Footer'



export default function Films() {
  return (
    <>
     <Header/>
     <img src={PosterImg} />
     <MovieFilter />
     <MovieList />
     <Footer/>
    </>
  )
}
