export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  videoPreview?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  videoBg: string;
}

export interface Client {
  id: number;
  name: string;
  logo: string;
}

export type CursorType = 'default' | 'hover' | 'text' | 'hidden';

export interface CursorContextType {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
}
