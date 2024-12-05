"use server";

import { promises as fs } from "fs";
import { getCurrentLocale } from "@/locales/server";

import Section from "../components/Section/Section";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";

const Home = async () => {

  const currentLocale = await getCurrentLocale();

  const file = await fs.readFile( `${ process.cwd() }/app/data/${ currentLocale }/data.json`, "utf8" );
  const data = JSON.parse( file );

  const { about, skills } = data;

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
    </>
  );
}

export default Home;