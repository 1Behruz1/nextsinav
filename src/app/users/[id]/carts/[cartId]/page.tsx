'use client'; 

import { useEffect, useState } from "react";

interface CartProduct {
  productId: number;
  quantity: number;
}

const CartDetailPage = ({ params }: { params: { cartId: string } }) => {
  const [cart, setCart] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/carts/${params.cartId}`);
      const cartData = await res.json();
      setCart(cartData);
    };

    fetchData();
  }, [params.cartId]);

  if (!cart) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Cart {cart.id}</h1>
      <ul className="space-y-2">
        {cart.products.map((item: CartProduct, idx: number) => (
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
