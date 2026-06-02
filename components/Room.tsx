import React from 'react';

interface RoomProps {
  onObjectClick: (section: 'about' | 'experience' | 'projects' | 'skills' | 'achievements' | 'education' | 'contact') => void;
}

const Room: React.FC<RoomProps> = ({ onObjectClick }) => {
  return (
    <div className="relative w-screen h-screen room-bg overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/5 via-transparent to-accent-cyan/5 blur-3xl opacity-50 z-0"></div>

      {/* Desk */}
      <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[70vw] h-[15vh] bg-wood-dark rounded-t-lg border-b-8 border-wood-light shadow-2xl"></div>

      {/* About Me - Avatar/Chair */}
      <div 
        className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-32 h-48 group cursor-pointer"
        onClick={() => onObjectClick('about')}
        title="About Me"
      >
        <div className="absolute bottom-0 w-full h-24 bg-gray-800 rounded-t-full interactive-object"></div>
         <div className="tooltip absolute -top-8 left-1/2 -translate-x-1/2 bg-space-light px-3 py-1 rounded-md text-sm whitespace-nowrap">About Me</div>
      </div>


      {/* Projects - Computer */}
      <div 
        className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-72 h-48 group cursor-pointer"
        onClick={() => onObjectClick('projects')}
        title="My Projects"
      >
        <div className="absolute bottom-0 w-full h-40 bg-black rounded-t-lg border-4 border-gray-700 interactive-object flex items-center justify-center">
            <div className="w-[90%] h-[85%] bg-space-light opacity-75 animate-pulse-glow rounded-md">
                 <p className="text-accent-cyan text-xs p-2">&gt; a_great_project.py</p>
            </div>
        </div>
        <div className="absolute bottom-[-10px] w-[40%] h-3 bg-gray-800 left-1/2 -translate-x-1/2 rounded-b-md"></div>
        <div className="tooltip absolute top-0 left-1/2 -translate-x-1/2 bg-space-light px-3 py-1 rounded-md text-sm whitespace-nowrap">Projects</div>
      </div>

      {/* Skills - Whiteboard/Screen */}
        <div
            className="absolute top-[20%] right-[5%] w-64 h-40 bg-gray-200/90 rounded-lg shadow-2xl p-2 group cursor-pointer interactive-object"
            onClick={() => onObjectClick('skills')}
            title="My Skills"
        >
            <p className="text-black font-mono text-xs">&gt; Python, Flask, FastAPI</p>
            <p className="text-black font-mono text-xs">&gt; RESTful APIs, OAuth</p>
            <p className="text-black font-mono text-xs">&gt; NLP, Machine Learning</p>
            <div className="tooltip absolute -bottom-8 left-1/2 -translate-x-1/2 bg-space-light px-3 py-1 rounded-md text-sm whitespace-nowrap">Skills</div>
        </div>

      {/* Trophies - Shelf */}
      <div className="absolute top-[55%] left-[5%] w-56 h-32 group cursor-pointer"
        onClick={() => onObjectClick('achievements')}
        title="Achievements"
      >
        <div className="absolute bottom-0 w-full h-2 bg-wood-light rounded shadow-lg interactive-object"></div>
        <div className="absolute bottom-2 left-4 w-6 h-8 bg-yellow-400 [clip-path:polygon(0%_100%,_15%_60%,_15%_0%,_85%_0%,_85%_60%,_100%_100%)]"></div>
        <div className="absolute bottom-2 left-16 w-6 h-10 bg-yellow-500 [clip-path:polygon(0%_100%,_15%_60%,_15%_0%,_85%_0%,_85%_60%,_100%_100%)]"></div>
        <div className="tooltip absolute -top-8 left-1/2 -translate-x-1/2 bg-space-light px-3 py-1 rounded-md text-sm whitespace-nowrap">Achievements</div>
      </div>

       {/* Experience & Education - Bookshelf */}
      <div className="absolute bottom-[30%] left-[8%] w-48 h-64 group cursor-pointer"
        onClick={() => onObjectClick('experience')}
        title="Experience"
      >
        <div className="w-full h-full bg-wood-dark rounded-md shadow-2xl p-2 space-y-2 interactive-object">
            <div className="w-full h-10 bg-red-800 rounded"></div>
            <div className="w-full h-10 bg-blue-800 rounded"></div>
            <div className="w-full h-10 bg-green-800 rounded"></div>
             <div className="w-full h-10 bg-purple-800 rounded" onClick={(e) => { e.stopPropagation(); onObjectClick('education'); }}></div>
        </div>
         <div className="tooltip absolute -top-8 left-1/2 -translate-x-1/2 bg-space-light px-3 py-1 rounded-md text-sm whitespace-nowrap">Experience/Education</div>
      </div>

       {/* Contact - Poster */}
        <div
            className="absolute top-[15%] left-[25%] w-32 h-48 bg-gray-500/20 rounded-lg shadow-xl p-2 group cursor-pointer interactive-object transform -rotate-6"
            onClick={() => onObjectClick('contact')}
            title="Contact Me"
        >
            <h3 className="text-center font-bold text-accent-pink">GET IN TOUCH</h3>
             <div className="w-20 h-20 mx-auto mt-2 rounded-full bg-accent-pink/50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>
             </div>
            <div className="tooltip absolute -bottom-8 left-1/2 -translate-x-1/2 bg-space-light px-3 py-1 rounded-md text-sm whitespace-nowrap rotate-6">Contact Me</div>
        </div>


    </div>
  );
};

export default Room;
