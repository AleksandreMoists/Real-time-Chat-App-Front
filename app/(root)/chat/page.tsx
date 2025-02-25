import { Sidebar } from '@/components/Layout/Sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { cookies } from 'next/headers';
import React from 'react';

export async function ChatPage({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

    return (
        <div>
            <SidebarProvider defaultOpen={defaultOpen}>
                <Sidebar />
                <main>
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
        </div>
    );
};

export default ChatPage;