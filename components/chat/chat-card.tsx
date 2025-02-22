"use client";
import { ChatCardTypes } from "@/types/chat-types";
import Link from "next/link";
import { useParams } from "next/navigation";

const ChatCard = ({ chat }: { chat: ChatCardTypes }) => {
  const params = useParams();

  return (
    <div className="p-2">
      <Link href={`/chat/${chat.id}`}>
        <div
          className={`p-3 rounded-lg cursor-pointer transition-colors ${
            params?.id === chat.id.toString() ? "bg-muted-foreground/10" : ""
          } hover:bg-muted-foreground/5`}
        >
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium truncate">{chat.title}</span>
            <span className="text-xs text-muted-foreground">{chat.time}</span>
          </div>
          <p className="text-xs text-muted-foreground truncate mt-1">
            {chat.lastMessage}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ChatCard;
