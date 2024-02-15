import React, { useState, useContext, useEffect } from "react";
import GeneralContext from "./general-context";
import { mealItems } from "../data";

const GeneralProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState(null);

  const openModalHandler = () => {
    setOpenModal((prevState) => !prevState);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    setMeals([...mealItems]);
  }, []);

  const getMeal = (id) => {
    const meal = meals.find((meal) => meal.id == id);
    if (meal) {
      setMeal(meal);
    }
  };

  const store = {
    openModal,
    openModalHandler,
    closeModalHandler,
    meals,
    meal,
    getMeal,
  };
  return (
    <GeneralContext.Provider value={store}>{children}</GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  return useContext(GeneralContext);
};

export default GeneralProvider;
