import { createFileRoute } from "@tanstack/react-router";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { LoginForm } from "@/components/login-form.tsx";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <p>
          {/* TODO:pathless route navbar*/}
          NavBar
        </p>
        <ModeToggle />
      </div>
      <LoginForm />
    </div>
  );
}
