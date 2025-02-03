import NavigationButton from "@/components/shared/NavigationButton";
import { Fragment } from "react";

export default function DashboardPage() {
  console.log("Dashboard page");
  return (
    <Fragment>
      <div className="text-center my-4">
        <p>Dashboard page</p>
        <NavigationButton route="/" label="Home" />
      </div>
    </Fragment>
  );
}
