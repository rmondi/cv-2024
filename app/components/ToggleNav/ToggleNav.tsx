import "./ToggleNav.scss";

type ToggleNavType = {
  active: boolean;
};

const ToggleNav = ( { active }: ToggleNavType ) => {
  
  return (
    <div className="Togglenav">
      <div
        className={ `Togglenav__Wrapper${ active ? " Togglenav__Wrapper--active" : "" }` }
      >
        <span></span>
      </div>
    </div>
  )
}

export default ToggleNav;