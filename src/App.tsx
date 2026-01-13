import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AxisFinance from "./pages/AxisFinance";
import AxisMedia from "./pages/AxisMedia";
import AxisPay from "./pages/AxisPay";
import AxisMarket from "./pages/AxisMarket";
import AxisAcademy from "./pages/AxisAcademy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/axis-finance" element={<AxisFinance />} />
          <Route path="/axis-media" element={<AxisMedia />} />
          <Route path="/axis-pay" element={<AxisPay />} />
          <Route path="/axis-market" element={<AxisMarket />} />
          <Route path="/axis-academy" element={<AxisAcademy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;