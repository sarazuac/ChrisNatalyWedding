import type { Metadata } from "next";
import RegistryContent from "@/components/content/RegistryContent";

export const metadata: Metadata = { title: "Registry" };

export default function RegistryPage() {
  return <RegistryContent />;
}
