"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Calendar as CalendarIcon,
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Network,
  Settings,
  ChevronRight
} from "lucide-react";

const FILTER_TYPES = ["All", "Exhibition", "Rental", "Corporate", "Government"];
const FILTER_LOCATIONS = ["Dubai", "Abu Dhabi", "Sharjah"];
const FILTER_YEARS = ["2026", "2025", "2024"];

const RECENT_EVENTS = [
  {
    id: 1,
    location: "Sharjah",
    type: "Corporate",
    title: "Emirates Logistics Hub Launch",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCArtGbt0AAsYUJxEj09ltMrO2X4fwOFGK_1IBAVYSSA3L-kHBMklzC9OV8AxvQsmIl-c2BYugGRCAOWkSGjfQc1IYugwORvBHhCkQc99c1IseKfYcM6CkLSsD-aOvReddpdeN7w7H0-UFTg9v3NeUFJ0RBkVPOjmbdaGjic3Wk2f3KR8SgR1Sfx90REe7UpneoB2irqn_Hav2j6R23Tu6nGzWzAyx5FMOg1xMUyV9SLOT5o7ERP_YNs6E3bFKK7RCD0Gm1T5A3ADw"
  },
  {
    id: 2,
    location: "Abu Dhabi",
    type: "Government",
    title: "Desert Heritage Festival",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5UvB7JBdKzBgMC3d43Nyb4WI7lzIU7aHH1ld8M4U-93lfgMJKpcBvOujsPyCRY5Woy3bZjfo3h7nbCp1A_aD7HzeUPstgMa_siq0QwJ97nV-3uCsYmSWQA4a6KuRaxFem0-9V0ovcSbzxz7U7phOgOaJPMN7FfAiDhH6otj-Mpc_w7C7DIMZyEYRnJMS-UM71o3q3LoRJdt_rqV7iEj5qd2hVgn0RJ2ulRKUp-ImgAb9l8mu7AfyAZXWfdQpbBPkAbLB-yLYAkxY"
  },
  {
    id: 3,
    location: "Dubai",
    type: "Exhibition",
    title: "Industrial Future Expo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSSDq5trq3Oq_1-KNY5gDYnTU825cIuOqTrLYthGmVUIexL1EDiBDxUmURwQkrbt6zl6kqYtBZPxNs-CMqagXgHtFRWi2dxlZ8zGMwl6PjTrUKcoc2-vr1SHm4GaRI5gQApousDMABs-D6ITgjjnF6Wv-PyGyW7lb_e_V-axmiMDUiIVOW5H8SogECnupBWTm74zyA0xcXn3GmnsoycySJBYhhK_dVTXVk5GpTHFsKG7n39hBk4EFUrv9RLsgpts4U2IRLCyKABlk"
  }
];

const GALLERY_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDLhFy2mg-eQMjbEwZCmvPYJP4e1JxjmzqraVNw2lR-y__EJZjeMfK7RbJTE5B21hABRuYMTVNHiYcMNima4EwzBv7skR6BO_I4ZUmVpN3AEp6MYbd8dfExa6cC6y2ysRiwpd-02fV4cbLfTNGCm6xqCwIhAWAjuV0vU_pGQYEKP1Xf9vtllUV1utt_ay9vHWKBHu4bgna0urKi6whvVEyunXheFHbuy9MUEJB8QC9FwTFGLgE6r2O1vd7g3NKaFsHGtbcZhm5c4SQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDlLhl14KsIAQvP6Zw9xniPiii2fq-qSVCaJD40fNGzGCO82-dr36c26xLF7vQRAfBuJB0aFTltOPFajoTSAO_YlegS48rkjDcjEYGBsCaYxeLeqHC1BNu199AN4pOn4KUo6VhEtwL4H7bUZRsbAwpvm6CmPgXOAKmb_9_dIz8H71DbJVJ406IVVmXaLw4jgWw7GLXJ7XIi0nlJDkNipBDVMC85QdteYKClBgtDLjr3SCDnP9CQaSIJJ53bijwSGalZGOYXyXwOm5w",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBtERCrrqcoxCFNAGiel9BZNKvgSW5tPp6gBicFV4RJ1QHNMi22wYUhLw_TfBwXoZZffMoFFkCzgE-Hls3SU1XwPTZ8bS79rF95Wup6R5Fq9nj8P0GJYPC27xbdCVa36rJqijTettRy2GsJzr9J68CQmeZK9ihiOJhoZ9DkpgnDAUR9kNSI7oLv6t6XEG-KY2od_9X1m1KApTIcTWxlY5WzlGw_kHUHXJgMoPKY2VagKFFibloMKq395dDANBQLQ5M9jl9N0AX1V_g",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCg90QgDuXQZ1VIf5kBQ1Uif7CPoZVw_DLnA9y8XFups1EwSjbcP7E8OlCBx_8raZ5MLxO3pC49D-wnAIS7aeK0XR7VdAqvSzEO3vridyt6t_fKCmgNltN0pmfB6YFrWFGi43G3qFhTFJs_bitpozo2jYQcMMw58JGw1s-4SJ0zp04f8gSmAeJzg7X6Pu1xgsA48hzTXtBOyZu3MbUzK4dzSFA97hvh73WV7t2bgD1_6vxe2yTCGDpqka2sX30WA42otd0v5dWSLZw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC1gCK4L5ze1NHG0Fjjoh1_DTvg7NwhbZ2ZL1o6uyn1uApnCmtu3jDA3pZFB1Dy_fi12-Vs8VQ__f5VfGGYKR5OIOZH9Bem1RA1VpFGtNQbllaZGlJpRTuVyz7LWJhHgZzmD52r02woOcuqQZG_T6EX7nomemPi1w7_ewrQ-Y9wU88xgXXGv2Hsm8KJJlhDtK3TiGUket7NF1VWcUmJ5TuBGFjSnaFs3o-qemh0myO5NDjArsX4fi-CJXA6Km2YZrH0ulwHpy74O9g",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBqON9uWjIDCgiL0E9G1mVqrpy3Sln-swXFbTIQPl-gsBLbVTaXJaGomXFOym3RWIzKruM4GfLaGgZJa5gcbiB1u2H-Rglk5aZk2FGGZpO6HtrZyO_MoP_bvkmIUz3NDYCc-t-QSUhVbc6A_j9v6wo-4R0F-0iWsS6Y6e_ZFBzANA2-YBMc8S69-b7FpA3MhGyAh4N4o9rwAzZw469pSSyct0ysQ84TpkC2eIX9qgonVaSIP233Dm1dC9f4T-rS3mI4TvVNrFj_dsc"
];

export default function EventsPage() {
  const [activeType, setActiveType] = useState("All");
  const [activeLocation, setActiveLocation] = useState("Dubai");
  const [activeYear, setActiveYear] = useState("2025");

  return (
    <div className="bg-background text-foreground font-body">

      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[400px] flex flex-col justify-center overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU5RtLu2fMd5IytoLfRSo49l6UP_LV4WnF4JeBheinqObBDmCrGvdaI-W_MGZaKzN6Tv1shJ7ZQQnZLHefsLmZiw-NFQ9pbEz0cCUaItWFtit2GdcLagGa2z_CbcdBa3UPrA-PIPx2rpfWA1gv1ddjsZyq7a2noIqFyhgXpeZDcyDoKcVUJNorzUsIvFZQ9sZzrC7ZA2CpBhjFzk5zLc_hblFdbvtlboJaB7MgCDeXiT5ies9zPpS539rkglxOrpoVIlpzSnd2tUc"
          alt="Outdoor festival at dusk in Dubai with rows of high-end portable facilities"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-[#006217]/50 dark:bg-slate-950/80 backdrop-brightness-75 mix-blend-multiply"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-start justify-center pt-16">
          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-3xl">
            <h1 className="text-white font-headline font-bold text-4xl md:text-5xl tracking-tight leading-tight">
              Kazema Events & <span className="text-[#a1f398]">Our Attendance</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              Explore our participation in major events, exhibitions, and projects across the UAE. Providing infrastructure for the nation's biggest milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[64px] md:top-[78px] z-40 bg-background/95 backdrop-blur-md border-b border-border py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-8 min-w-max">

            <div className="flex items-center gap-3">
              <span className="text-xs font-black uppercase text-muted-foreground tracking-widest">Event Type:</span>
              <div className="flex gap-2">
                {FILTER_TYPES.map(type => (
                  <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors ${activeType === type
                      ? "bg-[#006217] text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-black uppercase text-muted-foreground tracking-widest">Location:</span>
              <div className="flex gap-2">
                {FILTER_LOCATIONS.map(loc => (
                  <button
                    key={loc}
                    onClick={() => setActiveLocation(loc)}
                    className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors ${activeLocation === loc
                      ? "bg-[#006217] text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                      }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-black uppercase text-muted-foreground tracking-widest">Year:</span>
              <select
                value={activeYear}
                onChange={(e) => setActiveYear(e.target.value)}
                className="bg-transparent border-none text-sm font-bold text-[#006217] dark:text-[#28a745] focus:ring-0 cursor-pointer outline-none"
              >
                {FILTER_YEARS.map(year => (
                  <option key={year} value={year} className="text-foreground bg-background">{year}</option>
                ))}
              </select>
            </div>

          </div>
        </div>
      </div>

      {/* Featured Event */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row bg-card rounded-[2.5rem] overflow-hidden border border-border shadow-xl group">
          <div className="md:w-3/5 relative overflow-hidden min-h-[300px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8YhEn9nWsN8KzB1jcQTZnAevjSlPz1mw-QaZqcK0r8fL1o7a5X03MlTuKtvbIZkIjvaLIfF3nWhNoeEVxSQRxDtpF_bmaINaTIwb0uFVDdeoJLp1edhJszwlZelP23iK3AlCiVmfq3skc2QouY5PWSnVyZxyckJcsxGiqVFiK4AozM2m3EUjjlkhNaVeReYsyw0fY-NBu61lSVN47-lhPBr-M95QlR4yRuKSlRC6NghjymNGr9A22C-6doQcAdZN8UPNqJSgViCs"
              alt="Professional exhibition entrance with Kazema branded units"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-[#006217] text-white px-4 py-1.5 rounded-lg text-xs font-black tracking-widest uppercase shadow-lg">
              Featured Event
            </div>
          </div>
          <div className="md:w-2/5 p-12 flex flex-col justify-center bg-card">
            <div className="text-[#006217] font-bold text-sm tracking-widest uppercase mb-4">Dubai Expo {activeYear} Venue</div>
            <h2 className="text-4xl font-headline font-black text-foreground mb-6 leading-tight">Gulf Global Infrastructure Summit</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Selected as the exclusive sanitation partner for the largest construction summit in the Middle East, managing facilities for over 150,000 international delegates.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="text-xs font-bold px-3 py-1 bg-muted/50 text-foreground rounded-md flex items-center gap-1 border border-border">
                <MapPin size={16} className="text-[#006217]" /> Dubai
              </span>
              <span className="text-xs font-bold px-3 py-1 bg-muted/50 text-foreground rounded-md flex items-center gap-1 border border-border">
                <CalendarIcon size={16} className="text-[#006217]" /> Oct {activeYear}
              </span>
            </div>
            <button className="w-fit flex items-center gap-2 text-[#006217] font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
              Explore Full Project <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h3 className="text-4xl font-headline font-black text-foreground mb-2">Our Recent Footprints</h3>
            <div className="h-1.5 w-24 bg-[#006217] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RECENT_EVENTS.map(event => (
              <div key={event.id} className="group bg-card rounded-[2rem] overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-tighter mb-2">
                    {event.location} | {event.type}
                  </div>
                  <h4 className="text-xl font-headline font-bold text-foreground mb-6">
                    {event.title}
                  </h4>
                  <button className="bg-muted/50 text-[#006217] px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#006217] hover:text-white transition-colors border border-[#006217]/10">
                    View Event
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-headline font-black text-foreground">Our Journey in Events</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">A decade of providing foundational support to the Emirates' most ambitious gatherings.</p>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 md:px-0">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-[#006217]/20"></div>

          <div className="space-y-24">

            {/* 2026 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-12 group pl-16 md:pl-0">
              <div className="md:w-1/2 md:text-right">
                <div className="text-[#006217] dark:text-[#28a745] font-black text-5xl md:text-4xl mb-2">2026</div>
                <h5 className="text-xl font-bold mb-3 text-foreground">Green Horizon Initiative</h5>
                <p className="text-sm text-muted-foreground">Leading the shift towards sustainable event management with solar-powered modular facilities.</p>
              </div>
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 bg-[#006217] w-6 h-6 rounded-full border-4 border-background shadow-xl z-10 group-hover:scale-125 transition-transform"></div>
              <div className="md:w-1/2 bg-muted/40 p-6 rounded-2xl border border-border">
                <Leaf className="text-[#006217] dark:text-[#28a745] w-10 h-10 mb-3" />
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Upcoming Milestone</div>
              </div>
            </div>

            {/* 2025 */}
            <div className="relative flex flex-col md:flex-row-reverse items-start md:items-center gap-12 group pl-16 md:pl-0">
              <div className="md:w-1/2 md:text-left">
                <div className="text-[#006217] dark:text-[#28a745] font-black text-5xl md:text-4xl mb-2">2025</div>
                <h5 className="text-xl font-bold mb-3 text-foreground">Dubai Global Connect</h5>
                <p className="text-sm text-muted-foreground">Largest logistical operation in company history supporting 200 concurrent events.</p>
              </div>
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 bg-[#006217] w-6 h-6 rounded-full border-4 border-background shadow-xl z-10 group-hover:scale-125 transition-transform"></div>
              <div className="md:w-1/2 bg-muted/40 p-6 rounded-2xl border border-border text-left md:text-right flex flex-col items-start md:items-end">
                <Network className="text-[#006217] dark:text-[#28a745] w-10 h-10 mb-3" />
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Current Focus</div>
              </div>
            </div>

            {/* 2024 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-12 group pl-16 md:pl-0">
              <div className="md:w-1/2 md:text-right">
                <div className="text-[#006217] dark:text-[#28a745] font-black text-5xl md:text-4xl mb-2">2024</div>
                <h5 className="text-xl font-bold mb-3 text-foreground">Abu Dhabi Innovation Week</h5>
                <p className="text-sm text-muted-foreground">Premier sanitation provider for the high-tech exhibition sector.</p>
              </div>
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 bg-muted w-6 h-6 rounded-full border-4 border-background shadow-xl z-10 group-hover:scale-125 transition-transform"></div>
              <div className="md:w-1/2 bg-muted/40 p-6 rounded-2xl border border-transparent">
                <Settings className="text-muted-foreground w-10 h-10 mb-3 opacity-60" />
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Legacy Milestone</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
            <div>
              <h3 className="text-4xl font-headline font-black text-foreground">Visual Impact</h3>
              <p className="text-muted-foreground mt-2 text-lg">Real installations, real events, zero compromise.</p>
            </div>
            <button className="text-[#006217] font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm">
              View All Photos <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden hover:opacity-90 transition-opacity relative bg-muted">
              <Image src={GALLERY_IMAGES[0]} alt="Event layout" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden hover:opacity-90 transition-opacity relative bg-muted">
              <Image src={GALLERY_IMAGES[1]} alt="Premium event facilities" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="aspect-[2/1] col-span-2 rounded-2xl overflow-hidden hover:opacity-90 transition-opacity relative bg-muted">
              <Image src={GALLERY_IMAGES[2]} alt="Industrial exhibition setup" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="aspect-[2/1] col-span-2 rounded-2xl overflow-hidden hover:opacity-90 transition-opacity relative bg-muted">
              <Image src={GALLERY_IMAGES[3]} alt="Nighttime music festival" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden hover:opacity-90 transition-opacity relative bg-muted">
              <Image src={GALLERY_IMAGES[4]} alt="Event maintenance crew" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden hover:opacity-90 transition-opacity relative bg-muted">
              <Image src={GALLERY_IMAGES[5]} alt="Luxury restroom interior" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-headline font-black mb-10 text-foreground">Upcoming Engagements</h3>
        <div className="space-y-4">

          <div className="bg-card border border-border p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-[#006217]/50 transition-colors group shadow-sm hover:shadow-lg">
            <div className="flex items-center gap-6">
              <div className="bg-[#006217]/10 p-4 rounded-xl text-center min-w-[80px]">
                <div className="text-2xl font-black text-[#006217] dark:text-[#28a745]">12</div>
                <div className="text-xs font-bold uppercase text-[#006217] opacity-80">Nov</div>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-white tracking-widest bg-emerald-500 px-3 py-1 rounded-full mb-2 inline-block">Upcoming</span>
                <h4 className="text-xl font-bold text-foreground mt-1">UAE Smart City Forum</h4>
                <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                  <MapPin size={14} className="text-[#006217]" /> Jumeirah Beach Hotel, Dubai
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 w-full md:w-auto justify-end">
              <div className="text-right hidden md:block">
                <div className="text-sm font-bold text-foreground">120 Units Reserved</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Premium Series</div>
              </div>
              <button className="bg-[#006217] text-white p-3 rounded-full group-hover:scale-110 transition-transform shadow-lg hover:shadow-xl">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-[#006217]/50 transition-colors group shadow-sm hover:shadow-lg">
            <div className="flex items-center gap-6">
              <div className="bg-[#006217]/10 p-4 rounded-xl text-center min-w-[80px]">
                <div className="text-2xl font-black text-[#006217] dark:text-[#28a745]">05</div>
                <div className="text-xs font-bold uppercase text-[#006217] opacity-80">Dec</div>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-white tracking-widest bg-emerald-500 px-3 py-1 rounded-full mb-2 inline-block">Upcoming</span>
                <h4 className="text-xl font-bold text-foreground mt-1">Abu Dhabi Marathon {activeYear}</h4>
                <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                  <MapPin size={14} className="text-[#006217]" /> Corniche Road, Abu Dhabi
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 w-full md:w-auto justify-end">
              <div className="text-right hidden md:block">
                <div className="text-sm font-bold text-foreground">350 Units Reserved</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Standard & VIP Series</div>
              </div>
              <button className="bg-[#006217] text-white p-3 rounded-full group-hover:scale-110 transition-transform shadow-lg hover:shadow-xl">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#004d12] to-[#006217] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-[#006217]/20">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-white text-4xl md:text-6xl font-headline font-black mb-6 relative z-10 leading-tight">Planning an Event?</h2>
          <p className="text-emerald-100/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium relative z-10 leading-relaxed text-balance">
            From intimate corporate gatherings to nation-wide festivals, Kazema provides the infrastructure you can trust. Let's discuss your requirements.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="bg-white text-[#006217] px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 hover:scale-105 transition-all shadow-xl">
              Get a Quote
            </button>
            <button className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
