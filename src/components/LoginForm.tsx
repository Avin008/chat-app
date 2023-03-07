import { useState } from "react";

const LoginForm = () => {
  const [userCredentials, setUserCredentials] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const userLoginCredentialsHandler = (
    e: React.SyntheticEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.currentTarget;
    setUserCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      className="mx-auto mt-20 w-1/4 px-2"
      onSubmit={loginHandler}
    >
      <div className="space-y-2">
        <label
          className="flex flex-col gap-1 text-sm font-medium"
          htmlFor="email"
        >
          Email
          <input
            className="rounded-sm border border-gray-500 bg-transparent p-2 outline-1 outline-gray-600"
            type="text"
            name="email"
            id=""
            placeholder="johndoe@gmail.com"
            value={userCredentials.email}
            onChange={userLoginCredentialsHandler}
          />
        </label>
        <label
          className="flex flex-col gap-1 text-sm font-medium"
          htmlFor="email"
        >
          Password
          <input
            className="rounded-sm border border-gray-500 bg-transparent p-2 outline-1 outline-gray-600"
            type="password"
            name="password"
            id=""
            placeholder="********"
            value={userCredentials.password}
            onChange={userLoginCredentialsHandler}
          />
        </label>
        <div className="flex flex-col gap-2 pt-2">
          <button className="rounded-sm border bg-[#766C7F] p-2 text-sm font-medium text-white">
            Login
          </button>
          <button className="rounded-sm border border-[#766C7F] p-2 text-sm font-medium text-black">
            Login As Guest
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
