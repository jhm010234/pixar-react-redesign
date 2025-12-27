import * as S from "./Science.style"
import DetailBtn from "@/assets/image/PixarEvent/DetailButton.png"
import LineImage from "@/assets/image/PixarEvent/LineImage.png"
import ScienceImg1 from "@/assets/image/PixarEvent/Science/ScienceImage_1.png"
import ScienceImg2 from "@/assets/image/PixarEvent/Science/ScienceImage_2.png"
import Explore1 from "@/assets/image/PixarEvent/Science/Explore1.png"
import Explore2 from "@/assets/image/PixarEvent/Science/Explore2.png"
import Explore3 from "@/assets/image/PixarEvent/Science/Explore3.png"



export default function index() {
  return (
    <S.Wrapper>
        <div></div>
        <S.SecondWrapper>
            <S.LeftWrapper>
                <S.LineImg src={LineImage} />
                <div>과학과 기술로 만나는<br/>픽사의 영화 세계</div>
            </S.LeftWrapper>
            <S.RightWrapper>
                <div>
                    이 전시는 픽사의 모든 영화 속에 활용되는 과학(Science), 기술(Technology), 공학(Engineering),<br/>
                    수학(Mathematics, STEM) 그리고 컴퓨터 과학의 개념을 조명한다.<br/>
                    스크린 기반의 체험형 콘텐츠와 실제 인터랙티브 전시를 통해<br/>
                    관람객은 조명 디자이너, 애니메이터, 모델러 등다양한 역할을 직접 체험할 수 있다.<br/>
                    또한 픽사 직원들이 직접 들려주는 인터뷰 영상을 통해 컴퓨터 애니메이션 산업을 혁신시킨<br/>
                    기술적 발전의 과정을 생생하게 경험할 수 있다.<br/>
                    전시는 인트로 극장, 8개의 섹션(Cluster Area), 그리고 제작 파이프라인 체험 공간으로 구성되어 있다.<br/>
                </div>
                <S.DetailBtn src={DetailBtn} />
            </S.RightWrapper>
        </S.SecondWrapper>
        <S.ThirdWrapper>
            <img src={ScienceImg1} />
            <img src={ScienceImg2} />
        </S.ThirdWrapper>
        <S.FourthWrapper>
            <S.FourthTitle>
                Explore & Learn
            </S.FourthTitle>
            <S.FourthItem>
                <S.ItemBox>
                    <S.ItemImg src={Explore1} />
                    <S.FourthText>
                        <S.ItemTItle>전시 콘텐츠 체험하기</S.ItemTItle>
                        <S.Description>
                            영상과 활동 일부를 <br/>
                            온라인에서 직접 체험해보세요.
                        </S.Description>
                    </S.FourthText>
                </S.ItemBox>
                <S.ItemBox>
                    <S.ItemImg src={Explore2} />
                    <S.FourthText>
                        <S.ItemTItle>연구 자료 보기</S.ItemTItle>
                        <S.Description>
                            관람객들이 전시를 통해 <br/>
                            어떤 배움을 얻는지 알아보세요.
                        </S.Description>
                    </S.FourthText>
                </S.ItemBox>
                <S.ItemBox>
                    <S.ItemImg src={Explore3} />
                    <S.FourthText>
                        <S.ItemTItle>교육 자료 다운로드</S.ItemTItle>
                        <S.Description>
                            수업이나 학습 활동에 활용할 수 있는 <br/>
                            무료 교육 자료를 제공합니다.                     
                        </S.Description>
                    </S.FourthText>
                </S.ItemBox>
            </S.FourthItem>
        </S.FourthWrapper>
    </S.Wrapper>
  )
}
