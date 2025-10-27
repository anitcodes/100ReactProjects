import React from "react";
import Icon from "../assets/Icon.png";

const Clients = ({ feat }) => {
  return (
    <div className="pt-4 px-20">
      <div className="text-center pb-8">
        <h1 className="text-3xl font-semibold">Our Clients</h1>
        <p className="text-sm text-gray-500 pt-2">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="flex items-center justify-between py-6 px-4 mb-4 bg-green-200 text-2xl font-bold text-gray-700 rounded-xl">
        <h3>Google</h3>
        <h3>Amazon</h3>
        <h3>Facebook</h3>
        <h3>Daraz</h3>
        <h3>Nvdia</h3>
        <h3>Meta</h3>
        <h3>Gmail</h3>
      </div>

      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="text-3xl font-semibold text-gray-700 tracking-tight">
          Manage your entire community <br />
          in a single system
        </h1>
        <img src={Icon} alt="" />
        <p className="text-sm text-gray-400">Who is nexcent suitable for?</p>
      </div>
    </div>
  );
};

export default Clients;
