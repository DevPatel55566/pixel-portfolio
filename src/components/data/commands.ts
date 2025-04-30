import { Badge, badges} from './badges';

export interface Command {
  command: string;
  description: string;
  badgeId?: string;
  badge?: Badge;
}

export const commands: Command[] = [
  {
    command: 'ls',
    description: 'List all available projects',
    badgeId: 'explorer',
    badge: badges.find(b => b.id === 'explorer')
  },
  {
    command: 'open [name/id]',
    description: 'Open a specific project',
    badgeId: 'opener',
    badge: badges.find(b => b.id === 'opener')
  },
  {
    command: 'clear',
    description: 'Clear the terminal screen'
  },
  {
    command: 'help',
    description: 'Show available commands',
    badgeId: 'helper',
    badge: badges.find(b => b.id === 'helper')
  },
  {
    command: 'badges',
    description: 'Show earned badges',
    badgeId: 'collector',
    badge: badges.find(b => b.id === 'collector')
  },
  {
    command: 'secret',
    description: 'Find the hidden command',
    badgeId: 'discoverer',
    badge: badges.find(b => b.id === 'discoverer')
  }
];
