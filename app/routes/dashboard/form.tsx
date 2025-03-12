import { createFileRoute } from "@tanstack/react-router@latest";

export const Route = createFileRoute("/dashboard/form")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/dashboard/form"!</div>;
}
