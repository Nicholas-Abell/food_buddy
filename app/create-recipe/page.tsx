"use client";
import React, { useState } from "react";
import axios from "axios";
import { useGetUserId } from "../hooks/useGetUserID";
import { useRouter } from "next/navigation";

type pageProps = {};

const CreateRecipe: React.FC<pageProps> = () => {
  const userId = useGetUserId();
  const router = useRouter();

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [""],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userId,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const addIngredient = (e: any) => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleIngredientChange = (e: any, key: any) => {
    const { value } = e.target;
    const ingredients = recipe.ingredients;
    ingredients[key] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/recipes", recipe);
      console.log("recipe created", recipe);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="flex flex-col justify-end items-center w-[50vw] gap-2">
        <label
          htmlFor="name"
          className="text-gray-100 font-bold text-3xl uppercase"
        >
          Name
        </label>
        <input type="text" id="name" name="name" onChange={handleChange} />

        <label
          htmlFor="ingredients"
          className="text-gray-100 font-bold text-3xl uppercase"
        >
          Ingredients
        </label>
        <div className="border-2 border-green-400 flex flex-wrap gap-2 max-h-[240px] overflow-scroll">
          {recipe.ingredients.map((ingredient, key) => (
            <input
              className="flex-1"
              key={key}
              type="text"
              name="ingredients"
              value={ingredient}
              onChange={(e) => handleIngredientChange(e, key)}
            ></input>
          ))}
        </div>
        <button
          type="button"
          onClick={addIngredient}
          className="bg-red-700 h-[30px] w-[30px] rounded-md text-gray-100 font-bold uppercase hover:bg-red-900"
        >
          +
        </button>

        <label
          htmlFor="instructions"
          className="text-gray-100 font-bold text-3xl uppercase"
        >
          Instructions
        </label>
        <textarea
          className="w-full p-2"
          id="instructions"
          name="instructions"
          onChange={handleChange}
        ></textarea>

        <label
          htmlFor="imageUrl"
          className="text-gray-100 font-bold text-3xl uppercase"
        >
          Image Url
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          onChange={handleChange}
        ></input>

        <label
          htmlFor="cookingTime"
          className="text-gray-100 font-bold text-3xl uppercase"
        >
          {"Cooking Time (minutes)"}
        </label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          onChange={handleChange}
        />
        <button className="bg-red-700 p-4 rounded-md text-gray-100 font-bold uppercase hover:bg-red-900">
          Create Recipe
        </button>
      </form>
    </div>
  );
};
export default CreateRecipe;
