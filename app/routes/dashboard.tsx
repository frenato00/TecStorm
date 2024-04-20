// import { HStack } from "@chakra-ui/react";
import { BellRing, Check } from "lucide-react";
import * as React from "react";
import { ClientOnly } from "remix-utils/client-only";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import MapView from "react-native-maps";
import { HStack } from "@chakra-ui/react";
import { MapWindow } from "~/components/MapWindow.client";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ messages: [] });
};

const messages = [
  {
    title: "Perigo de incêndio.",
    description: "Detetado sinal alarmante de infravermelhos",
  },
];
const notifications = [];

type CardProps = React.ComponentProps<typeof Card>;

export default function Dashboard({ ...props }: CardProps) {
  useEffect(() => {
    setTimeout(() => {
    const audio = new Audio(
      "https://www.myinstants.com/media/sounds/tethys.mp3",
    );
    audio.play();}, 5000);
  }, []);

  const { messages } = useLoaderData<typeof loader>();
  return (
    <div
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
      className="flex flex-row"
    >
      <Card
        style={{ float: "left" }}
        className={cn("w-[380px] hidden md:block")}
        {...props}
      >
        <CardHeader>
          <CardTitle>Notificações</CardTitle>
          <CardDescription>
            {notifications.length > 0 ? (
              messages.length == 1 ? (
                <>{"Tem " + notifications.length + " notificação."}</>
              ) : (
                <>{"Tem " + notifications.length + " notificações."}</>
              )
            ) : (
              "Sem novas notificações."
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            {/* <Check className="mr-2 h-4 w-4" /> Mark all as read */}
          </Button>
        </CardFooter>
      </Card>

      <ClientOnly>
        {() => {
          return <MapWindow />;
        }}
      </ClientOnly>
    </div>
  );
}
