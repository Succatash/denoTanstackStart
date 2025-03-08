import { createFileRoute, useParams } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/about/$postId")(
  {
    component: RouteComponent,
  },
);

function RouteComponent() {
  const { postId }: number = useParams({ strict: false });

  useEffect(() => {
    document.title = `Post ${postId}`; // Set the dynamic title
  }, [postId]);

  return <div>Hello {postId}</div>;
}
