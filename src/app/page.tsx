import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home, Page</h1>
      <Link href="/tickets" className="underline">
        Go Tickets
      </Link>
    </div>
  );
};

export default HomePage;
