export default function Stats({items}) {
    const numItems = items.length
    const numPacked = items.filter((item) => item.packed).length
    const percentPacked = numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;
    return (
      <footer className="stats">
        <em>You have {numItems} items in the list. You already packed {numPacked} ({percentPacked}%). {percentPacked === 100 && <span> You got everything!</span>}</em>
      </footer>
    );
  }