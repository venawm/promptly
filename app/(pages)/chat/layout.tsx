// app/chat/layout.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/40 flex flex-col">
        <h1 className="px-4 pt-4 text-2xl font-bold italic">Promptly</h1>
        <div className="p-4 pb-2">
          <Button className="w-full justify-between" variant="secondary">
            New Chat
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-2">
            {/* Chat list items can be rendered here */}
            <div className="p-3 rounded-lg cursor-pointer transition-colors hover:bg-accent/50">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium truncate">Main Chat</span>
                <span className="text-xs text-muted-foreground">10:31 AM</span>
              </div>
              <p className="text-xs text-muted-foreground truncate mt-1">
                Hi! I need help...
              </p>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
