import { ReactNode, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx";
import { AppSidebar } from "@/components/app-sidebar.tsx";


export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [{ title: "Dashboard Page" }],
  }),
  component: DashComponent,
});
function DashComponent({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <AppSidebar />
        <main>
          <div className="flex flex-row justify-center items-center space-x-2">
            {/* TODO: Add a custom trigger button with custom Icons */}
            <SidebarTrigger /> {open
              ? <p className="text-xs">Close Sidebar</p>
              : <p className="text-xs">Open Sidebar</p>}
          </div>
          {children}
        </main>
      
      </SidebarProvider>
    </>
  );
}
