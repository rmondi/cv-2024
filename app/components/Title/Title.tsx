import "./Title.scss";

type TitleType = {
  level: number;
  children: React.ReactNode;
};

const Title = ( { level, children }: TitleType ) => {

  let title;
  
  switch(level) {
    case 1:
      title = <h1 className="Title">{ children }</h1>
    break
    case 2:
    default:
      title = <h2 className="Title">{ children }</h2>
    break
  }

  return title;
};

export default Title;