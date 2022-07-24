import React, { ChangeEvent, FormEvent, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const [user, setUser] = useState({});

  const handleIncrease = (): void => {
    const neCounter = counter + 1;
    setCounter(neCounter);
  };

  const handleDecrease = (): void => {
    const newCounter = counter - 1;
    setCounter(newCounter);
  };

  interface Person {
    name: string;
    job: string;
  }

  const handleUserSubmit = (e: FormEvent<HTMLFormElement>):void => {
    e.preventDefault();

    const userData: Person = {
      name: "rased",
      job: "Dev",
    };

    setUser(userData);
  };

  return (
    <div>
      <h2>This is Counter</h2>
      <h2>Count: {counter}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      {/* <button onClick={handleUserSubmit}>User Add</button> */}
    </div>
  );
};

export default Counter;
