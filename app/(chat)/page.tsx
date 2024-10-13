import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "../components/Loading";

const MainPage = () => {
  const Chat = dynamic(() => import("./chat"));

  return (
    <Suspense fallback={<Loading/>}>
      <Chat />
    </Suspense>
  );
};

export default MainPage;
