"use client";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MessageBox from "@/components/chat/message-box";
import { Message } from "@/types/chat";

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      response: "Hello! How can I help you today?",
      sender: "bot",
      timestamp: "10:30 AM",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [selectedModel, setSelectedModel] = useState("gpt-4");

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        prompt: inputMessage,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      // 1 sec timeout for testing
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          response:
            "I'm a simulated response. In a real app, I'd connect to an AI API.",
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Messages Container */}
      <ScrollArea className="h-[85vh]">
        <div className="flex flex-col gap-4 p-4 pt-8 max-w-4xl mx-auto">
          {messages.map((message) => (
            <MessageBox message={message} key={message.id} />
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 pt-2 bg-background">
        <div className="max-w-4xl mx-auto relative">
          <div className="relative flex justify-center items-center gap-4">
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger className="w-[180px] py-5 rounded-full">
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4">GPT-4</SelectItem>
                <SelectItem value="gpt-3.5">GPT-3.5 Turbo</SelectItem>
                <SelectItem value="claude-2">Claude 2</SelectItem>
              </SelectContent>
            </Select>
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything..."
              className="pr-12 h-12 rounded-2xl"
            />
            <Button
              size="icon"
              className="absolute right-2 top-2 h-8 w-8 rounded-xl"
              onClick={sendMessage}
              disabled={!inputMessage}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-center text-muted-foreground mt-2">
            Powered by {selectedModel} · Can make mistakes
          </p>
        </div>
      </div>
    </div>
  );
}
