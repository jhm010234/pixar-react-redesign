import * as S from "./CharactersSlideBar.style"

interface Character {
  id: number;
  name: string;
  closedImage: string;
  openedImage: string;
  description: string;
}

interface CharacterSliderProps {
  characters: Character[];
}

export default function index({characters}:CharacterSliderProps) {
  return (
    <>
      <S.SliderWrapper>
        <S.SliderTrack>
          {
            characters.map(ch => {
              return(
                <S.CharacterItem key={ch.id}>
                  <img src={ch.closedImage}></img>
                </S.CharacterItem> 
              )

            })
          }
        </S.SliderTrack>

      </S.SliderWrapper>
    </>

  )
}
