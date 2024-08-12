import React from "react";

//define type to componesnts
interface myProps {
  source?: string;
}

// decleare type for components
const PropsImg: React.FC<myProps> = (props) => {
  // defualt value for props
  const {
    source = "https://cdn.pixabay.com/photo/2021/06/25/13/22/girl-6363743_1280.jpg",
  } = props;

  return (
    <img
      style={{ width: "200px", height: "200px", objectFit: "cover" }}
      src={source}
      alt="profile."
    />
  );
};

export default PropsImg;
