export const initialTickets = {
  tickets: [
    {
      id: "1",
      title: "Ticket 1",
      content: "Ticket 1 Content",
      status: "DONE" as const,
    },
    {
      id: "2",
      title: "Ticket 2",
      content: "Ticket 2 Content",
      status: "OPEN" as const,
    },
    {
      id: "3",
      title: "Ticket 3",
      content: "Ticket 3 Content",
      status: "IN_PROGRESS" as const,
    },
  ],
};
