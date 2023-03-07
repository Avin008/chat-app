import { Link } from "react-router-dom";
const Root = () => {
  return (
    <div className="w-11/12 rounded-md h-80 mx-auto mt-8 grid grid-cols-2">
      <div className="flex px-3 flex-col justify-center">
        <h1 className="text-2xl font-comfort font-medium">
          Meet{" "}
          <span className="text-[#766C7F] text-3xl">
            Klara
          </span>{" "}
          your Personal Chat A.I
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Rerum.
        </p>
        <div className="flex gap-3 mt-5">
          <Link
            className="py-1 px-4 border text-white font-medium bg-[#766C7F] rounded-md"
            to="/signup"
          >
            Join Now
          </Link>
          <Link
            className="py-1 px-4 border border-black font-medium rounded-md"
            to="/login"
          >
            Already had an Account?
          </Link>
        </div>
      </div>
      <div className="relative rounded">
        <img
          loading="lazy"
          className="absolute rounded-md h-full w-full object-cover"
          src="/src/assets/ai.svg"
        />
      </div>
    </div>
  );
};

export default Root;
