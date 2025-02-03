"use client";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

export default function NavigationButton({ route, label }) {
  const router = useRouter();
  const handleNavigation = () => {
    router.push(route);
  };
  return (
    <Fragment>
      <button
        onClick={handleNavigation}
        className="px-4 py-2 rounded-sm bg-indigo-500 hover:bg-indigo-600 text-white transition-all my-2"
      >
        {label}
      </button>
    </Fragment>
  );
}
