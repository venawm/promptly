import React from "react";
import SideBar from "@/components/chat/sidebar";

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
      <div className="flex-1">{children}</div>
    </div>
  );
}
