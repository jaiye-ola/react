import React, { useState, useEffect } from "react";

function SelectRated(selectrated_prop, editFeedback) {
  const { selected, setSelected } = useState(5);

  useEffect((e) => {
    if (editFeedback.edit) {
      setSelected(+e.target.value);
    }
  }, []);

  const handleSelectRated = (e) => {
    console.log(e.target.value);
    setSelected(+e.currentTarget.value);
    selectrated_prop(+e.currentTarget.value);
  };
  return (
    <div>
      <ul className="flex flex-wrap gap-3 cards">
        <li>
          <label htmlFor="num1">1</label>
          <input
            type="radio"
            name="num1"
            id="1"
            value={1}
            checked={selected === 1}
            onChange={handleSelectRated}
          />
        </li>
        <li>
          <label htmlFor="num2">2</label>
          <input
            type="radio"
            name="num2"
            id="2"
            value={2}
            checked={selected === 2}
            onChange={handleSelectRated}
          />
        </li>
        <li>
          <label htmlFor="num3">3</label>
          <input
            type="radio"
            name="num3"
            id="3"
            value={3}
            checked={selected === 3}
            onChange={handleSelectRated}
          />
        </li>
        <li>
          <label htmlFor="num4">4</label>
          <input
            type="radio"
            name="num4"
            id="4"
            value={4}
            checked={selected === 4}
            onChange={handleSelectRated}
          />
        </li>
        <li>
          <label htmlFor="num5">5</label>
          <input
            type="radio"
            name="num5"
            id="5"
            value={5}
            checked={selected === 5}
            onChange={handleSelectRated}
          />
        </li>
        <li>
          <label htmlFor="num6">6</label>
          <input
            type="radio"
            name="num6"
            id="6"
            value={6}
            checked={selected === 6}
            onChange={handleSelectRated}
          />
        </li>
        <li>
          <label htmlFor="num7">7</label>
          <input
            type="radio"
            name="num7"
            id="7"
            value={7}
            checked={selected === 7}
            onChange={handleSelectRated}
          />
        </li>
        <li>
          <label htmlFor="num8">8</label>
          <input
            type="radio"
            name="num8"
            id="8"
            value={8}
            checked={selected === 8}
            onChange={handleSelectRated}
          />
        </li>
        <li>
          <label htmlFor="num9">9</label>
          <input
            type="radio"
            name="num9"
            id="9"
            value={9}
            checked={selected === 9}
            onChange={handleSelectRated}
          />
        </li>
        <li>
          <label htmlFor="num10">10</label>
          <input
            type="radio"
            name="num10"
            id="10"
            value={10}
            checked={selected === 10}
            onChange={handleSelectRated}
          />
        </li>
      </ul>
    </div>
  );
}

export default SelectRated;
