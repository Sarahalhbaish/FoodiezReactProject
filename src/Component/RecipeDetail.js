import React from "react";
import MargheritaPizza from "../assets/images/MargheritaPizza.jpg";

const RecipeDetail = () => {
  return (
    <div className="bg-[url('./assets//images/pattern.png')]">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-lg px-6 py-8 bg-white rounded-md shadow-lg m-20 text-sm">
          <h1 className="text-3xl font-bold text-[#184548] mb-4 flex justify-center">
            Margherita Pizza
          </h1>
          <img
            src={MargheritaPizza}
            alt="Margherita Pizza"
            className="h-150 w-250  mb-4 size-m"
          />
          <h4 className="text-3xl font-bold text-[#E4655C] mb-4 flex text-justify">
            Ingredients:
          </h4>
          <ol className="max-w-2xl text-[#184548] text-justify px-4 mb-6 list-decimal">
            <li>Pizza dough</li>
            <li>Tomato sauce</li>
            <li>Mozzarella cheese</li>
            <li>Pepperoni</li>
            <li>Bell peppers</li>
            <li>Onions</li>
            <li>Olive oil</li>
            <li>Basil</li>
          </ol>
          <h4 className="text-3xl font-bold text-[#E4655C] mb-4 flex text-justify">
            Instructions:
          </h4>
          <p className="max-w-2xl text-[#184548] text-justify px-4 mb-6">
            Preheat the oven to 475°F (245°C). Roll out the pizza dough on a
            floured surface to your desired thickness. Spread tomato sauce on
            top, then sprinkle with mozzarella cheese and add toppings
            (pepperoni, bell peppers, onions). Drizzle some olive oil over the
            pizza. Bake in the oven for 12-15 minutes until the crust is golden
            and the cheese is bubbly. Remove from the oven, garnish with fresh
            basil, slice, and serve.
          </p>
          <p className="text-[#184548] text-justify px-4">
            Thank you for choosing Tridish - where every dish tells a story!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
