import Heading from "@/components/heading";
import { initialTickets } from "@/data";
import TicketItem from "@/features/ticket/components/ticket-item";

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />
      <ul className="flex-1 flex flex-col items-center gap-y-4 animate-fade-down animate-duration-500 animate-ease-out">
        {initialTickets.tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </ul>
    </div>
  );
};

export default TicketsPage;
