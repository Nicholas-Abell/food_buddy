"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

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
      <div className="flex flex-col">
        <ul>
          {recipes.map((recipe, key) => (
            <li key={key}>{recipe}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
