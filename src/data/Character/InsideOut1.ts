import joyOpenedImg from "@/assets/image/InsideOut1/Characters/joy_opened.png"
import joyClosedImg from "@/assets/image/InsideOut1/Characters/joy_closed.png"
import angerOpenedImg from "@/assets/image/InsideOut1/Characters/anger_opened.png"
import angerClosedImg from "@/assets/image/InsideOut1/Characters/anger_closed.png"
import sadnessOpenedImg from "@/assets/image/InsideOut1/Characters/sadness_opened.png"
import sadnessClosedImg from "@/assets/image/InsideOut1/Characters/sadness_closed.png"
import disgustOpenedImg from "@/assets/image/InsideOut1/Characters/disgust_opened.png"
import disgustClosedImg from "@/assets/image/InsideOut1/Characters/disgust_closed.png"
import fearOpenedImg from "@/assets/image/InsideOut1/Characters/fear_opened.png"
import fearClosedImg from "@/assets/image/InsideOut1/Characters/fear_closed.png"
import bingbongOpenedImg from "@/assets/image/InsideOut1/Characters/bingbong_opened.png"
import bingbongClosedImg from "@/assets/image/InsideOut1/Characters/bingbong_closed.png"
import rileyOpenedImg from "@/assets/image/InsideOut1/Characters/riley_opened.png"
import rileyClosedImg from "@/assets/image/InsideOut1/Characters/riley_closed.png"
import momAndDadOpenedImg from "@/assets/image/InsideOut1/Characters/momanddad_opened.png"
import momAndDadClosedImg from "@/assets/image/InsideOut1/Characters/momanddad_closed.png"


export const insideOut1Characters = [
  {
    id: 1,
    name: "기쁨",
    closedImage: joyClosedImg,
    openedImage: joyOpenedImg,
    description: `조이는 언제나 라일리가 행복하게 지낼 수 있도록 하는 것을 자신의 목표로 삼아왔습니다.
    밝고 낙천적이며, 어떤 상황에서도 재미를 찾아내려는 의지가 강하죠.
    조이는 라일리의 삶에서 마주치는 어려움을 ‘기회’로 보고,
    덜 행복한 순간들도 더 멋진 무언가로 돌아가기 전 잠깐 생기는 작은 흔들림 정도로 여깁니다.
    라일리가 행복하기만 하면, 조이도 행복하니까요.`,

  },
  {
    id: 2,
    name: "슬픔",
    closedImage: sadnessClosedImg,
    openedImage: sadnessOpenedImg,
    description: `다른 감정들은 슬픔이 어떤 역할을 하는지 좀처럼 이해하지 못합니다.
    슬픔도 라일리가 행복하도록 더 낙천적이고 도움이 되는 감정이 되고 싶지만, 긍정적으로 생각하는 게 너무 어렵죠.
    가끔은 그냥 바닥에 드러누워 한바탕 실컷 울어버리는 게 가장 나은 방법처럼 느껴지기도 합니다.`,
  },
  {
    id: 3,
    name: "버럭",
    closedImage: angerClosedImg,
    openedImage: angerOpenedImg,
    description: `
        버럭이는 라일리에게 모든 일이 공평하게 돌아가야 한다는 생각이 정말 강합니다.
        성격도 불같아서 일이 계획대로 풀리지 않으면 말 그대로 폭발해버리곤 하죠.
        과하게 반응하는 편이고, 인생의 사소한 불완전함조차 참아주는 인내심은 거의 없습니다.
    `,
  },
  {
    id: 4,
    name: "까칠",
    closedImage: disgustClosedImg,
    openedImage: disgustOpenedImg,
    description: `까칠이는 자기 주관이 아주 뚜렷하고, 지나치다 싶을 만큼 솔직하며,
    라일리가 ‘독’에 당하지 않도록 막아줍니다. 몸에 해로운 것뿐 아니라 사회적으로도요.
    까칠이는 라일리가 마주치는 사람, 장소, 물건을 하나하나 꼼꼼히 살피는데,
    그게 브로콜리든 작년 유행 패션이든 예외가 없습니다.
    언제나 라일리를 위한 마음에서 움직이고, 자신의 기준을 절대 낮추지 않죠.`,
  },
  {
    id: 5,
    name: "소심",
    closedImage: fearClosedImg,
    openedImage: fearOpenedImg,
    description: `소심이의 가장 중요한 임무는 라일리를 보호하고 안전하게 지키는 것입니다.
    그는 언제나 잠재적인 재난을 경계하며, 라일리의 일상 속 행동 하나하나에 어떤 위험과 함정
     리스크가 숨어 있는지 끊임없이 따져 봅니다.
     소심이가 보기에 위험하지 않거나, 심지어 치명적일 수도 있다고 생각하지 않는 일과 사건은 거의 없습니다.`,
  },
    {
    id: 6,
    name: "빙봉",
    closedImage: bingbongClosedImg,
    openedImage: bingbongOpenedImg,
    description: `코끼리의 코에 고양이의 꼬리, 그리고 솜사탕 같은 몸을 가진 빙봉은 라일리가 만들어낸 상상 속 친구입니다.
    (라일리가 세 살 때는 동물이 그렇게나 유행이었거든요.)
    하지만 라일리가 네 살이 된 뒤로는 불러주는 데가 없어 한동안 ‘실직’ 상태였고,
    라일리가 자라면서 자신이 뒤에 남겨질까 봐 절박해합니다
    `,
  },
      {
    id: 7,
    name: "라일리 앤더슨",
    closedImage: rileyClosedImg,
    openedImage: rileyOpenedImg,
    description: `라일리 앤더슨은 늘 행복한 아이입니다. 적어도 열한 살이 되기 전까지는요.
    그러다 아빠가 미국 반대편으로 새 직장을 옮기게 되면서, 가족은 샌프란시스코로 이사할 수밖에 없게 됩니다.
    낯선 집과 새 학교에 적응하려 애쓰는 동안,
    라일리는 이제껏 느껴보지 못한 감정들이 뒤섞이는 낯선 경험을 하게 되죠.
`,
  },
    {
    id: 8,
    name: "라일리의 부모님",
    closedImage: momAndDadClosedImg,
    openedImage: momAndDadOpenedImg,
    description: `새 직장과 낯선 도시로 이사 오면서,
    라일리의 엄마와 아빠는 한때 늘 밝기만 했던 딸이 시시각각 달라지는 감정들과 씨름하는 모습을 마주하게 됩니다..
    `,
  },
];