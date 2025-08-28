import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TicketsPage = () => {
  return (
    <div>
      <ul>
        {initialTickets.tickets.map((ticket) => (
          <li key={ticket.id}>
            <h2 className="text-2xl font-bold">{ticket.title}</h2>
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
