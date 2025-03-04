import { createFileRoute } from "@tanstack/react-router";
import { ModeToggle } from "@/components/mode-toggle.tsx";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <p>
          NavBar
        </p>
        <ModeToggle />
      </div>
      <div>Welcome</div>
    </div>
  );
}
