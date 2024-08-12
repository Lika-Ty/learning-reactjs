import React from "react";
interface PropsArt {
  title: string;
  children: React.ReactNode;
  sources: string;
}

const PropsArticle: React.FC<PropsArt> = (props) => {
  const { title, children, sources } = props;
  return (
    <>
      <h1> {title} </h1>
      <img
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "50%",
        }}
        src={sources}
        alt=""
      />
      <p>{children}</p>
    </>
  );
};

export default PropsArticle;
