export interface ClientBooking {
  id: string;
  spaceId: string;
  spaceName: string;
  spaceImage: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  price: number;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  location: string;
}

export interface ClientInvoice {
  id: string;
  number: string;
  date: string;
  dueDate: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  items: Array<{
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }>;
}

export interface ClientStats {
  upcomingBookings: number;
  totalSpent: number;
  membershipDays: number;
  totalBookings: number;
}