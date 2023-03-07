import { useState } from "react";

const SignupForm = () => {
  const [userCredentials, setUserCredentials] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const userCredentialsHandler = (
    e: React.SyntheticEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.currentTarget;
    setUserCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const signupHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      className="mx-auto mt-20 w-1/4 px-2"
      onSubmit={signupHandler}
    >
      <div className="space-y-2">
        <label
          className="flex flex-col gap-1 text-sm font-medium"
          htmlFor="firstname"
        >
          First Name
          <input
            className="rounded-md border border-gray-500 bg-transparent p-2 outline-none"
            type="text"
            name="firstName"
            id=""
            placeholder="John"
            value={userCredentials.firstName}
            onChange={userCredentialsHandler}
          />
        </label>
        <label
          className="flex flex-col gap-1 text-sm font-medium"
          htmlFor="lastname"
        >
          Last Name
          <input
            className="rounded-md border border-gray-500 bg-transparent p-2 font-medium outline-none"
            type="text"
            name="lastName"
            id=""
            placeholder="Doe"
            value={userCredentials.lastName}
            onChange={userCredentialsHandler}
          />
        </label>
        <label
          className="flex flex-col gap-1 text-sm font-medium"
          htmlFor="email"
        >
          Email
          <input
            className="rounded-md border border-gray-500 bg-transparent p-2 outline-none"
            type="email"
            name="email"
            id=""
            placeholder="johndoe@gmail.com"
            value={userCredentials.email}
            onChange={userCredentialsHandler}
          />
        </label>
        <label
          className="flex flex-col gap-1 text-sm font-medium"
          htmlFor="password"
        >
          Password
          <input
            className="rounded-md border border-gray-500 bg-transparent p-2 outline-none"
            type="password"
            name="password"
            id=""
            placeholder="********"
            value={userCredentials.password}
            onChange={userCredentialsHandler}
          />
        </label>
        <div className="flex flex-col gap-2 pt-2">
          <button className="rounded-md border bg-[#766C7F] p-2 text-sm font-medium text-white">
            Create New Account
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
