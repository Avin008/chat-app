const LoginForm = () => {
  return (
    <form className="mx-auto mt-20 w-1/4 px-2">
      <div className="space-y-2">
        <label
          className="flex flex-col gap-1"
          htmlFor="email"
        >
          Email
          <input
            className="rounded-md border border-gray-500 bg-transparent p-2 outline-none"
            type="text"
            name=""
            id=""
            placeholder="johndoe@gmail.com"
          />
        </label>
        <label
          className="flex flex-col gap-1"
          htmlFor="email"
        >
          Password
          <input
            className="rounded-md border border-gray-500 bg-transparent p-2 outline-none"
            type="text"
            name=""
            id=""
            placeholder="********"
          />
        </label>
        <div className="flex flex-col gap-2 pt-2">
          <button className="rounded-md border bg-[#766C7F] p-2 text-white">
            Login
          </button>
          <button className="rounded-md border border-[#766C7F] p-2 text-black">
            Login As Guest
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
