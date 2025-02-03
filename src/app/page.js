"use client";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

export default function HomePage() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/dashboard");
  };
  return (
    <Fragment>
      <div className="text-center">
        <p className="text-xl  my-4 ">Home Page</p>
        <button
          onClick={handleNavigation}
          className="px-4 py-2 rounded-sm bg-indigo-500 hover:bg-indigo-600 text-white transition-all"
        >
          Dashboard
        </button>
      </div>
    </Fragment>
  );
}
