import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{`Number ${count} is increass.`}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </>
  );
};

export default Count;
