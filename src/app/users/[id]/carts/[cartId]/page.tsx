import { GetServerSideProps } from "next";

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

interface CartPageProps {
  cart: Cart;
}

const CartDetailPage = ({ cart }: CartPageProps) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { cartId } = context.params!;
  const res = await fetch(`https://fakestoreapi.com/carts/${cartId}`);
  const cart: Cart = await res.json();

  return {
    props: { cart },
  };
};

export default CartDetailPage;
