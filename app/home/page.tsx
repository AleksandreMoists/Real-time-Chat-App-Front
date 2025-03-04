"app/home/page.tsx"
"use client"

import { ChatSection } from '@/components/Chat/ChatSection';
import { CardLayout } from '@/components/Layout/Card';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Button } from '@/components/ui/button';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Switch } from '@/components/ui/switch';
import { BellRing } from 'lucide-react';
import React, { useState } from 'react';
import { chatsItems } from '@/lib/data';

export default function HomePage() {
    const [activeMenu, setActiveMenu] = useState("Chats");
  
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
          {activeMenu === "Chats" && <ChatSection chats={chatsItems} />}
  
            {activeMenu === "Friends" && (
              <CardLayout
                title="Friends"
                description="Manage your friends list."
                addFriend={true}
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
                renderItem={(item, index) => (
                  <div key={index} className="flex-1 space-y-1">
                    <div className="mb-4 w-full p-4 rounded-lg transition hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{item.option}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              >
                <div className="flex items-center space-x-4 rounded-md border p-4">
                  <BellRing />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Push Notifications
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Send notifications to device.
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardLayout>
            )}
          </div>
        </SidebarProvider>
      </div>
    );
};