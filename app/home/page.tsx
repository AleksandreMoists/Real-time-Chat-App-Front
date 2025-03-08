"app/home/page.tsx"
"use client"

import { ChatSection } from '@/components/Chat/ChatSection';
import { CardLayout } from '@/components/Layout/Card';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Button } from '@/components/ui/button';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Switch } from '@/components/ui/switch';
import { BellRing, ChevronLeft } from 'lucide-react';
import React, { useState } from 'react';
import { chatsItems, friendsItems } from '@/lib/data';
import { AccountSettings } from '@/components/Settings/AccountSettings';

export default function HomePage() {
    const [activeMenu, setActiveMenu] = useState("Chats");
    const [selectedSetting, setSelectedSetting] = useState<string | null>(null);

    const settingsItems = [
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
                    className="mb-4 w-full flex justify-between items-center p-4 rounded-lg transition hover:bg-accent"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-2 w-2 rounded-full ${item.status === "Online" ? 'bg-green-500' : 'bg-muted-foreground'}`} />
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.status}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      {item.pending ? "Add Friend" : "Remove Friend"}
                    </Button>
                  </div>
                )}
              />
            )}
  
  {activeMenu === "Settings" && (
            <CardLayout
              title={selectedSetting || "Settings"}
              description={selectedSetting ? `Manage your ${selectedSetting.toLowerCase()} settings` : "Adjust your preferences."}
            >
              {selectedSetting ? (
                <div className="space-y-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mb-4 -ml-2"
                    onClick={() => setSelectedSetting(null)}
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back to Settings
                  </Button>
                  <AccountSettings />
                </div>
              ) : (
                <>
                  {settingsItems.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedSetting(item.option)}
                      className="mb-4 w-full p-4 rounded-lg transition hover:bg-accent cursor-pointer"
                    >
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">{item.option}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
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
                </>
              )}
            </CardLayout>
          )}
          </div>
        </SidebarProvider>
      </div>
    );
};