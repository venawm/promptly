"use client";
import React from "react";
import { TabsData } from "@/data/hero-data";
import Hero from "@/components/layout/hero/hero";

export default function Page() {
  return <Hero tabs={TabsData} />;
}
