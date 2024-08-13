import React from "react";

interface ItemProps {
  name: string;
  isPacked: boolean;
}

const Item: React.FC<ItemProps> = (props) => {
  const { name, isPacked } = props;

  if (isPacked) {
    return (
      <li>
        {" "}
        {name} {isPacked} ✅{" "}
      </li>
    );
  }

  return (
    <li>
      {" "}
      {name} {isPacked}{" "}
    </li>
  );
};

export default Item;
