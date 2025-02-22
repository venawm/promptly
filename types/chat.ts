export interface Message {
  id: string;
  prompt?: string;
  response?: string;
  sender: string;
  timestamp: Date;
}
