import Raleway800Title from "@/components/Raleway800Title"
import VideoList from "@/components/VideoList"
import { elioTrailers } from "@/data/Trailer/Elio"


export default function index() {
  return (
    <>
      <Raleway800Title title='TRAILERS' />
      <VideoList trailers={elioTrailers}  />
    </>
  )
}
