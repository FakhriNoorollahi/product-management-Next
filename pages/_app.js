import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        toastOptions={{
          style: {
            textAlign: "left",
          },
        }}
      />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
