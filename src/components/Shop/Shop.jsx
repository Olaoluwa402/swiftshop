import React from "react";
import Title from "../Title/Title";
import { useGeneralContext } from "../../store/GeneralProvider";
import MealItem from "../MealItem/MealItem";

const Shop = () => {
  const { meals } = useGeneralContext();

  // console.log(meals, "meals");

  return (
    <div className="min-h-screen my-10">
      <Title title="Happy Shopping" />

      <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center">
        {meals && meals.length > 0 ? (
          meals.map((item) => {
            console.log(item, "item");
            const percentOff =
              ((item.marketPrice - item.price) / item.marketPrice) * 100;
            const updated = { ...item, percentOff: percentOff.toFixed(0) };
            return <MealItem key={item.id} {...updated} />;
          })
        ) : (
          <div className="flex items-center justify-center my-5">
            <h4 className="text-2xl font-semibold text-gray-600">
              No shop Item
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
