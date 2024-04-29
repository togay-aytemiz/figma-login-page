import React from "react";

const LoginForm = () => {
  return (
    <>
      <main className=" flex flex-col gap-5 w-[595px] font-montserrat mt-20">
        <div className="font-[700] text-[80px] text-white font-outline-2">LOGIN</div>
        <div className=" flex flex-col gap-5" >
          <form className="flex flex-col gap-4">
            <input type="text" name="" id="" placeholder="Username" className="p-3 border" />
            <input type="text" name="" id="" placeholder="Password" className="p-3 border"  />
          </form>
          <button className="p-2 bg-[#DA211C] text-white w-[313px] text-[25px] font-[700]">LOGIN</button>
          <div className="flex flex-row justify-between">
            <button className="font-[600] text-[20px] opacity-70">Forgot Password</button>
            <button className="font-[600] text-[20px] opacity-70">Register</button>

          </div>
        </div>
      </main>
    </>
  );
};

export default LoginForm;
