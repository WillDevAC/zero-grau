import React from "react";
import { Loading } from "./loading";

export function LoadingScreen() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-lg z-50">
      <Loading color="white"/>
    </div>
  );
}
