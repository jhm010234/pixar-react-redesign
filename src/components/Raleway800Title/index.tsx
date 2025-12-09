import * as S from "@/components/Raleway800Title/Raleway800Title.style"

interface TitleProps {
    title: string
}

export default function index({title} : TitleProps) {
  return (
    <>
        <S.Title>{title}</S.Title>
    </>
  )
}
