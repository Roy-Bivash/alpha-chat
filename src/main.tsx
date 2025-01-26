import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@/providers/theme-provider";

import { Router } from "@/router/Router";
import { Toaster } from "@/components/ui/toaster";

import "@/css/App.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>,
);
