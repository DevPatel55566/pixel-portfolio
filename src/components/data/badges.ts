export interface Badge {
    id: string;
    name: string;
    description: string;
    icon: string;
  }
  
  export const badges: Badge[] = [
    {
      id: 'explorer',
      name: 'Explorer',
      description: 'Discovered the project list',
      icon: 'Zap'
    },
    {
      id: 'helper',
      name: 'Command Master',
      description: 'Found the help command',
      icon: 'Award'
    },
    {
      id: 'opener',
      name: 'Project Opener',
      description: 'Opened your first project',
      icon: 'Award'
    },
    {
      id: 'ai_master',
      name: 'AI Enthusiast',
      description: 'Explored an AI project',
      icon: 'Zap'
    },
    {
      id: 'career_explorer',
      name: 'Career Pioneer',
      description: 'Explored the career simulator',
      icon: 'Zap'
    },
    {
      id: 'collector',
      name: 'Badge Collector',
      description: 'Checked your badge collection',
      icon: 'Gift'
    },
    {
      id: 'discoverer',
      name: 'Secret Finder',
      description: 'Discovered a hidden command',
      icon: 'Gift'
    }
  ];
  