export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    friends: User[];
    friendRequests: User[];
    messages: User[];
    createdAt: string;        // When the user account was created
    lastActive: string;       // Last time user was online
    status: 'online' | 'offline';  // User's current status
    avatar?: string;        // URL to user's profile picture
}