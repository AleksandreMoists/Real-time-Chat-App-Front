export interface ChatMessageProps {
    id: string;               // Add unique identifier for messages
    message: string;
    timestamp: Date;          // Change to Date type for better date handling
    senderId: string;         // Change user to senderId for clarity
    receiverId: string;       // Add receiverId for direct messages
    avatar: string;
    isOnline: boolean;
    seen: boolean;
    isHearted: boolean;
    type?: 'text' | 'image' | 'file';  // Add message type support
}

export interface ChatItem {
    id: number;
    title: string;
    participants: {          // Add participants info
        id: string;
        name: string;
        avatar: string;
        isOnline: boolean;
    }[];
    lastMessage?: ChatMessageProps;  // Add last message reference
    unreadCount?: number;    // Add unread messages count
    createdAt: Date;         // Add chat creation timestamp
    updatedAt: Date;         // Add last update timestamp
}