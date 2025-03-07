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
    <Card className={cn("w-[380px] max-w-full h-auto mt-6 bg-gray-50", className)} {...props}>
      <CardHeader>
      <div className="flex justify-between items-center">
        <CardTitle>{title}</CardTitle>
        {addFriend && (
        <Button 
            onClick={() => setIsModalOpen(true)}
            variant="ghost" 
            size="icon"
            >
          <Plus className="h-6 w-6 dark:text-white" />
        </Button>
        )}

        <AddFriendModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
        />
      </div>
      <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <div>
          {items?.map((item, index) => (
            renderItem ? renderItem(item, index) : null
          ))}
        </div>
        
          {children}
      </CardContent>
    </Card>
  )
}
