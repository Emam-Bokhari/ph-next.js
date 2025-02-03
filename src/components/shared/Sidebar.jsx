import Link from "next/link";
import { Fragment } from "react";

export default function Sidebar() {
  return (
    <Fragment>
      <nav className="bg-indigo-500 text-white w-60 px-6 py-2 h-screen">
        <ul className="space-y-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
