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

type CardProps = React.ComponentProps<typeof Card> & {
  title?: string;
  description?: string;
  items?: any[];
  addFriend?: boolean;
  renderItem?: (item: any, index: number) => React.ReactNode;
}

export function CardLayout({ className, title, description, items, renderItem, addFriend=false, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px] h-[80%] mt-6 bg-gray-50", className)} {...props}>
      <CardHeader>
      <div className="flex justify-between items-center">
        <CardTitle>{title}</CardTitle>
        {addFriend && (
        <Button variant="default" size="icon">
          <Plus className="h-4 w-4 text-black dark:text-white" />
        </Button>
        )}
      </div>
      <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <div>
          {items?.map((item, index) => (
            renderItem ? renderItem(item, index) : null
          ))}
        </div>
      </CardContent>

    </Card>
  )
}
