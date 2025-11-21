import * as S from './MovieList.style'
import MovieCard from '@/pages/Films/components/MovieCard'
import {movies} from '@/data/movies'

export default function index() {
  return (
    <S.Wrapper>
      {[...movies].reverse().map((movie) => (
        <MovieCard
          key={movie.id}
          imgSrc={movie.imgSrc}
          title={movie.title}
          tag={movie.tag}
          year={movie.year}
        />
      ))}
    </S.Wrapper>
  );
}
