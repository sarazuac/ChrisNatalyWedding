import type { Metadata } from "next";
import OurStoryContent from "@/components/content/OurStoryContent";

export const metadata: Metadata = { title: "Our Story" };

export default function OurStoryPage() {
  return <OurStoryContent />;
}
