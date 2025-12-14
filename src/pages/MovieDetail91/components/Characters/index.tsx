import CharactersSlideBar from '@/components/CharactersSlideBar';
import Raleway800Title from '@/components/Raleway800Title'
import { insideOut2Characters } from "@/data/Character/InsideOut2";


export default function index() {
  return (
    <>
      <Raleway800Title title="CHARACTERS" />
      <CharactersSlideBar characters={insideOut2Characters} />
    </>
  )
}
