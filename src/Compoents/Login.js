import React from "react";

const Login = () => {
  return (
    <div className="bg-red-400 w-[100vw] h-[100vh] flex flex-col items-center justify-around">
      <h1 className=" font-bold text-5xl ">Login</h1>
      <div className="w-[33%] h-[75%] bg-slate-200  rounded-lg flex flex-col justify-between gap-2">
        <input type="text" />
        <input type="text" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Login;
