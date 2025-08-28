import { initialTickets } from "@/data";

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
  return (
    <div>
      <h1>{ticket?.title}</h1>
      <p>{ticket?.content}</p>
      <p>{ticket?.status}</p>
    </div>
  );
};

export default TicketPage;
