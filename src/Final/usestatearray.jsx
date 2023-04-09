
import React from "react";
import { data } from "../../src/data";
import { useState } from "react";

const usestatearray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearAllItems = (id) => {};
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        console.log(person);
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={clearAllItems}>
        {" "}
        Clear All{" "}
      </button>
    </div>
  );
}

export default usestatearray;
