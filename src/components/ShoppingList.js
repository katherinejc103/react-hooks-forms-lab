import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchList, setSearchList] = useState("")
  const [addNewItem, setNewItem] = useState("")
 
  function onSearchChange(event){
    console.log(event.target.value)
    setSearchList(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

 

  function onItemFormSubmit(item){
    console.log('hi')
    setItems([ ...items, item])
  }
  

  const itemsToDisplay = items
  .filter((item) =>selectedCategory === "All" || item.category === selectedCategory)
  .filter((item) => item.name.toLowerCase().includes(searchList.toLowerCase()))


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={searchList}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
