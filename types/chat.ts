export interface Message {
  id: number;
  prompt?: string;
  response?: string;
  sender: string;
  timestamp: string;
}
