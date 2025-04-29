import Link from "next/link";
import React from "react";

interface Params {
  params: {
    id: string;
  };
}

const UserPage = async ({ params }: Params) => {
  const res = await fetch(`https://fakestoreapi.com/users/${params.id}`);
  if (!res.ok) throw new Error("Failed to fetch user");

  const user = await res.json();

  return (
    <div className="p-4">
      <Link href={`/users/${user.id}/carts`}>
      <p>ID: {user.id}</p>
      <p>Name: {user.name.firstname}</p>
      <p>Surname: {user.name.lastname}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p></Link>
    </div>
  );
};

export default UserPage;
