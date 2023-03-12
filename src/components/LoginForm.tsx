import { useState } from "react";
import { toast } from "react-hot-toast";

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

  const loginCall = (url: string) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    }).then((res) => {
      if (res.status === 200) {
        toast.success("user logged in successfully");
      } else if (res.status === 203) {
        toast.error("invalid password");
      } else if (res.status === 404) {
        toast.error("user not found");
      }
    });
  };

  const loginAsGuest = () => {
    setUserCredentials({
      email: "johndoe@gmail.com",
      password: "qwerty@1234!",
    });
  };

  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();
    loginCall("http://localhost:3000/login");
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
            className="rounded-md border border-gray-500 bg-transparent p-2 outline-1 outline-gray-600"
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
            className="rounded-md border border-gray-500 bg-transparent p-2 outline-1 outline-gray-600"
            type="password"
            name="password"
            id=""
            placeholder="********"
            value={userCredentials.password}
            onChange={userLoginCredentialsHandler}
          />
        </label>
        <div className="flex flex-col gap-2 pt-2">
          <button className="rounded-md border bg-[#766C7F] p-2 text-sm font-medium text-white">
            Login
          </button>
          <button
            className="rounded-md border border-[#766C7F] p-2 text-sm font-medium text-black"
            onClick={loginAsGuest}
          >
            Login As Guest
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
