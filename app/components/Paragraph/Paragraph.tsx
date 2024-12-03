import "./Paragraph.scss";

type ParagraphType = {
  children: React.ReactNode;
};

const Paragraph = ( { children }: ParagraphType ) => {
  
  return (
    <p className="Paragraph">
      { children }
    </p>
  );
};

export default Paragraph;