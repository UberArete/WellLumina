export interface Provider {
  id: number;
  name: string;
  title: string;
  image: string;
  availability: string;
  vibe: number; // 0 to 100 (Gentle to Direct)
  tags: string[];
  location: string;
  verified: boolean;
}

export interface FilterState {
  searchQuery: string;
  activeTags: string[];
  virtualOnly: boolean;
  inPersonOnly: boolean;
  emdriaCertified: boolean;
}

export const TAGS = ['CPTSD', 'Panic Attacks', 'Childhood Trauma', 'Grief', 'Phobias', 'Sexual Trauma', 'Attachment', 'Veterans', 'Body Work', 'Sleep'];
