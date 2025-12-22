import toystoryImg from "../assets/image/Movie/Feature/201906_토이 스토리 4.webp"
import insideOutImg from "../assets/image/Movie/Feature/202406_인사이드아웃.webp"
import elementalImg from "../assets/image/Movie/Feature/202306_엘리멘탈.webp"
import cocoImg from "../assets/image/Movie/Feature/201801_코코.webp"
import incredibleImg from "../assets/image/Movie/Feature/201807_인크레더블 2.webp"
import upImg from "../assets/image/Movie/Feature/200907_업.webp"
import car3Img from "../assets/image/Movie/Feature/201707_카 3- 새로운 도전.webp"
import doriImg from "../assets/image/Movie/Feature/201607_도리를 찾아서.webp"







interface commingSoonProps {
    id: number
    title: string;
    img: string;
    year: number;
}

export const COMMING_SOON_SLIDES : commingSoonProps [] = [
    {
        id: 1,
        title: "토이 스토리 4",
        year: 2019,
        img: toystoryImg,
    },
    {
        id: 2,
        title: "인사이드 아웃2",
        year: 2024,
        img: insideOutImg,
    },
    {
        id: 3,
        title: "엘리멘탈",
        year: 2023,
        img: elementalImg,
    },
    {
        id: 4,
        title: "코코",
        year: 2018,
        img: cocoImg,
    },
    {
        id: 5,
        title: "인크레더블 2",
        year: 2018,
        img: incredibleImg,
    },
    {
        id: 6,
        title: "업",
        year: 2009,
        img: upImg,
    },
    {
        id: 7,
        title: "카 3- 새로운 도전",
        year: 2017,
        img: car3Img,
    },
    {
        id: 8,
        title: "도리를 찾아서",
        year: 2016,
        img: doriImg,
    },
]