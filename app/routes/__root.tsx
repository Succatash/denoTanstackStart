import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import appCss from "../../styles/app.css?url";
import { ThemeProvider } from "@/components/theme-provider.tsx";

export const Route = createRootRoute({
  head: () => ({
    scripts: [
      { src: "https://unpkg.com/react-scan/dist/auto.global.js" },
      {
        children: `import RefreshRuntime from "/_build/@react-refresh";
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true;
`,
        type: "module",
        async: true,
      },
      {
        children: `(function() {
            const storedTheme = localStorage.getItem('vite-ui-theme');
            if (storedTheme === 'dark' || (!storedTheme && 'dark' === 'dark')) { //handle first time load, if there is nothing in localstorage.
                document.documentElement.classList.add('dark');
            } else if (storedTheme === 'light'){
                document.documentElement.classList.add('light');
            } else if (storedTheme === 'system'){
                 const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                 document.documentElement.classList.add(systemTheme)
            }
        })()`,
      },
    ],
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Root-page",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
});

export function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

export default function RootDocument({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  //   const [lang, setLang] = useState<string>("en");
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <head>
        <HeadContent />
      </head>
      <ThemeProvider defaultTheme="dark">
        <body>
          {children}
          <Scripts />
        </body>
      </ThemeProvider>
    </html>
  );
}
