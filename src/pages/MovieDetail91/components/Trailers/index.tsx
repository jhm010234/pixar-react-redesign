import Raleway800Title from "@/components/Raleway800Title"
import VideoList from "@/components/VideoList"
import { insideOut2Trailers } from "@/data/Trailer/InsideOut2"


export default function index() {
  return (
    <>
      <Raleway800Title title='TRAILERS' />
      <VideoList trailers={insideOut2Trailers}  />
    </>
  )
}
