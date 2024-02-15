import React from "react";
import MealItem from "../MealItem/MealItem";
import Title from "../Title/Title";
import { useGeneralContext } from "../../store/GeneralProvider";

const Meals = () => {
  const generalCtx = useGeneralContext();
  const bestSelling = generalCtx.meals.filter((item) => item.totalOrders > 80);
  const latestMeals = generalCtx.meals.filter(
    (item) => new Date(item.createdAt) >= new Date("01-01-2024")
  );
  return (
    <div className="mx-auto max-w-md sm:max-w-lg md:max-w-screen-xl my-10">
      {/* best selling */}
      <Title title="Our Best Selling At SwiftShop" />
      <div className="flex flex-col md:flex-row flex-wrap gap-4">
        {bestSelling.map((item) => {
          const percentOff =
            ((item.marketPrice - item.price) / item.marketPrice) * 100;
          const updated = { ...item, percentOff: percentOff.toFixed(0) };
          return <MealItem key={item.id} {...updated} />;
        })}
      </div>

      {/* latest */}
      <Title title="Our Latest At SwiftShop" />
      <div className="flex flex-col md:flex-row flex-wrap gap-4">
        {latestMeals.map((item) => {
          const percentOff =
            ((item.marketPrice - item.price) / item.marketPrice) * 100;
          const updated = { ...item, percentOff: percentOff.toFixed(0) };
          return <MealItem key={item.id} {...updated} />;
        })}
      </div>
    </div>
  );
};

export default Meals;
