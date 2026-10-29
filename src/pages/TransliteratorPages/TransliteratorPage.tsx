import { useEffect } from "react";
import { WordsDictionaryProvider } from "../../contexts/WordsDictionaryContext.tsx";
import { useAlphabet } from "../../contexts/AlphabetContext";
import Transliterator from "../../components/Transliterator/Transliterator.tsx";
import HowToUse from "../../components/HowToRead/HowToUse";
import FontsSection from "../../components/HowToRead/FontsSection";
import PageTitle from "../../components/PageTitle/PageTitle.tsx";
import "./TransliteratorPage.css";

const DESERET = "Deseret";

export default function TransliteratorPage() {
  const { currentAlphabet, setCurrentAlphabet } = useAlphabet();

  useEffect(() => {
    if (currentAlphabet !== DESERET) {
      setCurrentAlphabet(DESERET);
    }
  }, [currentAlphabet, setCurrentAlphabet]);

  return (
    <WordsDictionaryProvider>
      <div className="transliteratorPage">
        <PageTitle title="Transliterator" />
        <Transliterator currentAlphabet={DESERET} />
        <HowToUse />
        <FontsSection />
      </div>
    </WordsDictionaryProvider>
  );
}
