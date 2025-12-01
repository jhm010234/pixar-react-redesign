import React from 'react'
import { useParams } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import MovieDetail91 from '../MovieDetail91/MovieDetail91';

export default function MovieDetailWrapper() {
  const {id} = useParams();

  if( id === '91'){
    return <MovieDetail91 />;
  }else{
    return <ErrorPage />;
  }

}
