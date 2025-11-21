import Header from '@/components/Header/Header'
import PosterImg from '@/assets/image/Poster.png'
import MovieList from './components/MovieList'



export default function Films() {
  return (
    <>
     <Header/>
     <img src={PosterImg} />
     {/* <MovieFilter /> */}
     <MovieList />
    </>
  )
}
