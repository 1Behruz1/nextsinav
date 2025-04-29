import Link from "next/link";
import React from "react";

const page = async () => {
  interface userType {
    id: number;
    name: {
      firstname: string;
      lastname: string;
    };
  }

  const res = await fetch("https://fakestoreapi.com/users");
  if (!res.ok) throw new Error("Failed to fetch");
  const users: userType[] = await res.json();

  return (
    <div>
      <ul className="flex gap-3 p-4 flex-wrap">
        {users.map((user) => (
          <li className="bg-gray-400 w-72 rounded-xl p-4" key={user.id}>
            <Link href={`/users/${user.id}`}>
              <div>
                <p>ID: {user.id}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
