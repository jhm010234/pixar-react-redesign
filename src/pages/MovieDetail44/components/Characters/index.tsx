import CharactersSlideBar from '@/components/CharactersSlideBar';
import Raleway800Title from '@/components/Raleway800Title'
import { insideOut1Characters } from "@/data/Character/InsideOut1";


export default function index() {
  return (
    <>
      <Raleway800Title title="CHARACTERS" />
      <CharactersSlideBar characters={insideOut1Characters} />
    </>
  )
}
