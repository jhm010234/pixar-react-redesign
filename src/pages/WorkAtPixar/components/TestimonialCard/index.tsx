import * as S from '../TestimonialCard/TestimonialCard.style'
import profileImg from '../../../../assets/image/WorkAtPixar/katherine_profileImg.png'

export default function index() {
  return (
    <S.Wrapper>
        <S.ProfileImg src={profileImg} ></S.ProfileImg>
        <S.TextWrapper>
            <S.Name>K A T H E R I N E   S A R A F I A N</S.Name>
            <S.Quote>
                제가 픽사에서 보낸 25년이 넘는 시간을 돌아보면, 여전히 우리의 영화가 가진 영향력에 감탄하게 됩니다.<br />
                가까운 곳이든 아주 먼 곳이든, 어디를 가더라도<br />
                픽사 영화가 어린이부터 어른까지 사람들의 삶에 깊이 닿아 있다는 것을 느낍니다.<br />
                이곳 사무실의 복도를 걸을 때면 또 다른 경외심이 생깁니다.<br />
                <br />
                다양한 분야와 배경을 가진 아티스트와 기술자들이 힘을 합쳐 협력하고, 문제를 해결하며,<br />
                진정으로 특별한 무언가를 만들기 위해 열띤 토론을 벌이고 있습니다.<br />
                함께 의미 있고 재미있는 이야기를 만들어 나가는 이 여정의 일부가 될 수 있다는 사실이 무척 자랑스럽습니다. <br />
                창의적인 동료들과 함께 협력하며, 최고의 애니메이션을 만들어가는 과정은 정말 흥미롭고 보람찹니다.
            </S.Quote>
        </S.TextWrapper>
    </S.Wrapper>
  )
}
