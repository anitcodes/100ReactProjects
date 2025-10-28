import React, { useState } from "react";

const RandomUser = () => {
  const [users, setUsers] = useState([]); // store multiple users

  // API call to fetch a random user
  const getRandomUser = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUsers(prevUsers => [...prevUsers, ...data.results]); // append new user
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  // Optional: Clear all users
  const clearUsers = () => setUsers([]);

  return (
    <div className="p-6">
      {/* Buttons */}
      <div className="mb-6 flex gap-4">
        <button
          onClick={getRandomUser}
          className="py-2 px-6 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition"
        >
          Get User
        </button>
        <button
          onClick={clearUsers}
          className="py-2 px-6 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
        >
          Clear Users
        </button>
      </div>

      {/* Users list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
          >
            <img
              src={item.picture.medium}
              alt="user"
              className="rounded-full mb-4"
            />
            <p className="font-semibold">
              {item.name.title} {item.name.first} {item.name.last}
            </p>
            <p className="text-sm text-gray-600">Gender: {item.gender}</p>
            <p className="text-sm text-gray-600">Age: {item.dob.age}</p>
            <p className="text-sm text-gray-600">Email: {item.email}</p>
            <p className="text-sm text-gray-600">Country: {item.location.country}</p>
            <p className="text-sm text-gray-600">
              Location: {item.location.street.name} - {item.location.street.number}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomUser;
