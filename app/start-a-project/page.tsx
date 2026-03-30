import type { Metadata } from "next";
import StartProjectForm from "@/components/forms/StartProjectForm";

export const metadata: Metadata = {
  title: "Start a Project — SACHHSOFT",
  description:
    "Tell us about your project. We review every submission personally and respond within one business day. No automated sales sequences. No spam.",
  alternates: { canonical: "https://sachhsoft.com/start-a-project" },
};

export default function StartAProjectPage() {
  return <StartProjectForm />;
}
