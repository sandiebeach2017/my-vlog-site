import VideoCard from './components/VideoCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* NAVIGATION BAR */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <img src="/ichuz2blogo.png" alt="I CHUZ 2 B! Logo" className="h-10 w-10 object-contain bg-transparent" />
          <span className="font-black text-2xl tracking-tighter text-purple-900 underline decoration-teal-400">I CHUZ 2 B</span>
        </div>
        <div className="space-x-6 text-sm font-medium text-slate-600">
          <a href="/articles" className="hover:text-teal-600 transition-colors">Articles</a>
          <a href="#" className="hover:text-teal-600">Resources</a>
          <a href="#" className="bg-slate-900 text-white px-5 py-2 rounded-full">Subscribe</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Caregiving. <span className="text-teal-500">Growth.</span> Career.
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          I'm a developer building a life that balances professional ambition 
          with the heart of caregiving. Join the journey.
        </p>
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
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Resources?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">I've compiled checklists, resume templates, and growth trackers just for you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-teal-400 text-slate-900 px-8 py-3 rounded-full font-bold">Download Free Guides</button>
          </div>
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

