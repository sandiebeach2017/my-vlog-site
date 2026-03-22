import { articles } from '@/lib/data';

export default function ArticlesPage() {
  return (
    <div className="bg-white min-h-screen p-8 lg:p-24">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-teal-600 font-medium mb-8 inline-block">← Back to Home</a>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-12">Articles & Guides</h1>

        <div className="space-y-12">
          {articles.map((article) => (
            <div key={article.id} className="border-b border-slate-100 pb-8 group">
              <p className="text-sm text-slate-400 mb-2">{article.date}</p>
              <h2 className="text-2xl font-bold text-slate-800 group-hover:text-teal-600 transition-colors cursor-pointer">
                {article.title}
              </h2>
              <p className="text-slate-600 mt-3 leading-relaxed">
                {article.excerpt}
              </p>
              <button className="mt-4 text-sm font-bold text-slate-900 uppercase tracking-widest">
                Read Full Article
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
