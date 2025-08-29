import Link from "next/link";
import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.tickets.find(
    (ticket) => ticket.id === ticketId
  );
  if (!ticket) {
    return (
      <div className="flex flex-1 ">
        <Placeholder
          label="Ticket not found"
          button={
            <Button asChild variant="default">
              <Link href={ticketsPath}>Go back to tickets</Link>
            </Button>
          }
        />
        <Placeholder label="Ticket not found" />
      </div>
    );
  }
  return (
    <div>
      <h1>{ticket?.title}</h1>
      <p>{ticket?.content}</p>
      <p>{ticket?.status}</p>
    </div>
  );
};

export default TicketPage;
