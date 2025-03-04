"use client"

import { ChatMessageProps } from "@/types";
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { MessageInput } from "../ui/MessageInput";
import { PhoneCall, Settings } from "lucide-react";

interface ChatLayoutProps {
    chat: {
        title: string;
        online: string;
    }
    messages: ChatMessageProps[];
    onBack: () => void;
}

export function ChatLayout({ chat, messages, onBack}: ChatLayoutProps) {
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;
        // Add message send logic here
        setNewMessage('');
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-4 p-4 border-b">
                <Button variant="ghost" size="icon" onClick={onBack}>
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex justify-between items-center flex-1">
                    <div>
                    <h2 className="text-lg font-semibold">{chat.title}</h2>
                    <p className="text-sm text-muted-foreground">{chat.online}</p>
                    </div>
                    <div className="flex-row gap-4 hidden md:flex">
                        <PhoneCall className="cursor-pointer"/>
                        <Settings className="cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <div
                        key={index} 
                        className={`flex ${message.user === 'me' ? 'justify-end' : 'justify-start'}`}   
                    >
                        <div className={`max-w-xs lg:max-w-md px-4 rounded-lg ${
                            message.user === 'me' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                <p>{message.message}</p>
                                <p className="text-xs mt-1 opacity-70">
                                    {message.timestamp}
                                </p>
                        </div>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t">
                <div className="flex gap-2">
                    <MessageInput />
                </div>
            </form>
        </div>
    )
}