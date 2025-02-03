import Sidebar from "@/components/shared/Sidebar";
import { Fragment } from "react";

export default function DashboardLayout({ children }) {
  return (
    <Fragment>
      <div className="flex ">
        <Sidebar />
        <span className="p-4"> {children}</span>
      </div>
    </Fragment>
  );
}
