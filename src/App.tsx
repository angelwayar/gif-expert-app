import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


function App() {
  const [categories, setCategories] = useState([""]);
  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>Gif Expert APP</h1>
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
      />
      <ol>
        {
          categories.map((category) => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </>
  )
}

export default App
