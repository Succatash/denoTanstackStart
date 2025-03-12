import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/about/$postId")(
  {
    component: RouteComponent,
  },
);

function RouteComponent() {
  const { postId } = Route.useParams();

  useEffect(() => {
    document.title = `Post ${postId}`; // Set the dynamic title
  }, [postId]);

  return <div>Hello {postId}</div>;
}
