"use client";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import ChatCard from "./chat-card";
import { dummyChats } from "@/data/chat";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const SideBar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 border-r bg-muted/40 flex-col">
        <h1 className="px-4 pt-4 text-2xl font-bold italic">Promptly</h1>
        <div className="p-4 pb-2">
          <Button className="w-full justify-between" variant="secondary">
            New Chat
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="flex-1">
          {dummyChats.map((chat) => (
            <ChatCard key={chat.id} chat={chat} />
          ))}
        </ScrollArea>
      </div>

      {/* Mobile Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-4 right-4 z-50 md:hidden rounded-full shadow-lg"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="w-full h-full flex flex-col">
            <h1 className="px-4 pt-4 text-2xl font-bold italic">Promptly</h1>
            <div className="p-4 pb-2">
              <Button className="w-full justify-between" variant="secondary">
                New Chat
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <ScrollArea className="flex-1">
              {dummyChats.map((chat) => (
                <ChatCard key={chat.id} chat={chat} />
              ))}
            </ScrollArea>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideBar;
