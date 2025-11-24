import { 
  LayoutDashboard, 
  FolderOpen, 
  Users, 
  Calendar, 
  Briefcase, 
  Settings,
  HardHat,
  TrendingUp,
  Clock
} from 'lucide-react';
import { NavItem, Project, Metric, Appointment, Client } from './types';

export const USER_PROFILE = {
  name: "Jucelia Santana",
  role: "Engenheira Civil",
  specialty: "Especialista em Estruturas Metálicas",
  avatar: "https://i.pravatar.cc/150?u=jucelia"
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Visão Geral', icon: LayoutDashboard },
  { id: 'projects', label: 'Projetos', icon: FolderOpen },
  { id: 'clients', label: 'Clientes', icon: Users },
  { id: 'calendar', label: 'Agenda', icon: Calendar },
  { id: 'portfolio', label: 'Portfólio', icon: Briefcase },
  { id: 'settings', label: 'Configurações', icon: Settings },
];

export const KPIS: Metric[] = [
  { label: 'Projetos Ativos', value: '12', trend: '+2 este mês', positive: true, icon: HardHat },
  { label: 'Entregas Pendentes', value: '3', trend: 'Próxima: 2 dias', positive: false, icon: Clock },
  { label: 'Novos Clientes', value: '8', trend: '+15% vs mês ant.', positive: true, icon: TrendingUp },
];

export const RECENT_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Galpão Industrial Alpha',
    client: 'Logística Brasil',
    location: 'São Paulo, SP',
    type: 'Metálica',
    status: 'Montagem',
    progress: 75,
    date: '20 Out, 2023',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
    description: 'Estrutura metálica de grande porte para centro logístico, vão livre de 40m.',
    budget: 'R$ 1.2M'
  },
  {
    id: '2',
    title: 'Residência Villa Verde',
    client: 'Carlos Almeida',
    location: 'Campinas, SP',
    type: 'Mista',
    status: 'Planejamento',
    progress: 15,
    date: '22 Out, 2023',
    image: 'https://images.unsplash.com/photo-1600596542815-e32c8ec22dc2?q=80&w=800&auto=format&fit=crop',
    description: 'Residência alto padrão com estrutura mista de concreto aparente e aço corten.',
    budget: 'R$ 850k'
  },
  {
    id: '3',
    title: 'Edifício Comercial Center',
    client: 'Construtora Ramos',
    location: 'Curitiba, PR',
    type: 'Concreto',
    status: 'Em Andamento',
    progress: 45,
    date: '25 Out, 2023',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop',
    description: 'Edifício de 12 andares em concreto armado protendido.',
    budget: 'R$ 15M'
  },
  {
    id: '4',
    title: 'Pergolado Gourmet',
    client: 'Ana Souza',
    location: 'Vinhedo, SP',
    type: 'Madeira',
    status: 'Concluído',
    progress: 100,
    date: '10 Out, 2023',
    image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=800&auto=format&fit=crop',
    description: 'Estrutura em madeira laminada colada (MLC) para área gourmet.',
    budget: 'R$ 45k'
  },
  {
    id: '5',
    title: 'Mezanino Shopping Norte',
    client: 'Grupo Multiplan',
    location: 'Rio de Janeiro, RJ',
    type: 'Metálica',
    status: 'Fabricação',
    progress: 30,
    date: '05 Nov, 2023',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    description: 'Ampliação de área locável com estrutura metálica leve.',
    budget: 'R$ 320k'
  },
  {
    id: '6',
    title: 'Passarela de Pedestres',
    client: 'Prefeitura Municipal',
    location: 'Osasco, SP',
    type: 'Metálica',
    status: 'Concluído',
    progress: 100,
    date: '15 Set, 2023',
    image: 'https://images.unsplash.com/photo-1544985365-d04b663b6326?q=80&w=800&auto=format&fit=crop',
    description: 'Passarela estaiada com estrutura tubular.',
    budget: 'R$ 2.1M'
  }
];

export const AGENDA: Appointment[] = [
  { id: '1', title: 'Reunião com Construtora Ramos', time: '09:00', date: '2023-11-20', type: 'Reunião', location: 'Escritório Central' },
  { id: '2', title: 'Visita Técnica - Galpão Alpha', time: '14:30', date: '2023-11-20', type: 'Visita Técnica', location: 'Canteiro de Obras' },
  { id: '3', title: 'Entrega Projeto Executivo', time: '17:00', date: '2023-11-20', type: 'Entrega', location: 'Online' },
  { id: '4', title: 'Medição Obra Villa Verde', time: '10:00', date: '2023-11-21', type: 'Visita Técnica', location: 'Campinas' },
  { id: '5', title: 'Almoço com Fornecedor de Aço', time: '12:30', date: '2023-11-22', type: 'Reunião', location: 'Restaurante Coco Bambu' },
  { id: '6', title: 'Início Montagem Mezanino', time: '08:00', date: '2023-11-23', type: 'Montagem', location: 'Shopping Norte' },
];

export const CLIENTS: Client[] = [
  {
    id: '1',
    name: 'Roberto Mendes',
    company: 'Logística Brasil',
    role: 'Diretor de Operações',
    email: 'roberto@logisticabrasil.com',
    phone: '(11) 99988-7766',
    avatar: 'https://i.pravatar.cc/150?u=roberto',
    activeProjects: 2,
    totalSpent: 'R$ 3.5M',
    status: 'Ativo'
  },
  {
    id: '2',
    name: 'Fernanda Lima',
    company: 'Construtora Ramos',
    role: 'Gerente de Projetos',
    email: 'fernanda@cramos.com.br',
    phone: '(41) 98877-6655',
    avatar: 'https://i.pravatar.cc/150?u=fernanda',
    activeProjects: 1,
    totalSpent: 'R$ 15M',
    status: 'Ativo'
  },
  {
    id: '3',
    name: 'Carlos Almeida',
    company: 'Particular',
    role: 'Proprietário',
    email: 'carlos.almeida@gmail.com',
    phone: '(19) 97766-5544',
    avatar: 'https://i.pravatar.cc/150?u=carlos',
    activeProjects: 1,
    totalSpent: 'R$ 850k',
    status: 'Ativo'
  },
  {
    id: '4',
    name: 'Juliana Paes',
    company: 'Grupo Multiplan',
    role: 'Arquiteta Coordenadora',
    email: 'jpaes@multiplan.com',
    phone: '(21) 96655-4433',
    avatar: 'https://i.pravatar.cc/150?u=juliana',
    activeProjects: 1,
    totalSpent: 'R$ 320k',
    status: 'Ativo'
  },
  {
    id: '5',
    name: 'Marcos Souza',
    company: 'Prefeitura Municipal',
    role: 'Secretário de Obras',
    email: 'obras@osasco.sp.gov.br',
    phone: '(11) 3654-3210',
    avatar: 'https://i.pravatar.cc/150?u=marcos',
    activeProjects: 0,
    totalSpent: 'R$ 2.1M',
    status: 'Inativo'
  }
];

export const CHART_DATA = [
  { name: 'Metálica', value: 45, fill: '#8b5cf6' }, // violet-500
  { name: 'Concreto', value: 30, fill: '#c4b5fd' }, // violet-300
  { name: 'Madeira', value: 15, fill: '#ddd6fe' }, // violet-200
  { name: 'Mista', value: 10, fill: '#ede9fe' },   // violet-100
];