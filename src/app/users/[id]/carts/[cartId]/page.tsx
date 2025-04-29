const CartDetailPage = async ({ params }: { params: { cartId: string } }) => {
    const res = await fetch(`https://fakestoreapi.com/carts/${params.cartId}`)
    const cart = await res.json()
  
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Cart{cart.id}</h1>
        <ul className="space-y-2">
          {cart.products.map((item: any, idx: number) => (
            <li key={idx} className="border p-2 rounded">
              <p>Product ID: {item.productId}</p>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default CartDetailPage
  