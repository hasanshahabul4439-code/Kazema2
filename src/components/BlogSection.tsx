import Image from "next/image";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Card from "./card";

const blogs = [
  {
    title: "The Future of Modular Corporate Housing in Remote Sites",
    excerpt: "Discover how modular housing solutions are rapidly changing the landscape of employee accommodations and site management.",
    author: "Admin",
    date: "Dec 12, 2025",
    image: "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
    category: "Insights"
  },
  {
    title: "Event Sanitation: A Comprehensive Guide to VIP Restrooms",
    excerpt: "Planning a luxury event? Here is why upgrading to VIP portable restroom trailers is the ultimate game-changer for guests.",
    author: "Kazema Team",
    date: "Nov 28, 2025",
    image: "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
    category: "Events"
  },
  {
    title: "Sustainability and Materials in Portable Construction",
    excerpt: "How modern portable cabins and ablution blocks are embracing eco-friendly materials and highly sustainable water cycles.",
    author: "Admin",
    date: "Oct 15, 2025",
    image: "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
    category: "Sustainability"
  }
];

export default function BlogSection() {
  return (
    <section className="py-10 md:py-16 w-full bg-muted/10">
      <SectionHeader
        title="Latest News & Insights"
        description="Stay updated with the latest trends in modular spaces, portable sanitation, and construction technology."
      />
      <div className="mt-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, idx) => (
            <Card
              key={idx}
              title={blog.title}
              description={blog.excerpt}
              image={blog.image}
              tag={blog.category}
              author={blog.author}
              date={blog.date}
              hideButtons={true}
              showReadMore={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
