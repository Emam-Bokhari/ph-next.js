import { Fragment } from "react";

export default function AuthLayout({ children }) {
  return (
    <Fragment>
      {children}
      <div className="flex justify-center">
        <footer className="text-sm text-gray-500 absolute bottom-6">
          All Rights Reserved by Dreams Software Company Ltd.
        </footer>
      </div>
    </Fragment>
  );
}
