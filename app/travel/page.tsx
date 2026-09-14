import type { Metadata } from "next";
import TravelContent from "@/components/content/TravelContent";

export const metadata: Metadata = { title: "Travel" };

export default function TravelPage() {
  return <TravelContent />;
}
