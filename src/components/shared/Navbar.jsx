import Link from "next/link";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <Fragment>
      <div className="py-4 bg-indigo-500 text-white">
        <nav className=" flex justify-between max-w-screen-xl m-auto px-8">
          <div>
            <h3>Dreams</h3>
          </div>
          <ul className="flex gap-5 justify-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link prefetch={false} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}
