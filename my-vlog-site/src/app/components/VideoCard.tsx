import Image from 'next/image';

interface VideoProps {
  title: string;
  thumbnail: string;
  category: string;
  description?: string;
}

export default function VideoCard({ title, thumbnail, category, description }: VideoProps) {
  return (
    <div className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-widest">
          {category}
        </div>
      </div>
      
      {/* Text Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-teal-600 transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-slate-600 text-base mt-2 mb-2">{description}</p>
        )}
        <p className="text-slate-500 text-sm">Watch on YouTube →</p>
      </div>
    </div>
  );
}
