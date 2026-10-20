import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogData';
import { 
  Clock, 
  Calendar, 
  User, 
  ChevronRight, 
  Sparkles, 
  ArrowRight,
  Share2,
  Tag
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { showToast } = useApp();
  const navigate = useNavigate();

  const post = BLOG_POSTS.find(p => p.slug === slug || p.id === slug) || BLOG_POSTS[0];

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article link copied to clipboard!', 'info');
    }
  };

  return (
    <div className="min-h-screen bg-ivory py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-charcoal-500 flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:text-maroon-800">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/blog" className="hover:text-maroon-800">Spiritual Guides</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-charcoal-400">{post.category}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-bold text-maroon-900 truncate max-w-xs">{post.title}</span>
        </div>

        {/* Article Container */}
        <article className="bg-white rounded-3xl p-6 sm:p-12 shadow-spiritual border border-gold-300 space-y-6">
          
          {/* Header */}
          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-saffron-100 text-saffron-800 uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-y border-gold-100 text-xs text-charcoal-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-semibold text-charcoal-800">
                  <User className="w-4 h-4 text-maroon-800" />
                  <span>{post.author}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-saffron-600" />
                  <span>{post.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gold-600" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 text-maroon-800 hover:text-maroon-950 font-semibold"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Guide</span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden h-72 sm:h-96 relative border border-gold-200">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Formatted Content */}
          <div className="prose prose-sm sm:prose max-w-none text-charcoal-800 leading-relaxed space-y-4 pt-4 font-sans text-sm sm:text-base">
            {post.content.split('\n\n').map((paragraph, idx) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={idx} className="font-serif font-bold text-xl sm:text-2xl text-maroon-900 pt-4 border-b border-gold-100 pb-1">
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }
              if (trimmed.startsWith('#### ')) {
                return (
                  <h4 key={idx} className="font-serif font-bold text-base sm:text-lg text-charcoal-900 pt-2">
                    {trimmed.replace('#### ', '')}
                  </h4>
                );
              }
              if (trimmed.startsWith('- ')) {
                const items = trimmed.split('\n').map(line => line.replace(/^- /, '').replace(/^\* /, ''));
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-1 text-charcoal-700">
                    {items.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                );
              }
              if (trimmed.length > 0) {
                return <p key={idx} className="text-charcoal-700 leading-relaxed">{trimmed}</p>;
              }
              return null;
            })}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-charcoal-100 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-charcoal-400" />
            <span className="text-xs font-bold text-charcoal-600 mr-1">Tags:</span>
            {post.tags.map((tag, i) => (
              <span key={i} className="px-2.5 py-1 rounded-lg bg-ivory text-charcoal-700 text-xs border border-gold-200">
                #{tag}
              </span>
            ))}
          </div>

          {/* Call to Action Box */}
          <div className="mt-8 p-6 bg-gradient-to-r from-maroon-900 to-maroon-950 text-white rounded-2xl border border-gold-400/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-serif font-bold text-lg text-gold-200">
                Perform This Sacred Ritual in Dubai
              </h3>
              <p className="text-xs text-ivory/80">
                Book a verified Vedic priest with authentic organic samagri delivered to your home.
              </p>
            </div>
            <Link
              to="/book"
              className="px-6 py-3 bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all shrink-0 flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-gold-200" />
              <span>Book a Pandit</span>
            </Link>
          </div>

        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="space-y-4 pt-6">
            <h2 className="font-serif font-bold text-2xl text-charcoal-900">
              Related Spiritual Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map(rp => (
                <Link
                  key={rp.id}
                  to={`/blog/${rp.slug}`}
                  className="bg-white rounded-2xl p-4 border border-gold-200 hover:border-gold-400 shadow-sm transition-all group block space-y-2"
                >
                  <img
                    src={rp.image}
                    alt={rp.title}
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <span className="text-[10px] font-bold uppercase text-saffron-700">{rp.category}</span>
                  <h3 className="font-serif font-bold text-xs text-charcoal-900 group-hover:text-maroon-800 transition-colors line-clamp-2">
                    {rp.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
