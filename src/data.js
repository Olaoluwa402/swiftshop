import burger from "./assets/fresh-beef-burger.png";
import SpaghettiBolognese from "./assets/spaghetti-bolognese.png";
import caesarSalad from "./assets/caesar-salad.png";
import margheritapizza from "./assets/margherita-pizza.png";
import vegetablestirfry from "./assets/vegetable-stir-fry.png";
import beefTacos from "./assets/beef-tacos.png";
import chickenAlfredopPasta from "./assets/chicken-alfredo-pasta.png";
import mangoChickenCurry from "./assets/mango-chicken-curry.png";
import vegetarianBurrito from "./assets/vegetarian-burrito.png";
import crispyFriedChicken from "./assets/crispy-fried-chicken.png";
import BBQPulledPorkSandwich from "./assets/BBQ-pulled-pork-sandwich.png";
import sushiPlatter from "./assets/sushi-platter.png";
import capreseSalad from "./assets/caprese-salad.png";

export const mealItems = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    description: "Classic Italian pasta with meat sauce",
    price: 12.99,
    marketPrice: 15.99,
    createdAt: "01-01-2024",
    image: SpaghettiBolognese,
    totalOrders: 100,
  },
  {
    id: 2,
    name: "Chicken Caesar Salad",
    description: "Grilled chicken, romaine lettuce, and Caesar dressing",
    price: 9.99,
    marketPrice: 13.99,
    createdAt: "02-01-2024",
    image: caesarSalad,
    totalOrders: 90,
  },
  {
    id: 3,
    name: "Margherita Pizza",
    description: "Traditional pizza with tomato, mozzarella, and basil",
    price: 11.99,
    marketPrice: 14.99,
    createdAt: "04-01-2024",
    image: margheritapizza,
    totalOrders: 80,
  },
  {
    id: 4,
    name: "Vegetable Stir Fry",
    description: "Assorted vegetables stir-fried in a savory sauce",
    price: 8.99,
    marketPrice: 12.99,
    createdAt: "01-01-2024",
    image: vegetablestirfry,
    totalOrders: 79,
  },
  {
    id: 5,
    name: "BBQ Pulled Pork Sandwich",
    description: "Slow-cooked pulled pork in barbecue sauce",
    price: 10.99,
    image: BBQPulledPorkSandwich,
    totalOrders: 20,
    marketPrice: 14.99,
    createdAt: "09-02-2024",
  },
  {
    id: 6,
    name: "Sushi Platter",
    description: "Assorted sushi rolls and sashimi",
    price: 14.99,
    image: sushiPlatter,
    totalOrders: 10,
    marketPrice: 18.99,
    createdAt: "08-01-2024",
  },
  {
    id: 7,
    name: "Caprese Salad",
    description:
      "Fresh tomatoes, mozzarella, and basil drizzled with balsamic glaze",
    price: 7.99,
    image: capreseSalad,
    totalOrders: 30,
    marketPrice: 11.99,
    createdAt: "03-02-2024",
  },
  {
    id: 8,
    name: "Beef Tacos",
    description: "Seasoned ground beef in taco shells with toppings",
    price: 9.49,
    image: beefTacos,
    totalOrders: 98,
    marketPrice: 12.99,
    createdAt: "09-02-2023",
  },
  {
    id: 9,
    name: "Chicken Alfredo Pasta",
    description: "Creamy Alfredo sauce with grilled chicken and fettuccine",
    price: 13.49,
    image: chickenAlfredopPasta,
    totalOrders: 90,
    marketPrice: 17.99,
    createdAt: "09-02-2023",
  },
  {
    id: 10,
    name: "Mango Chicken Curry",
    description: "Chicken curry with mango and aromatic spices",
    price: 11.99,
    image: mangoChickenCurry,
    totalOrders: 92,
    marketPrice: 12.99,
    createdAt: "09-04-2023",
  },
  {
    id: 11,
    name: "Quinoa Salad",
    description: "Healthy salad with quinoa, vegetables, and vinaigrette",
    price: 8.99,
    image: burger,
    totalOrders: 34,
    marketPrice: 12.99,
    createdAt: "09-08-2023",
  },
  {
    id: 12,
    name: "Shrimp Scampi",
    description: "Garlic-infused shrimp in a white wine sauce over pasta",
    price: 15.99,
    image: burger,
    totalOrders: 40,
    marketPrice: 18.99,
    createdAt: "03-02-2023",
  },
  {
    id: 13,
    name: "Vegetarian Burrito Bowl",
    description: "Mexican-inspired bowl with rice, beans, and veggies",
    price: 10.49,
    image: vegetarianBurrito,
    totalOrders: 78,
    marketPrice: 12.99,
    createdAt: "09-09-2023",
  },
  {
    id: 14,
    name: "Hawaiian Pizza",
    description: "Pizza topped with ham, pineapple, and cheese",
    price: 12.49,
    image: burger,
    totalOrders: 12,
    marketPrice: 16.99,
    createdAt: "09-07-2023",
  },
  {
    id: 15,
    name: "Spinach and Feta Stuffed Chicken",
    description: "Chicken breast stuffed with spinach and feta",
    price: 14.99,
    image: burger,
    totalOrders: 30,
    marketPrice: 18.99,
    createdAt: "09-06-2023",
  },
  {
    id: 16,
    name: "Beef and Broccoli Stir Fry",
    description: "Tender beef and broccoli in a savory soy-based sauce",
    price: 11.49,
    image: burger,
    totalOrders: 45,
    marketPrice: 14.99,
    createdAt: "09-02-2023",
  },
  {
    id: 17,
    name: "Eggplant Parmesan",
    description: "Baked eggplant with marinara sauce and melted cheese",
    price: 9.99,
    image: burger,
    totalOrders: 67,
    marketPrice: 12.99,
    createdAt: "09-02-2023",
  },
  {
    id: 18,
    name: "Tuna Nicoise Salad",
    description: "Salad with tuna, olives, eggs, and potatoes",
    price: 13.99,
    image: burger,
    totalOrders: 20,
  },
  {
    id: 19,
    name: "Crispy Fried Chicken",
    description: "Fried chicken with a crispy coating",
    price: 10.99,
    image: crispyFriedChicken,
    totalOrders: 93,
    marketPrice: 12.99,
    createdAt: "09-04-2023",
  },
  {
    id: 20,
    name: "Pesto Pasta with Cherry Tomatoes",
    description: "Pasta with basil pesto and cherry tomatoes",
    price: 11.99,
    image: burger,
    totalOrders: 30,
    marketPrice: 12.99,
    createdAt: "09-08-2023",
  },
];

// case "DECREMENT_QUANTITY":
//   const decrementItemIndex = state.items.findIndex(
//     (item) => item.id === action.id
//   );

//   const decrementItem = state.items[decrementItemIndex];
//   const updatedDecrementTotalAmount =
//     Number(state.totalAmount) - Number(decrementItem.price);
//   const updatedDecrementTotalItems = Number(state.totalItems) - 1;

//   let updatedDecrementItems;

//   if (decrementItem.amount === 1) {
//     updatedDecrementItems = state.items.filter(
//       (item) => item.id !== action.id
//     );
//   } else {
//     const updatedDecrementItem = {
//       ...decrementItem,
//       amount: decrementItem.amount - 1,
//     };
//     updatedDecrementItems = [...state.items];
//     updatedDecrementItems[decrementItemIndex] = updatedDecrementItem;
//   }

//   return {
//     ...state,
//     items: updatedDecrementItems,
//     totalAmount: updatedDecrementTotalAmount,
//     totalItems: updatedDecrementTotalItems,
//     grandTotal: updatedDecrementTotalAmount + state.shipping,
//   };
