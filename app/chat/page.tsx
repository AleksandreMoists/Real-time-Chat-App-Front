import { Sidebar } from '@/components/Layout/Sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { cookies } from 'next/headers';
import React from 'react';

export async function ChatPage({ children }: { children: React.ReactNode }) {

    return (
        <div>
            <h1>Chats</h1>
        </div>
    );
};

export default ChatPage;