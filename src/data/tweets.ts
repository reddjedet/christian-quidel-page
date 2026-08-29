export interface Tweet {
  id: string;
  author: {
    name: string;
    handle: string;
    avatarUrl?: string;
    verified: boolean;
  };
  date: string;
  category: 'MLOps' | 'Data Science' | 'Salud & Antifragilidad' | 'Cloud & DevOps';
  content: string;
  hashtags: string[];
  metrics: {
    replies: number;
    retweets: number;
    likes: number;
  };
  tweetUrl: string;
  featured?: boolean;
}

export interface Tweet {
  id: string;
  author: {
    name: string;
    handle: string;
    avatarUrl?: string;
    verified: boolean;
  };
  date: string;
  category: 'MLOps' | 'Data Science' | 'Salud & Antifragilidad' | 'Cloud & DevOps';
  content: string;
  hashtags: string[];
  metrics: {
    replies: number;
    retweets: number;
    likes: number;
  };
  tweetUrl: string;
  featured?: boolean;
}

/**
 * Fuente de datos de tweets y microblogging.
 * Cuando publiques tweets en https://x.com/CDanqui, puedes agregarlos aquí para que aparezcan en tu web.
 */
export const tweetsData: Tweet[] = [];


