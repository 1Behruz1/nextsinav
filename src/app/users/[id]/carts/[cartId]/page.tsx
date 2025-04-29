
interface CartProduct {
  productId: number;
  quantity: number;
}

interface Cart {
  id: number;
  userId: number;
  date: string;
  products: CartProduct[];
  __v: number;
}

interface PageProps {
  params: {
    cartId: string;
  };
}

const CartDetailPage = async ({ params }: PageProps) => {
  const res = await fetch(`https://fakestoreapi.com/carts/${params.cartId}`);
  if (!res.ok) throw new Error("Failed to fetch cart");
  const cart: Cart = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Cart ID: {cart.id}</h1>
      <p className="mb-4 text-gray-700">User ID: {cart.userId}</p>
      <ul className="space-y-2">
        {cart.products.map((item, idx) => (
          <li key={idx} className="border p-2 rounded">
            <p>Product ID: {item.productId}</p>
            <p>Quantity: {item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDetailPage;
