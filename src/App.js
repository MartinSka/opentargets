import React from "react";
import { OtUiThemeProvider } from "ot-ui";
import { QueryClient, QueryClientProvider } from "react-query";
import LungCarcioma from "./screens/lung-carcioma";

const queryClient = new QueryClient();

function App() {
  return (
    <OtUiThemeProvider>
      <QueryClientProvider client={queryClient}>
        <LungCarcioma />
      </QueryClientProvider>
    </OtUiThemeProvider>
  );
}

export default App;
