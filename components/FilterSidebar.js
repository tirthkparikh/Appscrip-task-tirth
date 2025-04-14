export default function FilterSidebar({ categories, selectedCategory, onChange }) {
  return (
    <aside className="hidden md:block w-64 p-4 border-r">
      <h2 className="font-bold mb-4">Filters</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <label>
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat}
                onChange={() => onChange(cat)}
              />
              {cat}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
}