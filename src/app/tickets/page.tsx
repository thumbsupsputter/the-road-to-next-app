import clsx from "clsx";
import {
  LucideCircleCheckBig,
  LucideFile,
  LucidePencilLine,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TICKET_ICONS = {
  OPEN: <LucideFile />,
  DONE: <LucideCircleCheckBig />,
  IN_PROGRESS: <LucidePencilLine />,
};

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div className="">
        <h1 className="text-3xl font-bold tracking-tight">
          Tickets Page
        </h1>

        <p className="text-sm text-muted-foreground">
          All your tickets at one place
        </p>
      </div>
      <Separator />
      <ul className="flex-1 flex flex-col items-center gap-y-4 animate-fade-down animate-duration-500 animate-ease-out">
        {initialTickets.tickets.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <span>{TICKET_ICONS[ticket.status]}</span>
                <span className="truncate">{ticket.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="line-clamp-3 whitespace-break-spaces">
                {ticket.content}
              </span>
            </CardContent>
            <CardFooter>
              <Link
                href={ticketPath(ticket.id)}
                className="text-sm underline"
              >
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default TicketsPage;
