export interface ChatMessageProps {
    message: string;
    timestamp: string;
    user: string;
    avatar: string;
    isOnline: boolean;
    seen: boolean;
    isHearted: boolean;
}

export interface ChatItem {
    id: number;
    title: string;
    online: string;
}