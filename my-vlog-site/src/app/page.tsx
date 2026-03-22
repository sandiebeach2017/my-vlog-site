import VideoCard from './components/VideoCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* NAVIGATION BAR */}
      <nav className="p-6 max-w-7xl mx-auto flex justify-between items-center">
        <img src="/ichuz2blogo.png" alt="I CHUZ 2 B Logo" className="h-16 w-auto rounded-lg shadow-sm" />
        <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest text-purple-900">
          <a href="/articles" className="hover:text-amber-500 transition-colors">Career</a>
          <a href="/articles" className="hover:text-amber-500 transition-colors">Life</a>
          <a href="/articles" className="hover:text-amber-500 transition-colors">Growth</a>
          <a href="/about" className="hover:text-amber-500 transition-colors">About</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* Banner Image */}
        <img 
          src="/mybackground.jpg" 
          alt="I CHUZ 2 B Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-purple-900/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-lg mb-4">
            I CHUZ 2 B
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-medium tracking-wide uppercase">
            Career • Life • Growth
          </p>
        </div>
      </header>

      {/* INTRO VIDEO SECTION */}
      <section className="max-w-3xl mx-auto px-6 pb-12 text-center">
        <VideoCard
          category="Intro"
          title="Welcome to My Channel!"
          thumbnail="https://i.ytimg.com/vi/YOUR_VIDEO_ID/hqdefault.jpg"
          description="Here you'll find stories, tips, and resources for balancing caregiving and career growth. Dive in and join our supportive community!"
        />
      </section>

      {/* VIDEO GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Latest Episodes</h2>
            <p className="text-slate-500">Updated every Tuesday</p>
          </div>
          <button className="text-teal-600 font-semibold border-b-2 border-teal-600">View Channel</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <VideoCard 
            category="Intro"
            title="Welcome to My Channel!"
            thumbnail="https://i.ytimg.com/vi/YOUR_VIDEO_ID/hqdefault.jpg"
          />
          <VideoCard 
            category="Career"
            title="How to handle resume gaps while caregiving"
            thumbnail="https://images.unsplash.com/photo-1484807350389-2323ed30c51a?w=800&q=80"
          />
          <VideoCard 
            category="Growth"
            title="The 5 AM routine that saved my sanity"
            thumbnail="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
          />
          <VideoCard 
            category="Caregiving"
            title="Setting boundaries with family members"
            thumbnail="https://images.unsplash.com/photo-1516307362428-37436224a1e8?w=800&q=80"
          />
        </div>
      </section>

      {/* RESOURCE SECTION CARD */}
      <section className="bg-purple-900 text-white py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <img src="/ichuz2blogo.png" alt="Logo" className="h-20 w-auto mx-auto mb-6 rounded-full border-4 border-amber-400" />
          <h2 className="text-3xl font-bold mb-4">Start Your Transformation</h2>
          <p className="text-purple-200 mb-8">Download our free 'Pivoting with Purpose' guide for caregivers and career changers.</p>
          <button className="bg-amber-400 hover:bg-amber-300 text-purple-900 font-black py-4 px-10 rounded-full transition-all uppercase tracking-widest shadow-lg">
            Get The Resources
          </button>
        </div>
      </section>

      {/* RESOURCE GRID */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-100">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">Free Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-teal-50 rounded-3xl border border-teal-100">
            <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Career</span>
            <h3 className="text-xl font-bold mt-4">Resume Gap Guide</h3>
            <p className="text-slate-600 mt-2">A template for caregivers returning to the workforce.</p>
            <button className="mt-6 font-bold text-teal-700">Download PDF →</button>
          </div>
          <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100">
            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Growth</span>
            <h3 className="text-xl font-bold mt-4">Boundaries Checklist</h3>
            <p className="text-slate-600 mt-2">How to say no without the caregiver guilt.</p>
            <button className="mt-6 font-bold text-amber-700">Download PDF →</button>
          </div>
        </div>
      </section>
    </div>
  );
}

