import React, { useState } from "react";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CtaSection } from "../components/ui/CtaSection";
import { blogPosts, blogCategories, BlogPost } from "../content/blog";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  X,
  Share2,
} from "lucide-react";
import { Button } from "../components/ui/Buttons";

interface InsightsPageProps {
  onNavigate: (path: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Insights" }]}
            onNavigate={onNavigate}
            className="mb-8"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#1554A3] block mb-3">
              Perspectives & Engineering Notes
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight text-balance">
              MKTECH Insights
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Field observations, architectural principles, and strategic thoughts on turning operational bottlenecks into practical digital systems.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto max-w-full">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? "bg-white text-slate-900 shadow-xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured / Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Unboxed metadata per frontend-design zero-pill rule */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 pb-3 border-b border-slate-100">
                    <span className="font-semibold text-[#1554A3]">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 tracking-tight mt-4 leading-snug hover:text-[#1554A3] transition-colors cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    {post.title}
                  </h2>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="text-slate-500">
                    <span className="font-medium text-slate-700 block">{post.author}</span>
                    <span className="text-[11px] text-slate-400">{post.date}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-1 font-semibold text-[#1554A3] hover:text-[#0F3F7A] transition-colors cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty state matching prompt: "Initial page should have attractive empty-state content: 'Insights coming soon.'" */
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-[#1554A3] flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Insights Coming Soon</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We are actively compiling field notes and architectural case studies for the {activeCategory} category. Check back shortly or explore our solutions.
            </p>
            <div className="mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveCategory("All")}
              >
                View All Categories
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* Editorial Roadmap / Architecture Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/90 bg-[#F6F9FC] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1554A3]">
              <Sparkles className="w-4 h-4" />
              <span>Editorial Architecture</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Future-Ready Content Management
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Our insights engine supports slug-based routing, SEO metatags, structured author attribution, and headless CMS migration (Sanity, Strapi, or markdown pipelines).
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate("/contact")}
          >
            Suggest a Topic / Inquiry
          </Button>
        </div>
      </section>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Unboxed Metadata Header */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
              <span className="font-semibold text-[#1554A3]">{selectedPost.category}</span>
              <span>·</span>
              <span>{selectedPost.readingTime}</span>
              <span>·</span>
              <span>{selectedPost.date}</span>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              {selectedPost.title}
            </h2>

            <div className="mt-2 pb-4 border-b border-slate-100 text-xs text-slate-500 font-medium">
              By {selectedPost.author} · MKTECH Engineering & Research
            </div>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              {selectedPost.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Part of the MKTECH Thought Leadership Series
              </span>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  setSelectedPost(null);
                  onNavigate("/contact");
                }}
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaSection onNavigate={onNavigate} />
      </div>
    </div>
  );
};
