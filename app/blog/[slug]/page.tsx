import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Building2 
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import CTASection from "@/components/CTASection";
import AnimatedReveal from "@/components/AnimatedReveal";
import { siteConfig } from "@/lib/siteConfig";
import { blogPosts, getBlogPostBySlug, getAllBlogPostSlugs } from "@/lib/blogData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Northwind Estate",
      description: "The requested article could not be found.",
    };
  }

  const url = `${siteConfig.url}/blog/${post.slug}`;
  const imageUrl = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${siteConfig.url}${post.coverImage}`;

  return {
    title: `${post.title} | Northwind Estate Sector 22D`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.isoDate,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleUrl = `${siteConfig.url}/blog/${post.slug}`;
  const fullCoverImageUrl = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${siteConfig.url}${post.coverImage}`;

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": [fullCoverImageUrl],
    "datePublished": post.isoDate,
    "dateModified": post.isoDate,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/logo-s.webp`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "keywords": post.tags.join(", ")
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Journal & Blog",
        "item": `${siteConfig.url}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": articleUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Header */}
      <section className="relative pt-28 sm:pt-32 pb-16 bg-[#0D3829] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[
              { label: "Journal & Blog", href: "/blog" },
              { label: post.category, href: "/blog" },
            ]}
            variant="dark"
          />

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A2B] border border-[#ACC78C]/40 text-xs font-semibold text-[#ACC78C]">
              <Sparkles className="w-3.5 h-3.5 text-[#ACC78C]" />
              <span>{post.category}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
              {post.title}
            </h1>

            <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
              {post.subtitle}
            </p>

            {/* Author & Meta Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#ACC78C]/20 text-xs text-[#FFFCEC]/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1E3A2B] border border-[#ACC78C]/40 flex items-center justify-center text-[#ACC78C]">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#FFFCEC]">{post.author.name}</p>
                  <p className="text-[11px] text-[#ACC78C]">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 ml-auto">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#ACC78C]" />
                  <span>{post.date}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#ACC78C]" />
                  <span>{post.readTime}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 sm:py-16 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Article Main Column */}
            <article className="lg:col-span-8 space-y-8">
              {/* Featured Cover Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-[#0D3829]/15 bg-[#0D3829]">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              {/* Key Takeaways Box (for AEO / AI Engines & Readers) */}
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <div className="bg-[#F4F1DF] border-l-4 border-[#0D3829] rounded-r-xl p-5 sm:p-6 space-y-3">
                  <h3 className="font-serif font-bold text-base text-[#0D3829] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#0D3829]" />
                    <span>Key Takeaways &amp; Executive Summary</span>
                  </h3>
                  <ul className="space-y-2">
                    {post.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#2D3C25] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Body Sections */}
              <div className="space-y-8 text-[#2D3C25] leading-relaxed">
                {post.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0D3829] pt-2">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className="text-sm sm:text-base font-light leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Tags Cloud */}
              <div className="pt-6 border-t border-[#0D3829]/15">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-[#0D3829] flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" /> Tags:
                  </span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#F4F1DF] text-[#0D3829] border border-[#0D3829]/15 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back to Blog Navigation */}
              <div className="pt-4 flex items-center justify-between">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0D3829] hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to All Articles</span>
                </Link>
              </div>
            </article>

            {/* Sidebar Sticky Column */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Site Visit & Brochure Form */}
              <div className="sticky top-28 bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl p-6 shadow-xl space-y-5">
                <div className="space-y-1.5 border-b border-[#0D3829]/15 pb-4">
                  <span className="text-[10px] font-bold text-[#0D3829] uppercase tracking-wider bg-[#0D3829]/10 px-2 py-0.5 rounded-full">
                    Sector 22D Yamuna Expressway
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#0D3829]">
                    Schedule a Site Tour
                  </h3>
                  <p className="text-xs text-[#5E7168] font-light">
                    Experience the low-density master plan in person. Free VIP cab pickup from Delhi NCR.
                  </p>
                </div>

                <LeadForm
                  sourceCTA="Blog Single Sidebar CTA"
                  sourcePage={`/blog/${post.slug}`}
                />

                <div className="pt-3 border-t border-[#0D3829]/10 text-center">
                  <p className="text-xs font-bold text-[#0D3829] flex items-center justify-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#0D3829]" /> Direct Helpline: +91 97177 00596
                  </p>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[#F4F1DF] text-[#0D3829] border-t border-[#0D3829]/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
                  Keep Reading
                </span>
                <h2 className="text-2xl font-serif font-bold text-[#0D3829]">
                  Related Property Articles
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-xs font-bold text-[#0D3829] hover:underline flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-[#0D3829]/15 shadow-xs hover-card-lift flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-[#0D3829] overflow-hidden">
                      <Image
                        src={related.coverImage}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute top-2 left-2 bg-[#0D3829]/90 text-[#FFFCEC] text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                        {related.category}
                      </span>
                    </div>
                    <div className="p-4 space-y-2">
                      <p className="text-[10px] text-[#5E7168]">{related.date}</p>
                      <h3 className="font-serif font-bold text-sm text-[#0D3829] group-hover:text-[#1E3A2B] transition line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-xs text-[#2D3C25] font-light line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 pb-4 pt-1 flex items-center gap-1 text-xs font-bold text-[#0D3829]">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Global CTA */}
      <CTASection
        title="Experience Northwind Estate in Sector 22D"
        subtitle="Book a private consultation to receive unit pricing, floor plans, and investment analysis."
      />
    </>
  );
}
