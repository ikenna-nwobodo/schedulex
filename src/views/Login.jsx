import React from "react";

function Login() {
  return (
    <div className="bg-login flex flex-col md:grid md:grid-cols-2 h-screen w-full bg-cover overflow-hidden">
      <div className="bg-white hidden md:flex h-full justify-center gap-1 items-center p-4 mb-6">
        <p className="text-3xl md:text-5xl font-semibold">ScheduleX</p>
        <div className="h-3 w-3 bg-black rounded-full"></div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center h-full w-full">
        <div className="flex md:hidden justify-center gap-1 items-center p-4 mb-6">
          <p className="text-5xl font-semibold">ScheduleX</p>
          <div className="h-3 w-3 bg-black rounded-full"></div>
        </div>
        <form className="bg-white bg-opacity-45 border border-white px-6 py-9 rounded-2xl w-9/12 md:w-10/12 lg:w-6/12 h-max">
          <p className="text-xl font-medium text-center mb-8">Login</p>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-sm">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="outline-none outline-0 p-2 rounded-md placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3 w-full">
              <label className="font-medium text-sm">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="outline-none outline-0 p-2 rounded-md placeholder:text-sm"
              />
              <div className="flex items-center justify-end">
                <p className="text-xs text-right cursor-pointer w-max hover:underline">
                  Forgot Password?
                </p>
              </div>
            </div>
            <a href="home" className="bg-black shadow-lg w-2/5 text-center text-white px-6 py-3 rounded-md cursor-pointer">
              Login
            </a>
            <p className="text-xs text-right cursor-pointer w-max">
              New Here?{" "}
              <span className="font-bold hover:underline">Register</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
