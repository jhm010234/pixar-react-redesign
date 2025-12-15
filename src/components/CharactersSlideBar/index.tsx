import { useState } from "react";
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
  const [openedId, setOpenedId] = useState<number|null>(null);

  const handleClick = (id: number) => {
    setOpenedId(prev => (prev === id ? null : id));
  };

  return (
    <>
      <S.SliderWrapper>
        <S.SliderTrack>
          {
            characters.map(ch => {
              const isOpen = openedId === ch.id;

              return(
                <S.CharacterItem key={ch.id} isOpen={isOpen} onClick={()=>handleClick(ch.id)}>
                  <img src={isOpen? ch.openedImage : ch.closedImage}></img>
                  <div className="desc">
                    <S.TextWrapper>
                      <S.NameText>{ch.name}</S.NameText>
                      <S.DescriptionText>{ch.description}</S.DescriptionText>
                    </S.TextWrapper>
                  </div>
                </S.CharacterItem> 
              )

            })
          }
        </S.SliderTrack>

      </S.SliderWrapper>
    </>

  )
}
