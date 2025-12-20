import * as S from './Number.style'

interface NumberProps {
    number: string;
    name: string
}

export default function Number({number,name} :NumberProps) {
  return (
    <S.Wrapper>
        <S.Title>
            <S.Text>{number}</S.Text>
        </S.Title>
        <S.MovieTitle>
            {name}
        </S.MovieTitle>
    </S.Wrapper>
  )
}
