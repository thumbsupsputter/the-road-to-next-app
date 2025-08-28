import Link from "next/link";
import { initialTickets } from "@/data";

const TicketsPage = () => {
  return (
    <div>
      <ul>
        {initialTickets.tickets.map((ticket) => (
          <li key={ticket.id}>
            <h2 className="text-2xl font-bold">{ticket.title}</h2>
            <Link
              href={`/tickets/${ticket.id}`}
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
