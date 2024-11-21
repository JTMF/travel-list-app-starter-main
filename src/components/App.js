import { useState } from "react";

function Logo() {
  return <h1>My Travel List</h1>;
}

function Form({ setItems, handleAddItems }) {
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
    </form>
  );
}

function PackingList({ items }) {
  function Item({ item }) {
    return (
      <div>
        <span style={{ textDecoration: item.packed ? "line-through" : "" }}>
          {item.description} ({item.quantity})
        </span>
      </div>
    );
  }

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in the list. You already packed Y (Z%).</em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    if (!item.description.trim()) return;
    const newItem = {
      id: Date.now(),
      description: item.description,
      quantity: item.quantity,
      packed: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  }
  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} handleAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;