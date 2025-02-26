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

const notifications = [
  {
    title: "Aleksandre Moistsrapishvili",
    online: "1 hour ago",
  },
  {
    title: "Test Test",
    online: "1 hour ago",
  },
  {
    title: "Test 2",
    online: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function CardLayout({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px] h-[80%] mt-6 bg-gray-50", className)} {...props}>
      <CardHeader>
        <CardTitle>Conversations</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification, index) => (
            <Button
              key={index}
              variant="ghost"
              className="mb-4 w-full justify-start grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 rounded-lg transition hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => console.log(`Clicked on: ${notification.title}`)} 
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1 text-left w-full">
                <p className="text-sm font-medium leading-none group-hover: text-gray-900 dark:group-hover:text-gray-50">{notification.title}</p>
                <p className="text-xs text-muted-foreground group-hover:text-gray-700 dark:group-hover:text-gray-300">{notification.online}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>

    </Card>
  )
}
