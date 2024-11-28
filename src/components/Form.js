import { useState } from "react";
export default function Form({ setItems, handleAddItems, handleInputChange, searchQuery }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    function handleDescription(e) {
      setDescription(e.target.value);
    }
    function handleQuantity(e) {
      setQuantity(parseInt(e.target.value, 10));
    }
    function handleSubmit(e) {
      e.preventDefault();
      const newItem = {
        description: description,
        quantity: quantity,
      };
      handleAddItems(newItem);
      setDescription("");
      setQuantity(1);
    }
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
        <select onChange={handleQuantity} value={quantity}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input 
          placeholder="Item…" 
          onChange={handleDescription} 
          value={description}
        />
        <button className="button">ADD</button>
        <input
          type="text"
          placeholder="Search for items"
          onChange={handleInputChange}
          value={searchQuery}
        />
      </form>
    );
  }