import clsx from "clsx";
import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TICKET_ICONS = {
  OPEN: "🔓",
  DONE: "🔒",
  IN_PROGRESS: "🔄",
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
      <ul className="flex-1 flex flex-col items-center gap-y-4 animate-fade-down animate-duration-500 animate-ease-out">
        {initialTickets.tickets.map((ticket) => (
          <li
            key={ticket.id}
            className="w-full max-w-[420px] p-4 border border-slate-300 rounded-md"
          >
            <span className="text-2xl">
              {TICKET_ICONS[ticket.status]}
            </span>
            <h2 className="text-2xl font-semibold truncate">
              {ticket.title}
            </h2>
            <p
              className={clsx("text-sm text-slate-500 truncate", {
                "line-through": ticket.status === "DONE",
              })}
            >
              {ticket.content}
            </p>
            <Link
              href={ticketPath(ticket.id)}
              className="text-sm underline"
            >
              View
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketsPage;
