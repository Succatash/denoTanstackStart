import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/components/login-form.tsx";
import { Bot } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_mainLayout/login")({
  component: LoginComponent,
});

function LoginComponent() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6 font-medium items-center">
        <Link from="/" to="/register" className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Bot className="size-4" />
          </div>
          Project 972
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}
