import "./Section.scss";

type SectionType = {
  id: string;
  marTop?: boolean;
  marBottom?: boolean;
  children: React.ReactNode;
};

const Section = ( { id, marTop = true, marBottom = true, children }: SectionType ) => {
  
  return (
    <section
      id={ id }
      className={ 
        `Section${ !marTop ? "--noMarginTop" : "" }${ !marBottom ? "--noMarginBottom" : "" }`
      }
    >
      <div className="Section__Wrapper">
        { children }
      </div>
    </section>
  )
}

export default Section;