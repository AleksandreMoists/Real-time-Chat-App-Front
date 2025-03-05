"use client"

import { ChatMessageProps } from "@/types";
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { MessageInput } from "../ui/MessageInput";
import { PhoneCall, Settings } from "lucide-react";
import { Heart } from "lucide-react";

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
    const [messageList, setMessageList] = useState(messages); // Use state to manage messages

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;
        // Add message send logic here
        setNewMessage('');
    }

    const toggleHeartMessage = (index: number) => {
        setMessageList(prevMessages =>
            prevMessages.map((msg, i) =>
                i === index ? { ...msg, isHearted: !msg.isHearted } : msg
            )
        );
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
                {messageList.map((message, index) => (
                    <div
                        key={index} 
                        className={`flex ${message.user === 'me' ? 'justify-end' : 'justify-start'}`}   
                        onDoubleClick={() => toggleHeartMessage(index)}
                    >
                        {message.user !== 'me' && (
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 mr-2 overflow-hidden">
                                {message.avatar ? (
                                    <img src={message.avatar} alt="User avatar" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-primary text-primary-foreground select-none">
                                        {message.user.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>
                        )}
                        <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.user === 'me' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                <p>{message.message}</p>
                                <p className="text-xs mt-1 opacity-70">
                                    {message.timestamp}
                                </p>
                                {message.isHearted && ( // Display heart icon if message is hearted
                                    <Heart className="text-red-500 h-4 w-4 mt-1" />
                                )}
                        </div>
                        {message.user === 'me' && (
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 ml-2 overflow-hidden">
                                {message.avatar ? (
                                    <img src={message.avatar} alt="User avatar" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-primary text-primary-foreground select-none">
                                        {message.user.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>
                        )}
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