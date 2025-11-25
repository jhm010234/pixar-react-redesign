import * as S from './MovieFilter.style'

export default function index() {
  return (
    <S.Wrapper>
      <S.ListBox>전체</S.ListBox>
      <S.ListBox>장편</S.ListBox>
      <S.ListBox>단편</S.ListBox>
      <S.ListBox>시리즈</S.ListBox>
      <S.ListBox>스파크쇼츠</S.ListBox>
      <S.ListBox>다큐멘터리</S.ListBox>
    </S.Wrapper>
  )
}
