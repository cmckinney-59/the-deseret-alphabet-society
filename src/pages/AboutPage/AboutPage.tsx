import PageTitle from "../../components/PageTitle/PageTitle";
import WhatIsDeseret from "../../components/HowToRead/Deseret/DeseretWhatIs";
import DeseretHowToRead from "../../components/HowToRead/Deseret/DeserethHowToRead";
import deseretBee from "../../assets/images/deseretBee.jpg";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <article className="about-page">
      <PageTitle title="About" />

      <section className="about-intro">
        <div className="about-intro-content">
          <p className="about-intro-text">
            The Deseret Alphabet Society preserves and shares the history,
            letters, and modern use of the Deseret Alphabet—a phonetic writing
            system commissioned in the 1850s for English learners in the Salt
            Lake Valley.
          </p>
          <img
            src={deseretBee}
            alt="Deseret bee emblem"
            className="about-intro-image"
          />
        </div>
      </section>

      <WhatIsDeseret />
      <DeseretHowToRead />
    </article>
  );
}
