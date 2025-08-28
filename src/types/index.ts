export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'staff' | 'member';
  gym_id?: string;
  avatar?: string;
  created_at: Date;
  updated_at: Date;
}

export interface Gym {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  owner_id: string;
  subscription_plan: 'basic' | 'pro' | 'enterprise';
  member_count: number;
  created_at: Date;
  updated_at: Date;
}

export interface Member {
  id: string;
  gym_id: string;
  email: string;
  name: string;
  phone: string;
  emergency_contact: string;
  membership_type: string;
  membership_status: 'active' | 'inactive' | 'suspended';
  join_date: Date;
  last_visit: Date;
  total_visits: number;
  avatar?: string;
  billing_info: BillingInfo;
  health_info?: HealthInfo;
  created_at: Date;
  updated_at: Date;
}

export interface BillingInfo {
  amount: number;
  billing_cycle: 'monthly' | 'annual';
  next_billing_date: Date;
  payment_method: string;
  status: 'active' | 'past_due' | 'cancelled';
}

export interface HealthInfo {
  fitness_goals: string[];
  medical_conditions: string[];
  emergency_contact: string;
  trainer_notes?: string;
}

export interface Class {
  id: string;
  gym_id: string;
  name: string;
  description: string;
  instructor_id: string;
  instructor_name: string;
  room: string;
  capacity: number;
  enrolled_count: number;
  schedule: ClassSchedule[];
  price: number;
  duration: number; // in minutes
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  equipment_needed: string[];
  created_at: Date;
  updated_at: Date;
}

export interface ClassSchedule {
  id: string;
  class_id: string;
  day_of_week: number; // 0-6
  start_time: string; // HH:MM
  end_time: string; // HH:MM
  recurring: boolean;
  specific_date?: Date;
}

export interface Instructor {
  id: string;
  gym_id: string;
  name: string;
  email: string;
  phone: string;
  specialties: string[];
  certifications: string[];
  bio: string;
  hourly_rate: number;
  avatar?: string;
  availability: InstructorAvailability[];
  rating: number;
  total_classes: number;
  created_at: Date;
  updated_at: Date;
}

export interface InstructorAvailability {
  day: number; // 0-6
  start_time: string;
  end_time: string;
}

export interface Equipment {
  id: string;
  gym_id: string;
  name: string;
  category: string;
  brand: string;
  model: string;
  serial_number: string;
  purchase_date: Date;
  warranty_expiry: Date;
  status: 'working' | 'maintenance' | 'broken' | 'retired';
  location: string;
  last_maintenance: Date;
  next_maintenance: Date;
  maintenance_notes: string[];
  cost: number;
  created_at: Date;
  updated_at: Date;
}

export interface MaintenanceRecord {
  id: string;
  equipment_id: string;
  type: 'routine' | 'repair' | 'inspection';
  description: string;
  cost: number;
  technician: string;
  date: Date;
  next_service_due?: Date;
  parts_replaced?: string[];
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
}

export interface Analytics {
  gym_id: string;
  period: 'daily' | 'weekly' | 'monthly' | 'yearly';
  date: Date;
  metrics: {
    member_visits: number;
    new_members: number;
    cancelled_members: number;
    revenue: number;
    class_attendance: number;
    equipment_usage: EquipmentUsage[];
    peak_hours: PeakHour[];
    member_retention_rate: number;
    avg_session_duration: number;
  };
}

export interface EquipmentUsage {
  equipment_id: string;
  equipment_name: string;
  usage_count: number;
  peak_usage_time: string;
}

export interface PeakHour {
  hour: number;
  member_count: number;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  read: boolean;
  action_url?: string;
  created_at: Date;
}

export interface WorkoutSession {
  id: string;
  member_id: string;
  gym_id: string;
  start_time: Date;
  end_time?: Date;
  exercises: Exercise[];
  calories_burned?: number;
  notes?: string;
  trainer_id?: string;
}

export interface Exercise {
  id: string;
  name: string;
  category: string;
  sets?: Set[];
  duration?: number; // in minutes
  distance?: number; // in km
  calories?: number;
}

export interface Set {
  weight: number;
  reps: number;
  rest_time?: number; // in seconds
}