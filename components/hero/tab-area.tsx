import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Tab {
  value: string;
  content: {
    badge: string;
    title: string;
    description: string;
    buttonText: string;
    imageSrc: string;
    imageAlt: string;
  };
}

interface TabsContentAreaProps {
  tabs: Tab[];
  activeTab: string;
}

const TabsContentArea: React.FC<TabsContentAreaProps> = ({
  tabs,
  activeTab,
}) => {
  const activeContent = tabs.find((tab) => tab.value === activeTab)?.content;

  if (!activeContent) return null;

  return (
    <div className="mx-auto mt-8 max-w-screen-xl p-8 lg:p-16">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col gap-6">
          <Badge
            variant="outline"
            className="w-fit rounded-full bg-primary-foreground/60 px-4 py-1 text-sm font-medium text-primary"
          >
            {activeContent.badge}
          </Badge>

          <h3 className="text-4xl font-semibold tracking-tight text-primary lg:text-6xl">
            {activeContent.title}
          </h3>

          <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">
            {activeContent.description}
          </p>

          <Button
            className="mt-4 w-fit rounded-full"
            size="lg"
            variant="outline"
          >
            {activeContent.buttonText}
          </Button>
        </div>

        <div className="relative w-full h-96">
          <Image
            src={activeContent.imageSrc}
            alt={activeContent.imageAlt}
            fill
            className="  object-cover relative"
          />
        </div>
      </div>
    </div>
  );
};

export default TabsContentArea;
