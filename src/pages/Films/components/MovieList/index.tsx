import * as S from './MovieList.style'
import MovieCard from '@/pages/Films/components/MovieCard'
import {movies} from '@/data/movies'
import { Link} from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import paginationLeftBtn from "@/assets/icon/Arrows/pagination_left.png"
import paginationRightBtn from "@/assets/icon/Arrows/pagination_right.png"
import paginationLeftDisabledBtn from "@/assets/icon/Arrows/pagination_disabled_left.png"
import paginationRightDisabledBtn from "@/assets/icon/Arrows/pagination_disabled_right.png"


const FILTERS = ["전체", "장편", "단편", "시리즈", "스파크쇼츠", "다큐멘터리"] as const;
const ITEMS_PER_PAGE = 16;

export default function index() {
  const [filter, setFilter] = useState("전체");
  const [page, setPage] = useState<number>(1);

  useEffect(()=>{
    setPage(1)
  }, [filter])

    const filteredMovies = useMemo(() => {
    const list = [...movies].reverse();

    if (filter === "전체") return list;

    // movie.tag가 "장편" 같은 문자열이라고 가정
    return list.filter((m) => m.tag === filter);
  }, [filter]);

  const totalPages = Math.ceil(filteredMovies.length/ITEMS_PER_PAGE);


  const pagedMovies = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredMovies.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredMovies, page]);

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <S.Wrapper>
      <S.FilterWrapper>
        {
          FILTERS.map((f)=>{
            return(
              <>
                <S.ListBox $active={filter === f} onClick={()=>setFilter(f)}>{f}</S.ListBox>
              </>
              
            )
          })
        }
      </S.FilterWrapper>
      <S.MovieItemWrapper>
        {pagedMovies.map((movie) => (
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
    </S.MovieItemWrapper>

        <S.Pagination>
          <img src={page===1 ? paginationLeftDisabledBtn : paginationLeftBtn} onClick={page===1?undefined : goPrev} style={{ cursor: page === 1 ? "not-allowed" : "pointer" }} />

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <S.PageNum key={p} $active={p === page} onClick={() => setPage(p)}>
            {p}
          </S.PageNum>
        ))}

          <img src={page === totalPages ? paginationRightDisabledBtn : paginationRightBtn} onClick={page === totalPages ? undefined : goNext} style={{ cursor: page === totalPages || totalPages === 0 ? "not-allowed" : "pointer" }} />

      </S.Pagination>

    </S.Wrapper>
  );
}
