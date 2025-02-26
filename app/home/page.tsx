import { Sidebar } from '@/components/Layout/Sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { cookies } from 'next/headers';
import React from 'react';

export default async function HomePage() {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

    return (
        <div>
            <SidebarProvider defaultOpen={defaultOpen}>
                <Sidebar />
                <main>
                    <SidebarTrigger />
                    <h1>Welcome to the Home Page</h1>
                </main>
            </SidebarProvider>
        </div>
    );
}
