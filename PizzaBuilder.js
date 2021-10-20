import React, { useState } from "react";
import classes from "./PizzaBuilder.module.scss";

const PizzaBuilder = (props) => {
  const listOfIngredients = {
    "Tomato base": 1.6,
    "Cream base": 2,
    "Spicy base": 2.1,
    Tomatoes: 1.5,
    Sweetcorn: 1.8,
    Jalapeños: 2.5,
    "Bell peppers": 1.4,
    Cheddar: 2.1,
    Mozzarella: 2.5,
    Eidam: 1.9,
    Chicken: 3.1,
    Beef: 3.8,
    Pork: 3.6,
    Oregano: 0.8,
    Pepper: 0.5,
    "Italian seasoning": 0.9,
  };

  const defaultPrice = 4;

  const [selectedValue, setSelectedValue] = useState(Object.keys(listOfIngredients)[0]);
  const [selectedPrice, setSelectedPrice] = useState(Object.values(listOfIngredients)[0]);
  const [selectedTotalPrice, setSelectedTotalPrice] = useState(defaultPrice);
  const [currentIngredients, setCurrentIngredients] = useState([]);

  const changeSelectValue = (e) => {
    // Changing the select value to the current ingredient name
    setSelectedValue(e.target.value);
    console.log(e.target.value);
    //
    setSelectedPrice(e.target.value);
  };

  const addIngredient = () => {
    // Update the current ingredients
    setCurrentIngredients((prevState) => [...prevState, selectedValue]);
    console.log(selectedValue, selectedPrice);
    // Update the price
    setSelectedTotalPrice((prevState) => prevState + +selectedPrice);
  };

  const removeIngredient = () => {
    // Find the position of the current element that's to be removed
    const foundElement = currentIngredients.find((el) => el === selectedValue);
    const foundElementIndex = currentIngredients.findIndex((el) => el === selectedValue);
    if (foundElement) {
      currentIngredients.splice(foundElementIndex, 1);
      setCurrentIngredients((prevState) => [...prevState]);
      // Update the price
      setSelectedTotalPrice((prevState) => prevState - +selectedPrice);
    }
  };

  return (
    <div className={classes.builder}>
      <h2>Feel free to make your own pizza!</h2>
      <div>
        <h2>Choose from ingredients below</h2>
        <select value={selectedValue} onChange={changeSelectValue}>
          {Object.entries(listOfIngredients).map(([key, value]) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <button onClick={addIngredient}>Add</button>
        <button onClick={removeIngredient}>Delete</button>
      </div>
      <h4>Current ingredients: {currentIngredients.join(", ")}</h4>
      <h4>Total price: ${selectedTotalPrice}</h4>
      <button>Add to basket</button>
    </div>
  );
};

export default PizzaBuilder;
