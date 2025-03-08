"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Plus } from "lucide-react"
import { useState } from "react"
import { AddFriendModal } from "../Friends/AddFriendModal"

type CardProps = React.ComponentProps<typeof Card> & {
  title?: string;
  description?: string;
  items?: any[];
  addFriend?: boolean;
  renderItem?: (item: any, index: number) => React.ReactNode;
  children?: React.ReactNode;
}

export function CardLayout({ className, title, description, items, renderItem, addFriend=false, children, ...props }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card className={cn("w-[380px] max-w-full h-auto mt-6 bg-background", className)} {...props}>
      <CardHeader>
      <div className="flex justify-between items-center">
        <CardTitle className="text-foreground">{title}</CardTitle>
        {addFriend && (
        <Button 
            onClick={() => setIsModalOpen(true)}
            variant="ghost" 
            size="icon"
            className="hover:bg-accent hover:text-accent-foreground"
            >
          <Plus className="h-6 w-6" />
        </Button>
        )}

        <AddFriendModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
        />
      </div>
      <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <div className="space-y-4">
          {items?.map((item, index) => (
            renderItem ? renderItem(item, index) : null
          ))}
        </div>
        
        {children}
      </CardContent>
    </Card>
  )
}
