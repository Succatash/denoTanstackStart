import { createFileRoute } from "@tanstack/react-router";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert.tsx";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [{ title: "About Page" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Alert variant="destructive">
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
      </Alert>
      <div>
        This is using file based routing with folders which seems easier then
        just having a billion route folders
      </div>
    </>
  );
}
