import React from "react";
import SideBar from "@/components/chat/sidebar";
import ThemeToggler from "@/components/ui/toogle-button";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-background flex">
      {/* Sidebar */}
      <SideBar />
      {/* Content */}
      <div className="fixed right-4 top-4 z-50">
        <ThemeToggler />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
