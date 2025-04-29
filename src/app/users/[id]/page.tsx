import Link from "next/link";
import React from "react";

interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  __v: number;
}

const UserPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://fakestoreapi.com/users/${params.id}`);
  if (!res.ok) throw new Error("Failed to fetch user");

  const user: User = await res.json();

  return (
    <div className="p-4">
      <Link href={`/users/${user.id}/carts`}>
        <p>ID: {user.id}</p>
        <p>Name: {user.name.firstname}</p>
        <p>Surname: {user.name.lastname}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </Link>
    </div>
  );
};

export default UserPage;
