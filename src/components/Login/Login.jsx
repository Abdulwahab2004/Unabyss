import React from "react";

export default function Login() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#d6d6d8] flex flex-col items-center px-4">
      {/* Logo */}
      <div className="mt-10 mb-16 flex items-center gap-3 sm:mt-12 sm:mb-16">
        {/* Replace with your SVG/SCG logo icon */}
        <div className="grid grid-cols-3 gap-[3px] w-7 h-7">
          {Array.from({ length: 9 }).map((_, index) => (
            <span
              key={index}
              className="w-[5px] h-[5px] rounded-full bg-[#9b9b9f]"
            />
          ))}
        </div>

        <span className="text-sm sm:text-base tracking-[0.45em] text-[#d4d4d7]">
          UNABYSS
        </span>
      </div>

      {/* Login Card */}
      <section className="w-full max-w-[478px] rounded-2xl border border-[#38383a] bg-[#242424] px-6 py-9 sm:px-9 sm:py-10 shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-[31px] font-semibold text-[#dddddf]">
            Login
          </h1>

          <p className="mt-3 text-sm sm:text-[15px] text-[#aaa9ae]">
            Enter your email below to login to your account
          </p>
        </div>

        <form className="mt-8">
          {/* Email */}
          <div>
            <label className="mb-3 block text-sm font-medium text-[#d0cfd3]">
              Email
            </label>

            <input
              type="email"
              placeholder="michael@dundermifflin.com"
              className="h-10 w-full rounded-lg border border-[#3d3d40] bg-[#292929] px-3 text-sm text-[#d5d5d8] outline-none placeholder:text-[#a7a6aa] transition focus:border-[#66666a]"
            />
          </div>

          {/* Password */}
          <div className="mt-7">
            <div className="mb-3 flex items-center justify-between gap-4">
              <label className="text-sm font-medium text-[#d0cfd3]">
                Password
              </label>

              <button
                type="button"
                className="text-sm font-medium text-[#d0cfd3] transition hover:text-white"
              >
                Forgot your password?
              </button>
            </div>

            <input
              type="password"
              placeholder="***********"
              className="h-10 w-full rounded-lg border border-[#3d3d40] bg-[#292929] px-3 text-sm text-[#d5d5d8] outline-none placeholder:text-[#a7a6aa] transition focus:border-[#66666a]"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="mt-8 h-10 w-full rounded-lg bg-[#d5d5d7] text-sm font-semibold text-[#27272a] transition hover:bg-white active:scale-[0.99]"
          >
            Login
          </button>

          {/* Divider */}
          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#38383a]" />
            <span className="text-sm text-[#a6a5aa]">or</span>
            <div className="h-px flex-1 bg-[#38383a]" />
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-[#3d3d40] bg-[#272727] text-sm font-medium text-[#d6d5d9] transition hover:bg-[#303030]"
          >
            {/* Replace this with your SVG/SCG Google icon */}
            <span className="flex h-5 w-5 items-center justify-center font-bold">
              G
            </span>

            Log in with Google
          </button>

          {/* Signup */}
          <p className="mt-8 text-center text-sm text-[#aaa9ae]">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-[#c9c8cc] underline underline-offset-2 transition hover:text-white"
            >
              Sign up
            </button>
          </p>
        </form>
      </section>

      {/* Bottom Status */}
      <div className="mt-16 flex flex-col items-center text-center sm:mt-16">
        <div className="flex items-center gap-2">
          {/* Replace with your SVG/SCG alert icon */}
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#e57373] text-[10px] font-bold text-[#2a1b1b]">
            !
          </div>

          <p className="max-w-[150px] text-left text-sm leading-5 text-[#c7c6ca]">
            Some services are
            <br />
            down
          </p>
        </div>

        <div className="mt-3 flex items-center gap-5 text-xs sm:text-sm text-[#949399]">
          <button className="transition hover:text-white">
            Terms of Service
          </button>

          <button className="transition hover:text-white">
            Privacy Policy
          </button>
        </div>
      </div>
    </main>
  );
}