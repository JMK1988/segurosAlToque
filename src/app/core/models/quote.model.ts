export interface QuoteRequest {
  id?: string;
  name: string;
  email: string;
  phone: string;
  insuranceType: string;
  message?: string;
  createdAt: Date | any;
  status: 'new' | 'processing' | 'completed';
}

export interface Producer {
  id?: string;
  name: string;
  specialties: string[];
  contactInfo: {
    phone: string;
    email: string;
  };
}
