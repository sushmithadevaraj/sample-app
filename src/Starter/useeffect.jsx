import { useState, useEffect } from "react";

const useeffect = () => {
    const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((currentState) => {
        const newState = currentState+1;
        return newState;
    });
  }

  return (
    <div>
      <h4>{value}</h4>
      <button type="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  )
}