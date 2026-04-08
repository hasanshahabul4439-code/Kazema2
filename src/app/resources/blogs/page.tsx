import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card";
import {
  LayoutGrid,
  Filter,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Expanded Mock Data for the Blog Archive
const BLOG_POSTS = [
  {
    id: 1,
    title: "Scaling Hygiene for UAE's Megaprojects",
    excerpt: "How modular sanitation solutions are keeping the world's largest construction sites safe and efficient in the heat.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMNko8XZXeAZad4kQhJl1lOFiulAD8mEncGs8cQRX1A_ewex2tJqtsFZW59BomRudJ6qM8MBBESd060HreH4Xcp6t62l2KrdpX5tCQsdlrXS47if_NC4yLCMtPEPtNBKRedj52oZUS91pty_zTeI8FdX041_qwokhroO4RWpMncb-v7Ar_HCka8aMqcBD_AT6R-I_J3L8wmwN-qPDc4EJR5hec04y4vYOwdxhD-1mGY7tE0td8XRLUKPb9C1D9N_9OkxPKpbMPCb0",
    category: "Construction",
    author: "Ahmad K.",
    date: "Oct 12, 2024"
  },
  {
    id: 2,
    title: "Event Planning 101: Sanitation Logistics",
    excerpt: "Everything you need to know about calculating unit requirements for large-scale outdoor events in Dubai.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh3_SAza1dnWk1D3JULysj73R5_XczQU5ndImLAGkQG5XMS10TcP5B20Spez_cyFtol3O85PkztlvKBGZCXoxaTmXl-DTUfCkQaW5SeMlrxkELekH_CKAF_tdqssJ7mbqTxi-_iZUz3Tsj7CYFQxyDJKzoR2gQQeVID2f7_f9v49YP9Bgh_0yvKO1TFtQhGuwK76RqgOND13FNflQqNrpU3cDWbd9ivMmIpPP_RCkoKK0Vmw4hgKGGKdMZ0gsfR7NLeHT8S8ssf40",
    category: "Events",
    author: "Sara J.",
    date: "Oct 08, 2024"
  },
  {
    id: 3,
    title: "The Rise of Modular Workspaces",
    excerpt: "Why local businesses are choosing portable cabins for flexible, high-end office space expansion.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB__dsGk7X37zU0o2WYsvXAnjz2t0fTwTAOqgQMB5-NibDsv5468bQcUPioyUVyISHz6kHvF3BFVs5MltWWbfm35i9RabSiTC9isrAJOlcAa2JiOgxAxz7VeNE6IhLfzfAyx37zFNrluM6GpaL_SxCsMUuV5Ez-wiUozkLf_PUMvbhIRBWucwvtGdFQ_l4Ua8I0_I9-2FonSnXZQLTxOYPCqJiiCOri-vAotD1ze51dJ7-wVsz_2fDXxLlQmtkEAqZfej7ARdlSVgY",
    category: "Cabins",
    author: "Team Kazema",
    date: "Sep 29, 2024"
  },
  {
    id: 4,
    title: "Maintaining Zero-Odor Standards",
    excerpt: "The science behind our chemical treatments and ventilation systems that guarantee fresh units.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATkWebW0UCa8lnccEkI1H2p1u8Ezy1A9UApqC4YLO0Ujq4P973YTUG2d75EqMRc7WCVWhDkGeqhMIT3zSMmlaohWCUK65j8m5YMk6F2Ncn6Blo65cDXV_Md4guJ2fDs1-YOZrcln9eoodDt8GS77jaW7v5fl0ZVEJyQ7udIS7uPfdToPgO6oPtBTlaxCC6mBRDdPSfD73LlT5mBXpds2cRodkvYjgWnU8GERyJlxMe464iaJPs2z7a0lW0wm_euDqUwM-JsZM1QJ8",
    category: "Hygiene",
    author: "Dr. Khalid",
    date: "Sep 15, 2024"
  },
  {
    id: 5,
    title: "Eco-Friendly Sanitation Tech",
    excerpt: "Exploring the next generation of solar-powered units and water recycling technology for the UAE.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDayVrhoo0C3ZHPjbJrDm0pNGcwM6mPzqfvo00QFmAgMlRrxPo043lN47Sf2dls1UPl1rDsuaYUWsZw2gZegrVvcJXxEAk4hMHX-FOWqtw_VfV1z7hIDGOKbjmT50_wooHezxewOKAIhIyky6JtB95w-8fJq67aGT2pO0hFBZntigvvajAhEb6shpLw8c8q5t7-f0O-nHMRqIjkmtCayRbsGFMRCrn2bqpB0SysIbjav2_flBFUX77eF0lnhFf__RX0iUSxLhcGSL4",
    category: "Eco-Solutions",
    author: "Team Kazema",
    date: "Aug 28, 2024"
  },
  {
    id: 6,
    title: "New Logistics Hub in Abu Dhabi",
    excerpt: "Expanding our footprint to provide even faster delivery and maintenance services to our capital city clients.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeXnnWAZaRToWNee3Iuf8hZPMBHDPDj-px-IrEkdjJCvAbiKJ7iQyoGUOtjGZcgAZ-3DLWMF3qeqRFonRg4jPUQ2NiXf2zUmPsmNKCvJ4NpNzW_Yfl17sZzB2LHHH-B1zpKrCHAkLgLYiSu1SDoMzZKnamgVzdD7ymK9DOym8DqDbA7-8BC3tzvi5cPQivtMaL3wxPP9ASnHn2CP0Looi6_URSJ7HSjPni7QcZyug7WW8rF77TdLN-uMapKSeGnTHAOatglxPuI_U",
    category: "Updates",
    author: "Corporate",
    date: "Aug 12, 2024"
  }
];

const CATEGORIES = [
  { name: "All Posts", count: 124, active: true },
  { name: "Portable Toilets", count: 42 },
  { name: "Portable Cabins", count: 28 },
  { name: "Handwash Stations", count: 15 },
  { name: "Events & Rentals", count: 19 },
  { name: "Construction Solutions", count: 31 },
  { name: "Maintenance & Hygiene", count: 12 },
];

export default function BlogsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      {/* 1. HERO SECTION - Synchronized with Product Page Typography */}
      <section className="relative py-12 md:py-20 w-full overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://www.kazemaportabletoilets.com/wp-content/uploads/Dollarphotoclub_14369744-scaled_11zon-1.webp"
            alt="Kazema Background"
            fill
            className="object-cover opacity-5 dark:opacity-10 grayscale"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <nav className="flex items-center gap-2 text-xs font-bold text-muted-foreground mb-6 uppercase tracking-widest">
            <Link className="hover:text-primary transition-colors" href="/">Home</Link>
            <span>/</span>
            <Link className="hover:text-primary transition-colors" href="/resources">Resources</Link>
            <span>/</span>
            <span className="text-primary">Blogs</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Kazema <span className="text-[#006217] dark:text-[#28a745]">Blog Archive</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Explore our extensive range of industry insights, installation guides, and modular solution updates across the UAE.
          </p>
          <form className="mt-8 max-w-2xl" action="#" method="get">
            <label htmlFor="blog-search" className="sr-only">Search blogs</label>
            <div className="relative">
              <input
                id="blog-search"
                name="q"
                type="search"
                placeholder="Search blog posts..."
                className="w-full rounded-full border border-border/50 bg-background px-5 py-4 text-base text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#006217] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#005314]"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 2. MAIN CONTENT LAYOUT - Synchronized Side-by-Side */}
      <section className="max-w-7xl mx-auto px-8 py-12 md:py-20 w-full min-h-screen">
        <div className="flex flex-col lg:flex-row gap-10 relative">

          {/* Left Sidebar - Exact Product Page Design */}
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 h-fit border-b lg:border-b-0 lg:border-r border-border/60 pb-6 lg:pb-0 lg:pr-6">
            <div className="flex items-center gap-2 mb-6 text-foreground font-semibold">
              <Filter className="w-5 h-5 text-[#006217] dark:text-[#28a745]" />
              <span className="text-lg tracking-tight">Categories</span>
            </div>

            <ul className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide snap-x">
              {CATEGORIES.map((cat) => (
                <li key={cat.name} className="snap-start shrink-0">
                  <button
                    className={`w-full flex items-center justify-between gap-3 px-5 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 border ${cat.active
                      ? "bg-[#006217] text-white border-[#006217] dark:bg-[#28a745] dark:border-[#28a745] dark:text-black shadow-md translate-x-1"
                      : "bg-muted/30 text-muted-foreground border-transparent hover:bg-muted/80 hover:text-foreground"
                      }`}
                  >
                    <span className="truncate">{cat.name}</span>
                    <span className={`shrink-0 inline-flex items-center justify-center min-w-[1.75rem] h-6 px-1 text-[10px] font-bold rounded-md border transition-colors duration-300 ${cat.active
                      ? "bg-white/20 border-white/20 text-white dark:bg-black/10 dark:border-black/10 dark:text-black"
                      : "bg-background/50 border-border/50 text-muted-foreground"
                      }`}>
                      {cat.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right Content Area - Catalog Design */}
          <div className="w-full lg:w-3/4 flex flex-col">

            {/* Top Stat Bar - Match Products */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 opacity-60" />
                All Posts
              </h2>
              <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full border border-border/50">
                24 Articles
              </span>
            </div>

            {/* Blog Grid - Using shared Card component */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <div key={post.id} className="animate-in fade-in zoom-in-95 duration-500">
                  <Card
                    title={post.title}
                    description={post.excerpt}
                    image={post.image}
                    tag={post.category}
                    author={post.author}
                    date={post.date}
                    hideButtons={true}
                    showReadMore={true}
                  />
                </div>
              ))}
            </div>

            {/* Pagination - Matching Theme */}
            <div className="mt-20 flex justify-center">
              <nav className="flex items-center gap-2 bg-muted/30 p-2 rounded-xl border border-border/50">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground transition-all">
                  <ChevronLeft size={18} />
                </button>
                <div className="flex items-center gap-1">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">1</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted text-foreground/80 font-bold text-sm transition-all">2</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted text-foreground/80 font-bold text-sm transition-all">3</button>
                </div>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground transition-all">
                  <ChevronRight size={18} />
                </button>
              </nav>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CTA SECTION - Unified Corporate Gradient */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="relative rounded-[2rem] overflow-hidden bg-linear-to-br from-primary/10 to-transparent border border-primary/20 p-12 md:p-20 text-center shadow-xl">
          <div className="absolute inset-0 blueprint-pattern opacity-5" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              Ready to <span className="text-primary">Consult an Expert?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Our technical team is ready to help you choose the perfect modular solution for your next project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest transition-all shadow-lg shadow-primary/20"
              >
                Get a quote
              </Link>
              <Link
                href="/contact-us"
                className="bg-background border border-border text-foreground px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-muted transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
