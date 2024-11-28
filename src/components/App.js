import { useState, useEffect } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);
  const [sortItems, setSortItems] = useState("input");
  const [searchI, setSearchI] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.description.toLowerCase().includes(searchI.toLowerCase())
    )
    setFilteredItems(filtered)
  }, [items, searchI]) 
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

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  function handleSort(e) {
    setSortItems(e.target.value);
  }

  function handleClearItems() {
    setItems([]);
  }

  function handleInputChange(e) {
    const query = e.target.value;
    setSearchI(query);
  }

  return (
    <div className="app">
      <Logo />
      <Form
        setItems={setItems}
        handleAddItems={handleAddItems}
        searchQuery={searchI}
        handleInputChange={handleInputChange}
      />
      <PackingList
        filteredItems={filteredItems} 
        handleDeleteItem={handleDeleteItem}
        handleUpdateItem={handleUpdateItem}
        handleSort={handleSort}
        sortItems={sortItems}
      />
      <button onClick={handleClearItems}>Clear Items</button>
      <Stats items={filteredItems} />
    </div>
  );
}

export default App;