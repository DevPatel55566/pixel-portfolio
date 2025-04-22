
import React from 'react';

interface Skill {
  name: string;
  icon: string;
}

const languages: Skill[] = [
  { name: 'Python', icon: '🐍' },
  { name: 'Java', icon: '☕' },
  { name: 'C#', icon: '🎯' },
  { name: 'C', icon: '⚙️' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'SQL', icon: '🗃️' },
];

const web: Skill[] = [
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Angular', icon: '🅰️' },
  { name: 'Ionic', icon: '📱' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express.js', icon: '🚂' },
  { name: 'RESTful APIs', icon: '🔌' },
  { name: 'Vite', icon: '⚡' },
];

const database: Skill[] = [
  { name: 'MySQL', icon: '🐬' },
  { name: 'Oracle', icon: '☁️' },
  { name: 'SQLite', icon: '📊' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Supabase', icon: '⚡' },
  { name: 'Firebase', icon: '🔥' },
];

const devops: Skill[] = [
  { name: 'Git', icon: '🔄' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'JIRA', icon: '📋' },
  { name: 'NetBeans', icon: '🧰' },
  { name: 'Vercel', icon: '▲' },
  { name: 'ngrok', icon: '🔗' },
  { name: 'Okta', icon: '🔒' },
  { name: 'Kubernetes', icon: '🚢' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Google Cloud', icon: '☁️' },
  { name: 'Azure', icon: '☁️' },
];

const SkillGroup = ({ title, skills }: { title: string, skills: Skill[] }) => (
  <div>
    <h3 className="font-pixel text-lg text-pixel-primary mb-2">{title}</h3>
    <div className="flex flex-wrap gap-4 pb-4">
      {skills.map(skill => (
        <div className="pixel-card bg-white border-pixel-primary flex items-center gap-2 px-4 py-2 font-game text-gray-900" key={skill.name}>
          <span className="text-xl">{skill.icon}</span>
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const PixelSkills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="game-container">
        <div className="text-center mb-8">
          <h2 className="font-pixel text-3xl mb-2 text-pixel-primary">Skills</h2>
          <div className="w-20 h-1 bg-pixel-accent mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <SkillGroup title="Programming Languages" skills={languages} />
          <SkillGroup title="Web Development" skills={web} />
          <SkillGroup title="Databases" skills={database} />
          <SkillGroup title="DevOps & Tools" skills={devops} />
        </div>
      </div>
    </section>
  );
};

export default PixelSkills;
