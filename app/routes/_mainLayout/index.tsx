import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_mainLayout/")({
  component: Home,
});

function Home() {
  return (
    <>
      <div className="bg-blue-600">Project 972</div>
    </>
  );
}
