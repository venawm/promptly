export interface Message {
  id: string;
  prompt?: string;
  response?: string;
  sender: string;
  timestamp: Date;
}

export interface ChatCardTypes {
  id: number;
  title: string;
  lastMessage: string;
  time: string;
}
