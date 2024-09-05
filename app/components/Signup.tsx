import React from "react";

const Login = () => {
  return (
    <div className="text-white">
      <div className="mt-10 mx-auto bg-slate-600 w-1/3 p-16 rounded-xl">
        <h2 className="text-4xl font-semibold">Signup</h2>
        <div className="flex flex-col gap-3">
          <div className="mt-5 flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="p-3 rounded-lg"
              id="username"
              placeholder="username"
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="p-3 rounded-lg"
              id="email"
              placeholder="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="p-3 rounded-lg"
              id="password"
              placeholder="password"
            />
          </div>
          <button className="bg-blue-400 rounded-md p-2 mt-2">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
