import Navbar from "@/components/shared/Navbar";
import { Fragment } from "react";

export default function CommonLayout({ children }) {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
}
