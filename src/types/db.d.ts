interface User {
  name: string;
  email: string;
  image: string;
  id: string;
}

interface Chat {
  id: string;
  messages: Message[];
}

interface Message {
  id: string & { length: 100 };
  senderId: string & { length: 50 };
  receiverId: string & { length: 50 };
  text: string & { length: 400 };
  timestamp: number;
}

interface FriendRequest {
  id: string;
  senderId: string;
  receiverId: string;
}
