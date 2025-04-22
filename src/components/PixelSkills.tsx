
import React, { useState } from 'react';

interface Skill {
  name: string;
  category: 'languages' | 'web' | 'database' | 'devops';
  level: number;
  icon: string;
}

const PixelSkills: React.FC = () => {
  // Skills categories as game inventory
  const [activeCategory, setActiveCategory] = useState<'languages' | 'web' | 'database' | 'devops'>('languages');
  
  const skills: Record<string, Skill[]> = {
    languages: [
      { name: 'Python', category: 'languages', level: 90, icon: '🐍' },
      { name: 'Java', category: 'languages', level: 85, icon: '☕' },
      { name: 'C#', category: 'languages', level: 80, icon: '🎯' },
      { name: 'C', category: 'languages', level: 75, icon: '⚙️' },
      { name: 'JavaScript', category: 'languages', level: 85, icon: '📜' },
      { name: 'TypeScript', category: 'languages', level: 80, icon: '🔷' },
      { name: 'SQL', category: 'languages', level: 85, icon: '🗃️' },
    ],
    web: [
      { name: 'HTML5', category: 'web', level: 90, icon: '🌐' },
      { name: 'CSS3', category: 'web', level: 85, icon: '🎨' },
      { name: 'React', category: 'web', level: 85, icon: '⚛️' },
      { name: 'Angular', category: 'web', level: 80, icon: '🅰️' },
      { name: 'Ionic', category: 'web', level: 75, icon: '📱' },
      { name: 'Node.js', category: 'web', level: 80, icon: '🟢' },
      { name: 'Express.js', category: 'web', level: 75, icon: '🚂' },
      { name: 'RESTful APIs', category: 'web', level: 85, icon: '🔌' },
      { name: 'Vite', category: 'web', level: 70, icon: '⚡' },
    ],
    database: [
      { name: 'MySQL', category: 'database', level: 85, icon: '🐬' },
      { name: 'Oracle', category: 'database', level: 80, icon: '☁️' },
      { name: 'SQLite', category: 'database', level: 75, icon: '📊' },
      { name: 'MongoDB', category: 'database', level: 80, icon: '🍃' },
      { name: 'PostgreSQL', category: 'database', level: 80, icon: '🐘' },
      { name: 'Supabase', category: 'database', level: 75, icon: '⚡' },
      { name: 'Firebase', category: 'database', level: 75, icon: '🔥' },
    ],
    devops: [
      { name: 'Git', category: 'devops', level: 85, icon: '🔄' },
      { name: 'GitHub', category: 'devops', level: 85, icon: '🐙' },
      { name: 'JIRA', category: 'devops', level: 80, icon: '📋' },
      { name: 'NetBeans', category: 'devops', level: 75, icon: '🧰' },
      { name: 'Vercel', category: 'devops', level: 75, icon: '▲' },
      { name: 'ngrok', category: 'devops', level: 70, icon: '🔗' },
      { name: 'Okta', category: 'devops', level: 70, icon: '🔒' },
      { name: 'Kubernetes', category: 'devops', level: 75, icon: '🚢' },
      { name: 'AWS', category: 'devops', level: 80, icon: '☁️' },
      { name: 'Google Cloud', category: 'devops', level: 75, icon: '☁️' },
      { name: 'Azure', category: 'devops', level: 75, icon: '☁️' },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="game-container">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-3xl mb-2 text-pixel-primary">SKILL TREE</h2>
          <div className="w-20 h-1 bg-pixel-accent mx-auto"></div>
          <p className="font-game text-lg mt-4 text-gray-600">Select a category to view skills</p>
        </div>
        
        {/* Category Selector (Inventory Tabs) */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              className={`pixel-button ${activeCategory === category ? 'bg-pixel-highlight' : 'bg-pixel-primary'}`}
              onClick={() => setActiveCategory(category as any)}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>
        
        {/* Skills Display (Inventory Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[activeCategory].map((skill) => (
            <div key={skill.name} className="pixel-card bg-white">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{skill.icon}</span>
                <h3 className="font-game text-xl">{skill.name}</h3>
              </div>
              
              <div className="pixel-progress-bar">
                <div 
                  className="pixel-progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right mt-1 font-pixel text-xs">LVL {skill.level}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#projects" className="inline-block pixel-button">
            NEXT LEVEL: PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
};

export default PixelSkills;
