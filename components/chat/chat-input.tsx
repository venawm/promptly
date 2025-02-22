import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";
import { Label } from "../ui/label";

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (value: string) => void;
  sendMessage: () => void;
  loading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
  inputMessage,
  setInputMessage,
  sendMessage,
  loading,
}) => {
  return (
    <div className="relative flex flex-col items-start gap-2 w-full">
      <Label htmlFor="chat-input" className="text-muted-foreground font-normal">
        Enter a prompt for improvement
      </Label>
      <div className="relative w-full">
        <Input
          id="chat-input"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey && !loading) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder={
            loading ? "Generating response..." : "Describe your request..."
          }
          className="pr-12 h-12 rounded-2xl"
          disabled={loading}
        />
        <Button
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
          onClick={sendMessage}
          disabled={!inputMessage.trim() || loading}
          aria-label="Send message"
        >
          {loading ? <Loader2 className=" animate-spin" /> : <Send />}
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
