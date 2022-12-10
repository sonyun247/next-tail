import { Suspense } from "react";
import Loading from "./loading";
import Page1 from "./page";

export default function cardLayout() {
  return (
    <Suspense fallback={<Loading />}>
      <Page1 />
    </Suspense>
  );
}
