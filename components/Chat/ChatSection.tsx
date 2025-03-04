"use client"

import { CardLayout } from "../Layout/Card"
import { ChatLayout } from "./ChatMessage"
import { Button } from "../ui/button"
import { ChatItem } from "@/types"
import { mockMessages } from "@/lib/data"
import { useState } from "react"

interface ChatSectionProps {
    chats: ChatItem[];
}

export function ChatSection({ chats }: ChatSectionProps) {
    const [selectedChat, setSelectedChat] = useState<ChatItem | null>(null);

    return (
        selectedChat ? (
            <ChatLayout
                chat={selectedChat}
                messages={mockMessages}
                onBack={() => setSelectedChat(null)}
            />
        ) : (
            <CardLayout
            title="Conversations"
            description={`You have ${chats.length} unread messages.`}
            items={chats}
            renderItem={(item, index) => (
              <Button
                key={item.id}
                variant="ghost"
                className="mb-4 w-full justify-start grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 rounded-lg transition hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setSelectedChat(item)}
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1 text-left w-full">
                  <p className="text-sm font-medium leading-none">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.online}</p>
                </div>
              </Button>
            )}
          />
        )    
        );
}