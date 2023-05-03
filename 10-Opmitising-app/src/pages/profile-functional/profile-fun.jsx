import { useEffect, useState } from "react";

export const ProfileFunctional = (props) => {
  const { name, age } = props;

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("use effect ran from functional component");

    // return () => {
    //   console.log("clean up function ran from functional component");
    //   //   clearTimeout(id);
    // };
  }, [count]);

  console.log("render called from functional component");

  return (
    <>
      <h1>Profile - functional component</h1>

      <h1>name: {name}</h1>
      <h2>age : {age}</h2>

      {/* <h1>Count -------{count}</h1> */}
      {/* <button onClick={() => setCount((count) => count + 1)}>
        Update Count
      </button> */}
    </>
  );
};
