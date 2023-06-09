"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

type Inputs = {
  username: string;
  password: string;
};

export const metadata = {
  title: "LUV Chat 💬 | Sign In",
  description:
    "LUV Chat 💬 makes it easy and fun to stay close to your favourite people.",
};

const SignIn: React.FC = () => {
  const [isFetching, setIsFetching] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsFetching(true);
    signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    })
      .then((result) => {
        if (result?.error) return;
        router.push("/chat");
      })
      .finally(() => setIsFetching(false));
  };

  return (
    <div className="flex flex-col lg:w-2/5 sm:w-full justify-center duration-300 transition-all animate-slide">
      <p className=" leading-tight font-bold text-6xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text overflow-hidden">
        Hang out anytime, anywhere
      </p>
      <p className="my-6 text-violet-900 dark:text-white">
        LUV Chat makes it easy and fun to stay close to your favourite people.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full my-2 gap-y-2 duration-300">
          <div className="flex p-2 bg-slate-400 rounded-md backdrop-blur bg-opacity-10 duration-300">
            <input
              {...register("username")}
              autoComplete="false"
              placeholder="Email address"
              className="bg-transparent border-none outline-none text-violet-900 dark:text-white w-full"
              type="text"
            />
          </div>
          <div className="flex p-2 bg-slate-400 rounded-md backdrop-blur bg-opacity-10 duration-300">
            <input
              {...register("password")}
              autoComplete="false"
              placeholder="Password"
              className="bg-transparent border-none outline-none text-violet-900 dark:text-white w-full "
              type="password"
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-y-2 duration-300">
          <button className="text-violet-950 self-start opacity-80 text-sm whitespace-nowrap rounded-md duration-300 mb-2 hover:opacity-60 dark:text-white">
            Forgotten your password?
          </button>
          <button
            disabled={isFetching}
            className={`w-full text-center p-2 rounded-md duration-300 bg-gradient-to-r font-bold from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l hover:opacity-60 disabled:cursor-wait disabled:opacity-60`}
            type="submit"
          >
            Sign In
          </button>
          <div className="flex gap-x-1">
            <p className="opacity-60 text-violet-950 dark:text-white">
              Need a account?
            </p>
            <Link
              href="/auth/signup"
              className="duration-300 hover:opacity-60 hover:bg-gradient-to-bl"
            >
              <p className=" bg-gradient-to-bl from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sign Up
              </p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
