export default function PackingList({ filteredItems, handleDeleteItem, handleUpdateItem, sortItems, handleSort }) {
    const sortedItems = [...filteredItems].sort((a, b) => {
      switch (sortItems) {
        case "description":
          return a.description.localeCompare(b.description);
        case "packed":
          return a.packed - b.packed; 
        default:
          return a.id - b.id; 
      }
    });
    function Item({ item }) {
      return (
        <div style={{}}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => handleUpdateItem(item.id)}
            style={{ marginRight: '10px' }}
          />
          <span style={{ textDecoration: item.packed ? "line-through" : "" }}>
            {item.description} ({item.quantity})
          </span>
          <button 
            onClick={() => handleDeleteItem(item.id)} 
          >
            ❌
          </button>
        </div>
      );
    }
    
    return (
      <div className="list">
        <div>
          <label>Sort By:</label>
          <select value={sortItems} onChange={handleSort}>
            <option value="input">Input Order</option>
            <option value="description">Description</option>
            <option value="packed">Packed Status</option>
          </select>
        </div>
        <ul>
          {sortedItems.map((item) => (
            <li key={item.id}>
              <Item item={item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }