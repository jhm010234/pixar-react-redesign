import Header from "@/components/Header/Header"
import Banner from "./components/Banner"
import Introduction from "./components/Introduction"
import Trailers from "./components/Trailers"
import Characters from "./components/Characters"
import Footer from "@/components/Footer/Footer"
import World from "./components/World"
import { useEffect } from "react"


export default function MovieDetail91() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
    <Header />
    <Banner />
    <Introduction />
    <Trailers />
    <Characters />
    <World />
    <Footer />
    </>

  )
}
