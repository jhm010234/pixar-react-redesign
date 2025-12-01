import * as S from './MovieList.style'
import MovieCard from '@/pages/Films/components/MovieCard'
import {movies} from '@/data/movies'
import { Link, useParams } from 'react-router-dom';

export default function index() {
  return (
    <S.Wrapper>
      {[...movies].reverse().map((movie) => (
        <Link to={`/films/${movie.id}`}>
          <MovieCard
            key={movie.id}
            imgSrc={movie.imgSrc}
            title={movie.title}
            tag={movie.tag}
            year={movie.year}
          />
        </Link>
      ))}
      

    </S.Wrapper>
  );
}
