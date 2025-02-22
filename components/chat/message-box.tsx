import { Bot, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Message } from "@/types/chat";
import { memo } from "react";

const MessageBoxComponent = ({ message }: { message: Message }) => {
  const date = new Date(message.timestamp);

  return (
    <div
      className={`flex gap-3 ${
        message.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {message.sender === "bot" && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="/bot-avatar.png" />
          <AvatarFallback>
            <Bot className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={`max-w-[80%] text-wrap rounded-2xl p-4 transition-all ${
          message.sender === "user"
            ? "bg-primary text-primary-foreground rounded-br-sm"
            : "bg-secondary text-secondary-foreground rounded-bl-sm"
        }`}
      >
        <p className="text-sm break-words">
          {message.sender === "bot" ? message.response : message.prompt}
        </p>
        <p
          className={`text-xs mt-2 ${
            message.sender === "user"
              ? "text-primary-foreground/70"
              : "text-secondary-foreground/70"
          }`}
        >
          {date.toLocaleTimeString()}
        </p>
      </div>
      {message.sender === "user" && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="/user-avatar.png" />
          <AvatarFallback>
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

const MessageBox = memo(MessageBoxComponent);

export default MessageBox;
