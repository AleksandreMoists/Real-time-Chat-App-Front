"use client"

import { useState, useRef } from "react";
import EmojiPicker, { Theme } from 'emoji-picker-react';
import { Smile, Send} from "lucide-react";

export function MessageInput() {
    const [message, setMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleEmojiClick = (emojiObject: any) => {
        setMessage((prev) => prev + emojiObject.emoji);
        setShowEmojiPicker(false);
        textareaRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    }

    const handleSend = () => {
        if (!message.trim()) return;
        setMessage('');
        setShowEmojiPicker(false);
    }

    return (
        <div className="flex-1 px-4 pt-2 pb-4">
            {showEmojiPicker && (
                <div className="absolute bottom-20 left-4 z-10">
                    <EmojiPicker
                        theme={Theme.DARK}
                        onEmojiClick={handleEmojiClick}
                        searchDisabled
                        skinTonesDisabled
                        previewConfig={{ showPreview: false}}
                        />
                </div>
            )}

            <div className="flex items-end gap-2 bg-background rounded-2xl border">
                <button
                    type="button"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className="p-2 hover:bg-muted rounded-full self-center"
                    >
                        <Smile className="h-5 w-5 text-muted-foreground" />
                    </button>

                    <textarea
                        ref={textareaRef}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onInput={() => {
                            if(!isTyping) {
                                setIsTyping(true);
                            }
                        }}
                        onBlur={() => setIsTyping(false)}
                        placeholder="Type a message..."
                        className="flex-1 resize-none bg-transparent focus:outline-none text-sm py-1.5 max-h-24"
                    />

                    <button
                        type="button"
                        onClick={handleSend}
                        disabled={!message.trim()}
                        className={`p-2 self-center rounded-full ${
                            message.trim()
                              ? 'bg-[#3797F0] text-primary-foreground hover:bg-[#3797F0]/90'
                              : 'text-muted-foreground cursor-not-allowed'
                          }`}
                        >
                          <Send className="w-5 h-5" />

                    </button>
            </div>
        </div>
    )
}