import type { Metadata } from "next";
import RsvpContent from "@/components/content/RsvpContent";

export const metadata: Metadata = { title: "RSVP" };

export default function RsvpPage() {
  return <RsvpContent />;
}
