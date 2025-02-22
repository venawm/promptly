"use client";
import { useState } from "react";
import { Tabs } from "@radix-ui/react-tabs";
import TabsHeader from "@/components/hero/tabs-header";
import TabsContentArea from "@/components/hero/tab-area";
import { Badge } from "@/components/ui/badge";
import { ContentProps } from "@/types/hero-types";

const Hero = ({
  heading = "Effortlessly Generate Creative & Engaging Prompts",
  description = "Unlock endless possibilities with AI-powered prompt generation.",
  tabs,
}: ContentProps) => {
  // Tabs States
  const [activeTab, setActiveTab] = useState(
    tabs && tabs.length > 0 ? tabs[0].value : "",
  );

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="px-3 py-1 text-sm">
            AI-Powered Prompt Generator
          </Badge>
          <h1 className="max-w-2xl text-3xl font-bold md:text-5xl">
            {heading}
          </h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          {/* Tabs Component */}
          <TabsHeader
            tabs={tabs!}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          {/* Tabs Content Render Component */}
          <TabsContentArea tabs={tabs!} activeTab={activeTab} />
        </Tabs>
      </div>
    </section>
  );
};

export default Hero;
