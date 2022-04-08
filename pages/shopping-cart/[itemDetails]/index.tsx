import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";

const ItemDetails: NextPage = () => {
  const router = useRouter();
  console.log(router);

  const clickHandler = () => {
    router.push("/");
  };

  return (
    <Fragment>
      <button onClick={clickHandler}>Go To HomePage</button>
      <p>{router.query.itemDetails}</p>
    </Fragment>
  );
};

export default ItemDetails;
