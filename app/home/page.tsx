"use client"

import { CardLayout } from '@/components/Layout/Card';
import { Sidebar } from '@/components/Layout/Sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React, { useState, useEffect } from 'react';

export default function HomePage() {
    const [activeMenu, setActiveMenu] = useState("Chats");

    const handleMenuItemClick = (menu: string) => {
        setActiveMenu(menu);
    };
    
    return (
        <div>
            <SidebarProvider>
                <Sidebar onMenuItemClick={handleMenuItemClick} activeMenu={activeMenu}/>
                <main>
                    <SidebarTrigger />
                </main>
                <div className="flex-1 p-4">
                    {activeMenu === "Chats" ? <CardLayout /> : <div>Select a menu item</div>}
                </div>
            </SidebarProvider>
        </div>
    );
}
