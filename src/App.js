import React from "react";
import Counter from "./Counter";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Counter />
      </div>
    </QueryClientProvider>
  );
};

export default App;
