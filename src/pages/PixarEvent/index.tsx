import Header from "@/components/Header/Header";
import Top from "./components/Top";
import Science from "./components/Science";
import Footer from "@/components/Footer/Footer";
import Emotions from "./components/Emotions";
import { useEffect, useRef, useState } from "react";

type Section = "emotions" | "science" | null;

export default function Index() {
  const [section, setSection] = useState<Section>(null);

  const emotionsRef = useRef<HTMLDivElement>(null);
  const scienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (section === "emotions") {
      emotionsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (section === "science") {
      scienceRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [section]);

  return (
    <>
      <Header />
      <Top onSelect={setSection} />

      {section === "emotions" && (
        <div ref={emotionsRef}>
          <Emotions />
        </div>
      )}

      {section === "science" && (
        <div ref={scienceRef}>
          <Science />
        </div>
      )}

      <Footer />
    </>
  );
}