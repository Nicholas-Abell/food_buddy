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
      <form className="flex flex-col justify-end items-center gap-4 border-green-400 border-2 w-[50vw]">
        <div className="flex gap-4 justify-center items-center">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleChange} />
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <label htmlFor="ingredients">Ingredients</label>
          {recipe.ingredients.map((ingredient, key) => (
            <input
              key={key}
              type="text"
              name="ingredients"
              value={ingredient}
              onChange={(e) => handleIngredientChange(e, key)}
            ></input>
          ))}
          <button type="button" onClick={addIngredient}>
            Add Ingredient
          </button>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <label htmlFor="imageUrl">Image Url</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            onChange={handleChange}
          ></input>
        </div>

        <div className="flex gap-4 justify-end items-center">
          <label htmlFor="cookingTime">{"Cooking Time (minutes)"}</label>
          <input
            type="number"
            id="cookingTime"
            name="cookingTime"
            onChange={handleChange}
          />
        </div>
        <button>Create Recipe</button>
      </form>
    </div>
  );
};
export default CreateRecipe;
