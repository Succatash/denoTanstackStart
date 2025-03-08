import { Calendar, Home, Inbox, Plus, Search, Settings } from "lucide-react";

import { Link } from "@tanstack/react-router";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.tsx";
import { ModeToggle } from "@/components/mode-toggle.tsx";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard/form",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/dashboard/$title",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/dashboard",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/dashboard/form",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus
              onClick={() => {
                items.push({ title: "Hardcoded", url: "#", icon: Home });
                console.log("Added item");
              }}
            />
            <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>AI Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <span className="mx-auto">
          <ModeToggle />
        </span>
      </SidebarContent>
    </Sidebar>
  );
}
