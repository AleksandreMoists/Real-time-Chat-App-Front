import { ChatItem, ChatMessageProps, FriendsProps } from '../types';

export const chatsItems: ChatItem[] = [
  { 
    id: 1,
    title: "Aleksandre Moistsrapishvili", 
    online: "1 hour ago" 
  },
  { 
    id: 2,
    title: "Test Test", 
    online: "1 hour ago" 
  },
  { 
    id: 3,
    title: "Test 2", 
    online: "2 hours ago" 
  },
];

export const mockMessages: ChatMessageProps[] = [
  {
    message: "Hey, how are you?",
    timestamp: "10:00 AM",
    user: "Aleksandre Moistsrapishvili",
    avatar: "",
    isOnline: true,
    seen: true,
    isHearted: false
  },
  {
    message: "I'm good, thanks!",
    timestamp: "10:05 AM",
    user: "me",
    avatar: "",
    isOnline: true,
    seen: true,
    isHearted: false
  }
];

export const friendsItems: FriendsProps[] = [
  {
    id: 1,
    name: "Aleksandre",
    lastname: "Moistsrapishvili",
    avatar: "",
    status: "Online",
    pending: false,
  },
  {
    id: 2,
    name: "John",
    lastname: "Doe",
    avatar: "",
    status: "Offline",
    pending: true,
  },
  {
    id: 3,
    name: "John",
    lastname: "Doe",
    avatar: "",
    status: "Offline",
    pending: true
  },
];