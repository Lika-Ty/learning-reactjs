import React from "react";

interface props{
    description: string;
}

const TestProps: React.FC<props> = (props) => {
  return (
    <>
      <h1>{props.description}</h1>
    </>
  );
};
export default TestProps;
