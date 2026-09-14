import type { Metadata } from "next";
import FaqContent from "@/components/content/FaqContent";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return <FaqContent />;
}
