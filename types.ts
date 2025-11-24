import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  type: 'Metálica' | 'Concreto' | 'Mista' | 'Madeira';
  status: 'Em Andamento' | 'Concluído' | 'Planejamento' | 'Fabricação' | 'Montagem';
  progress: number;
  date: string;
  image: string;
  description?: string;
  budget?: string;
}

export interface Metric {
  label: string;
  value: string;
  trend: string;
  positive: boolean;
  icon: LucideIcon;
}

export interface Appointment {
  id: string;
  title: string;
  time: string;
  date: string; // YYYY-MM-DD
  type: 'Reunião' | 'Visita Técnica' | 'Entrega' | 'Montagem';
  location?: string;
}

export interface Client {
  id: string;
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  avatar: string;
  activeProjects: number;
  totalSpent: string;
  status: 'Ativo' | 'Inativo';
}