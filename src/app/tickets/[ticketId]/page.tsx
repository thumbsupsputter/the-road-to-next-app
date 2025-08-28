type TicketPageProps = {
  params: {
    ticketId: string;
  };
};
const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  return (
    <div>
      <h1>Hello, Tickets {ticketId}</h1>
    </div>
  );
};

export default TicketPage;
