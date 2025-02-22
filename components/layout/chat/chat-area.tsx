"use client";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import MessageBox from "@/components/chat/message-box";
import { Message } from "@/types/chat";
import ChatInput from "@/components/chat/chat-input";
import ModelSelector from "@/components/chat/model-selector";

const ChatArea = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1", // Initial message ID
      response: "Hello! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [selectedModel, setSelectedModel] = useState("gpt-4");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async () => {
    const trimmedMessage = inputMessage.trim();
    if (!trimmedMessage) return;

    setError(null);
    const userMessage: Message = {
      id: crypto.randomUUID(), // Temporary ID for user message
      prompt: trimmedMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: trimmedMessage, model: selectedModel }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response from AI");
      }

      const botResponse: Message = {
        id: data.id,
        response: data.response,
        sender: "bot",
        timestamp: data.timestamp,
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unexpected error occurred",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex-1 flex flex-col h-screen">
      {/* Message Scroll View */}
      <ScrollArea className="flex-1 h-[calc(100vh-120px)]">
        <div className="flex flex-col gap-4 p-4 pt-8 max-w-4xl mx-auto">
          {messages.map((message) => (
            // Message Box Component
            <MessageBox message={message} key={message.id} />
          ))}
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 pt-2 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="relative flex justify-center items-end gap-4">
            {/* Model Select Component */}
            <ModelSelector
              selectedModel={selectedModel}
              onModelChange={setSelectedModel}
              disabled={loading}
            />
            {/* Input Form */}
            <ChatInput
              inputMessage={inputMessage}
              setInputMessage={setInputMessage}
              sendMessage={sendMessage}
              loading={loading}
            />
          </div>
          <p className="text-xs text-center text-muted-foreground mt-2">
            {selectedModel} can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
