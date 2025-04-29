import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className='w-48 bg-blue-500 p-4 flex flex-col gap-4 ' style={{height: "100vh"}}>

        <Link href={"/users"} className='border px-4 py-2 rounded'>Users</Link>
      </div>
    </div>
  )
}

export default Sidebar
