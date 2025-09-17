-- Create refund_requests table in Supabase
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE refund_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Applicant Information
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,

  -- Payment Information
  transaction_id TEXT NOT NULL,
  payment_date DATE NOT NULL,
  amount_paid TEXT NOT NULL,

  -- Refund Details
  refund_reason TEXT NOT NULL,

  -- Bank Information
  account_name TEXT NOT NULL,
  account_number TEXT NOT NULL,
  bank_name TEXT NOT NULL,
  bank_address TEXT NOT NULL,
  sort_code TEXT NOT NULL,
  iban TEXT,
  swift_code TEXT,

  -- Declaration
  signature TEXT NOT NULL,
  signature_date DATE NOT NULL,

  -- Status tracking
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'approved', 'rejected', 'completed')),
  admin_notes TEXT,
  processed_by UUID REFERENCES auth.users(id),
  processed_at TIMESTAMP WITH TIME ZONE
);

-- Create index for better query performance
CREATE INDEX idx_refund_requests_email ON refund_requests(email);
CREATE INDEX idx_refund_requests_status ON refund_requests(status);
CREATE INDEX idx_refund_requests_created_at ON refund_requests(created_at);
CREATE INDEX idx_refund_requests_transaction_id ON refund_requests(transaction_id);

-- Enable Row Level Security (RLS)
ALTER TABLE refund_requests ENABLE ROW LEVEL SECURITY;

-- Create policies for RLS
-- Allow users to insert their own refund requests
CREATE POLICY "Users can insert refund requests" ON refund_requests
  FOR INSERT WITH CHECK (true);

-- Allow users to view their own refund requests (based on email)
CREATE POLICY "Users can view own refund requests" ON refund_requests
  FOR SELECT USING (email = auth.jwt() ->> 'email');

-- Allow admin users to view and update all refund requests
-- Note: You'll need to create an admin role or use a different approach for admin access
CREATE POLICY "Admins can view all refund requests" ON refund_requests
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.email IN ('admin@britishauc.com', 'sports@britishauc.com')
    )
  );

-- Create function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_refund_requests_updated_at
  BEFORE UPDATE ON refund_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create a view for admin dashboard
CREATE VIEW refund_requests_summary AS
SELECT
  id,
  full_name,
  email,
  transaction_id,
  amount_paid,
  status,
  created_at,
  refund_reason
FROM refund_requests
ORDER BY created_at DESC;
