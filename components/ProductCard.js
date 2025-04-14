export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mb-2"
      />
      <h3 className="font-semibold text-sm">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
}