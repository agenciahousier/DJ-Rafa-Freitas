export interface Guest {
  id: string;
  name: string;
  date: string;
  time: string;
  genre: string;
  soundcloudUrl: string;
  youtubeUrl: string;
  description: string;
  tracklist?: string[];
}

export interface LinkItem {
  id: string;
  name: string;
  iconName: 'Instagram' | 'Phone' | 'Youtube' | 'Music' | 'Mail';
  url: string;
  color: string;
  glowColor: string;
}
