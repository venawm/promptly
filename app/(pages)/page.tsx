"use client";
import React from "react";
import { TabsData } from "@/data/hero-data";
import Hero from "@/components/layout/hero/hero";
import Navbar from "@/components/layout/header/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">
        <Hero tabs={TabsData} />
      </div>
    </>
  );
}
