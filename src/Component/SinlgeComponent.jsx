import { useState } from "react";

const SingleData = ({ datas }) => {
  const [isDone, setIsDone] = useState(false);
  const markAsDone = () => {
    setIsDone(true);
  };

  return (
    <>
      <div className="singleItem">{datas}</div>
      {isDone ? (
        <>Done</>
      ) : (
        <>
          <button onClick={markAsDone}>done</button>
        </>
      )}
    </>
  );
};
export default SingleData;
