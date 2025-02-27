"app/home/page.tsx"
"use client"

import { CardLayout } from '@/components/Layout/Card';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Button } from '@/components/ui/button';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React, { useState, useEffect } from 'react';

export default function HomePage() {
    const [activeMenu, setActiveMenu] = useState("Chats");
    
    // Data for different sections
    const chatsItems = [
      { title: "Aleksandre Moistsrapishvili", online: "1 hour ago" },
      { title: "Test Test", online: "1 hour ago" },
      { title: "Test 2", online: "2 hours ago" },
    ];
  
    const friendsItems = [
      { name: "Friend 1", status: "Online" },
      { name: "Friend 2", status: "Offline" },
    ];
  
    const settingsItems = [
      { option: "Privacy", description: "Manage privacy settings" },
      { option: "Account", description: "Update account information" },
    ];
  
    return (
      <div>
        <SidebarProvider>
          <Sidebar onMenuItemClick={setActiveMenu} activeMenu={activeMenu}/>
          <main>
            <SidebarTrigger />
          </main>
          <div className="flex-1 p-4">
            {activeMenu === "Chats" && (
              <CardLayout
                title="Conversations"
                description="You have 3 unread messages."
                items={chatsItems}
                renderItem={(item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="mb-4 w-full justify-start grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 rounded-lg transition hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => console.log(`Clicked on: ${item.title}`)}
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1 text-left w-full">
                      <p className="text-sm font-medium leading-none">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.online}</p>
                    </div>
                  </Button>
                )}
              />
            )}
  
            {activeMenu === "Friends" && (
              <CardLayout
                title="Friends"
                description="Manage your friends list."
                items={friendsItems}
                renderItem={(item, index) => (
                  <div
                    key={index}
                    className="mb-4 w-full flex justify-between items-center p-4 rounded-lg transition hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-2 w-2 rounded-full ${item.status === "Online" ? 'bg-green-500' : 'bg-gray-400'}`} />
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.status}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      {item.status === "Online" ? "Message" : "Add Friend"}
                    </Button>
                  </div>
                )}
              />
            )}
  
            {activeMenu === "Settings" && (
              <CardLayout
                title="Settings"
                description="Adjust your preferences."
                items={settingsItems}
                addFriend={true}
                renderItem={(item, index) => (
                  <div
                    key={index}
                    className="mb-4 w-full p-4 rounded-lg transition hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{item.option}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                )}
              />
            )}
          </div>
        </SidebarProvider>
      </div>
    );
  }
