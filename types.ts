
export enum Tab {
  HOME = 'home',
  MANUAL = 'manual',
  POOL = 'pool',
  LOCATION = 'location',
  TOURISM = 'tourism',
  CONTACT = 'contact'
}

export interface ServiceItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  videoUrl?: string;
  details?: string;
}

export interface TouristSpot {
  id: string;
  name: string;
  description: string;
  distance: string;
  imageUrl: string;
  link?: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
