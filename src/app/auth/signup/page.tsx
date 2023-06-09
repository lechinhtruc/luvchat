
import Link from "next/link";

export const metadata = {
  title: "LUV Chat 💬 | Sign Up",
  description:
    "LUV Chat 💬 makes it easy and fun to stay close to your favourite people.",
};

const SignUp: React.FC = () => (
  <div className="flex flex-col lg:w-2/5 sm:w-full justify-center duration-300 animate-slide">
    <p className=" leading-tight font-bold text-6xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text overflow-hidden">
      Register account
    </p>
    <p className="my-6 text-violet-900 dark:text-white">
      LUV Chat makes it easy and fun to stay close to your favourite people.
    </p>
    <div className="flex flex-col w-full my-2 gap-y-2 duration-300">
      <div className="flex p-2 bg-slate-400 rounded-md backdrop-blur bg-opacity-10 duration-300">
        <input
          autoComplete="false"
          placeholder="Email address"
          className="bg-transparent border-none outline-none text-violet-900 dark:text-white w-full"
          type="text"
        />
      </div>
      <div className="flex p-2 bg-slate-400 rounded-md backdrop-blur bg-opacity-10 duration-300">
        <input
          autoComplete="false"
          placeholder="Password"
          className="bg-transparent border-none outline-none text-violet-900 dark:text-white w-full "
          type="password"
        />
      </div>
    </div>
    <div className="flex flex-col w-full gap-y-2 duration-300">
     {/*  <button className="text-violet-950 self-start opacity-80 text-sm whitespace-nowrap rounded-md duration-300 mb-2 hover:opacity-60 dark:text-white">
        Forgotten your password?
      </button> */}
      <button className="w-full text-center p-2 rounded-md duration-300 bg-gradient-to-r font-bold from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l hover:opacity-60">
        Sign  Up
      </button>
      <div className="flex gap-x-1">
        <p className="opacity-60 text-violet-950 dark:text-white">
          Already have an account?
        </p>
        <Link
          href={"/auth/signin"}
          className="duration-300 hover:opacity-60 hover:bg-gradient-to-bl"
        >
          <p className=" bg-gradient-to-bl from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Sign In
          </p>
        </Link>
      </div>
    </div>
  </div>
);

export default SignUp;
