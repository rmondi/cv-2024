"use client";

import "./Tags.scss";

type TagsType = {
  children: React.ReactNode;
};

const Tags = ( { children }: TagsType ) => {
  
  return (
    <div className="Tags">
      <ul className="Tags__List">
        { children }
      </ul>
    </div>
  )
}

export default Tags;