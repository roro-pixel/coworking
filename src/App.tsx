// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './client/components/ProtectedRoute';
import { Layout } from './vitrine/components/layout/Layout';
import { Home } from './vitrine/pages/Home';
import { Spaces } from './vitrine/pages/Spaces';
import { SpaceDetail } from './vitrine/pages/SpaceDetail';
import { Subscriptions } from './vitrine/pages/Subscriptions';
import { Contact } from './vitrine/pages/Contact';
import { About } from './vitrine/pages/About';
import { Login } from './vitrine/pages/Login';
import { Register } from './vitrine/pages/Register';

// Imports client
import { ClientDashboard } from './client/pages/Dashboard';
import { ClientBookings } from './client/pages/Bookings';
import { ClientUpcoming } from './client/pages/Upcoming';
import { ClientInvoices } from './client/pages/Invoices';
import { ClientProfile } from './client/pages/Profile';
import { ClientSettings } from './client/pages/Settings';
import { ClientPayments } from './client/pages/Payments';
import { ClientSupport } from './client/pages/Support';

import { ScrollToTop } from './vitrine/components/ScrollToTop';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/espaces" element={<Layout><Spaces /></Layout>} />
            <Route path="/espaces/:id" element={<Layout><SpaceDetail /></Layout>} />
            <Route path="/abonnements" element={<Layout><Subscriptions /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/a-propos" element={<Layout><About /></Layout>} />

            <Route path="/client/dashboard" element={
              <ProtectedRoute>
                <ClientDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/client/bookings" element={
              <ProtectedRoute>
                <ClientBookings />
              </ProtectedRoute>
            } />
            
            <Route path="/client/upcoming" element={
              <ProtectedRoute>
                <ClientUpcoming />
              </ProtectedRoute>
            } />
            
            <Route path="/client/invoices" element={
              <ProtectedRoute>
                <ClientInvoices />
              </ProtectedRoute>
            } />
            
            <Route path="/client/profile" element={
              <ProtectedRoute>
                <ClientProfile />
              </ProtectedRoute>
            } />
            
            <Route path="/client/settings" element={
              <ProtectedRoute>
                <ClientSettings />
              </ProtectedRoute>
            } />
            
            <Route path="/client/payments" element={
              <ProtectedRoute>
                <ClientPayments />
              </ProtectedRoute>
            } />
            
            <Route path="/client/support" element={
              <ProtectedRoute>
                <ClientSupport />
              </ProtectedRoute>
            } />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;