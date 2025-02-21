import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

const supabaseUrl = Constants.expoConfig?.extra?.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = Constants.expoConfig?.extra?.EXPO_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  full_name: string;
  phone_number: string;
  role: 'user' | 'admin';
  created_at: string;
  updated_at: string;
};

export type Organization = {
  id: string;
  name: string;
  address: string;
  contact_person: string;
  phone_number: string;
  document_url?: string;
  status: 'pending' | 'approved' | 'rejected';
  user_id: string;
  created_at: string;
  updated_at: string;
};

export type WasteSubmission = {
  id: string;
  user_id: string;
  organization_id: string;
  waste_type: string;
  quantity: number;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
};