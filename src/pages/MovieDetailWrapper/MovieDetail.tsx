import React from 'react'
import { useParams } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import MovieDetail91 from '../MovieDetail91/MovieDetail91';
import MovieDetail44 from '../MovieDetail44/MovieDetail44';
import MovieDetail95 from '../MovieDetail95/MovieDetail95';

export default function MovieDetailWrapper() {
  const {id} = useParams();

  if( id === '91'){
    return <MovieDetail91 />;
  }else if (id === '44'){
    return <MovieDetail44 />;
  }else if (id === '95'){
    return <MovieDetail95 />;
  }else{
    return <ErrorPage />;
  }

}
