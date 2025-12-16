import Raleway800Title from "@/components/Raleway800Title"
import VideoList from "@/components/VideoList"
import { insideOut1Trailers } from "@/data/Trailer/InsideOut1"


export default function index() {
  return (
    <>
      <Raleway800Title title='TRAILERS' />
      <VideoList trailers={insideOut1Trailers}  />
    </>
  )
}
