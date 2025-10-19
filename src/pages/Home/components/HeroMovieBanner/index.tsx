import * as S from "./HeroMovieBanner.style"
import HeroImg from "@/assets/image/HeroMovieBannerImage.png"
import { IoPlayOutline } from "react-icons/io5";


export default function index() {
  return (
    <>
    <S.HeroImg src={HeroImg} alt="Hero Movie Banner" />

    </>
  )
}
