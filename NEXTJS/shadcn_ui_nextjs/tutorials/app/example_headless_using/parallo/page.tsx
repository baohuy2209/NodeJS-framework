import React from "react";
import Logo from "@/components/parallo_component/Logo";
import Header from "@/components/parallo_component/Header";
import Slider from "@/components/parallo_component/Slider";
import Introduction from "@/components/parallo_component/Introduction";
import Contact from "@/components/parallo_component/Contact";
export default function Parallo() {
  return (
    <div className="mr-5 ml-5 flex flex-col gap-3">
      <div className="mt-3 flex flex-row justify-between items-center">
        <Logo />
        <Header />
      </div>
      <Slider />
      <Introduction />
      <Contact />
    </div>
  );
}
