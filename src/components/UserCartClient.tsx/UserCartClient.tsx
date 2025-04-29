"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface CartProduct {
  productId: number
  quantity: number
}

interface Cart {
  id: number
  userId: number
  date: string
  products: CartProduct[]
}

const UserCartClient = ({ userId }: { userId: number }) => {
  const [carts, setCarts] = useState<Cart[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/carts")
        const data: Cart[] = await res.json()
        const userCarts = data.filter((cart) => cart.userId === userId)
        setCarts(userCarts)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchCarts()
  }, [userId])

  if (loading) return <div className='text-center'>Loading...</div>
  if (carts.length === 0) return <div className='text-center text-red-500'>Cart yo'q</div>

  return (
    <div>
      <ul className="space-y-4">
        {carts.map((cart) => (
          <li key={cart.id} className="border p-4 rounded shadow">
            <p className='mb-2 text-gray-700'>Date: {cart.date}</p>
            <Link href={`/users/${userId}/carts/${cart.id}`} className="text-blue-500">
              Detail
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserCartClient
