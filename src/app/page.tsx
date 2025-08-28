import Link from "next/link";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div>
      <h1>Home, Page</h1>
      <Link href={ticketsPath} className="underline">
        Go Tickets
      </Link>
    </div>
  );
};

export default HomePage;
