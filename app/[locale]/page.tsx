"use server";

import { promises as fs } from "fs";
import { getCurrentLocale } from "@/locales/server";

import Section from "../components/Section/Section";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import Career from "../components/Career/Career";
import Contact from "../components/Contact/Contact";

const Home = async () => {

  const currentLocale = await getCurrentLocale();

  const file = await fs.readFile( `${ process.cwd() }/app/data/${ currentLocale }/data.json`, "utf8" );
  const data = JSON.parse( file );

  const { about, skills, portfolio, career } = data;

  return (
    <>
      <Section id="about">
        <About
          name={ about.name }
          job={ about.job }
          introduction={ about.introduction }
          image={ about.image }
        />
      </Section>
      <Section id="skills">
        <Skills details={ skills.details } description={ skills.description } />
      </Section>
      <Section id="portfolio">
        <Portfolio data={ portfolio } />
      </Section>
      <Section id="career">
        <Career data={ career } />
      </Section>
      <Section id="contact" marBottom={ false }>
        <Contact />
      </Section>
    </>
  );
}

export default Home;