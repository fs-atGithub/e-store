import { getPayload } from "payload";
import React from "react";

import configPromise from "@payload-config";

const payload = await getPayload({
  config: configPromise,
});
const categories = await payload.find({
  collection: "categories",
});
const Home = async () => {
  return (
    <pre>
      <div>{JSON.stringify(categories, null, 2)}</div>;
    </pre>
  );
};
export default Home;
