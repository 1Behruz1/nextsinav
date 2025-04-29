import UserCartClient from '@/components/UserCartClient.tsx/UserCartClient'
import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
  const userId = parseInt(params.id)

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{userId}</h1>
      <UserCartClient userId={userId} />
    </div>
  )
}

export default page
