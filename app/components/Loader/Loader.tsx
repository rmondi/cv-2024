import "./Loader.scss";

type LoaderType = {
  fullscreen?: boolean;
};

const Loader = ( { fullscreen }: LoaderType ) => {
  
  return (
    <div className={ `Loader${ fullscreen ? " fullscreen" : "" }` }>
      <span className="Loader__Spin"></span>
    </div>
  );
}

export default Loader;