import { Fragment } from "react";

export default async function ProductDetailsPage({ params, searchParams }) {
  const productId = await params.productId;
  console.log(await searchParams);
  // console.log(productId);
  return (
    <Fragment>
      <p className="text-center text-3xl text-indigo-500">
        This is product details page
      </p>
      <p>Params: {productId}</p>
    </Fragment>
  );
}
