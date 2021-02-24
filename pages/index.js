import Link from "next/link";
import { ReceivedOrder } from "../components/ReceivedOrder";

export default function IndexPage() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
      <ReceivedOrder />
    </div>
  );
}
