import openBtn from "../../../../assets/icon/Arrows/chevron-down.png"
import closeBtn from "../../../../assets/icon/Arrows/chevron-up.png"
import answerBtn from "../../../../assets/icon/Arrows/answerBtn.png"
import * as S from "../FAQ/FAQ.style"
import {workAtPixarFAQ} from "../../../../data/workAtPixarFAQ"
import { useState } from 'react';


export default function index() {
  const [openId, setOpenId] = useState<number | null>(null);


  const toggle = (id:number) => {
      setOpenId((prev) => (prev === id ? null : id)); 
  }


  return (
    <S.Wrapper>
      <S.TitleWrapper>
        FAQ
      </S.TitleWrapper>
        {
          workAtPixarFAQ.map((q)=>{
            const isOpen = openId === q.id;

            return(
              <div>
                 <S.ItemWrapper key={q.id} $open={isOpen}>
                    <S.QuestionWrapper>
                        <S.Left>
                            <S.QTitle>
                                Q
                            </S.QTitle>
                            <S.Question>
                                {q.question}
                            </S.Question>
                        </S.Left>
                        <img src={isOpen? closeBtn : openBtn} onClick={()=> toggle(q.id)}  />
                    </S.QuestionWrapper>

                    <S.AnswerWrapper $open={isOpen}>
                      <img src={answerBtn} alt="answer" />
                      <S.Answer dangerouslySetInnerHTML={{ __html: q.answer }} />
                    </S.AnswerWrapper>

                </S.ItemWrapper>
              </div>
            )
          })
        }
    </S.Wrapper>
  )
}
