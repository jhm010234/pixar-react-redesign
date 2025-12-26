import Header from '@/components/Header/Header'
import PosterImg from '@/assets/image/Poster.png'
import MovieList from './components/MovieList'
import Footer from '@/components/Footer/Footer'



export default function Films() {
  return (
    <>
     <Header/>
     <img src={PosterImg} />
     <MovieList />
     <Footer/>
    </>
  )
}
