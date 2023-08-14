"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/recipes");
        setRecipes(response.data);
      } catch (error) {}
    };
    fetchRecipes();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <h2>Recipes</h2>
      <div className="flex flex-col justify-center items-center">
        {recipes && (
          <ul>
            {recipes.map((recipe, key) => (
              <li
                className="flex flex-col justify-center items-center gap-4"
                key={key}
              >
                <h2 className="font-bold uppercase text-2xl">{recipe.name}</h2>
                <p>{recipe.instructions}</p>
                <img
                  src={recipe.imageUrl}
                  alt={recipe.name + key}
                  width={20}
                  height={20}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
