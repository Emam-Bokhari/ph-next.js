import { Fragment } from "react";

export default async function CatchAllParams({ params, searchParams }) {
  const id = await params;
  console.log(id.slug);
  console.log(await searchParams);
  return (
    <Fragment>
      <p>This is catch all routes page</p>
    </Fragment>
  );
}
