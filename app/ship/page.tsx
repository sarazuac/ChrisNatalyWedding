import type { Metadata } from "next";
import ShipContent from "@/components/content/ShipContent";

export const metadata: Metadata = { title: "The Ship" };

export default function ShipPage() {
  return <ShipContent />;
}
