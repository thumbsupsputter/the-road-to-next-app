import Link from "next/link";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div className="">
        <h1 className="text-3xl font-bold tracking-tight">Home</h1>

        <p className="text-sm text-muted-foreground">
          Your home place to start
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath} className="underline">
          Go Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
