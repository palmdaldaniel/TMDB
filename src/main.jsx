import React from "react";
import { createRoot } from 'react-dom/client';

import App from "./App";
import "./App.scss";
import QueryContextProvider from "./contexts/QueryContextProvider";

import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 2, // 2 minutes
      cacheTime: 1000 * 60 * 60 * 2, // 2 hours
    },
  },
});


const container = document.getElementById('root');

const root = createRoot(container);
root.render(<React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <QueryContextProvider>
        <App />
      </QueryContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </BrowserRouter>
  </QueryClientProvider>
</React.StrictMode>);



