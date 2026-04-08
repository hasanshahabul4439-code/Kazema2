import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingCart, ArrowUpRight, CalendarDays, User, MapPin } from "lucide-react";

type CardProps = {
    title: string;
    description: string;
    image: string;
    tag: string;
    location?: string;
    date?: string;
    author?: string;
    hideButtons?: boolean;
    showReadMore?: boolean;
    href?: string;
};

export default function Card({ title, description, image, tag, location, date, author, hideButtons, showReadMore, href }: CardProps) {
    const cardContent = (
        <div className="group bg-card text-card-foreground border border-border rounded-xl overflow-hidden shadow-md hover:-translate-y-2 transition-all duration-500 flex flex-col h-full hover:shadow-[0_0_20px_rgba(6,182,212,0.5),0_0_40px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.7),0_0_60px_rgba(139,92,246,0.6)] hover:border-cyan-400/50 cursor-pointer">
            {/* Image */}
            <div className="h-32 overflow-hidden relative">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Tag */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-[10px] font-bold uppercase rounded">
                    {tag}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col p-4">
                {/* Meta Data */}
                {(location || date || author) && (
                    <div className="flex items-center justify-between w-full text-[11px] text-muted-foreground font-semibold mb-3">
                        <div className="flex items-center gap-3">
                            {author && (
                                <div className="flex items-center gap-1.5">
                                    <User className="w-3 h-3 text-[#006217] dark:text-[#28a745]" />
                                    <span>{author}</span>
                                </div>
                            )}

                            {date && (
                                <div className="flex items-center gap-1.5">
                                    <CalendarDays className="w-3 h-3 text-[#006217] dark:text-[#28a745]" />
                                    <span>{date}</span>
                                </div>
                            )}
                        </div>

                        {location && (
                            <div className="flex items-center gap-1.5">
                                <MapPin className="w-3 h-3 text-[#006217] dark:text-[#28a745]" />
                                <span>{location}</span>
                            </div>
                        )}
                    </div>
                )}
                
                <h3 className="text-[15px] sm:text-base leading-tight font-bold mb-1 line-clamp-2 min-h-[2.5rem]">{title}</h3>

                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {description}
                </p>

                {/* Buttons */}
                {!hideButtons && (
                    <div className="mt-auto flex flex-row gap-1.5 sm:gap-2">
                        <Button className="group/quote flex-1 text-white h-8 text-[9px] sm:text-[10px] font-bold uppercase flex items-center justify-center gap-1 px-1.5 sm:px-2 hover:opacity-90 transition-all">
                            <ShoppingCart className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover/quote:-rotate-12 group-hover/quote:scale-110" />
                            Get Quote
                        </Button>

                        <Button className="group/details flex-1 bg-white border border-green-700 text-green-700 h-8 text-[9px] sm:text-[10px] font-bold uppercase flex items-center justify-center gap-1 px-1.5 sm:px-2 hover:bg-green-50 transition-all">
                            Details
                            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover/details:translate-x-1 group-hover/details:-translate-y-1" />
                        </Button>
                    </div>
                )}

                {/* Read More Link (Alternative to Buttons) */}
                {hideButtons && showReadMore && (
                    <div 
                      className="mt-auto inline-flex items-center gap-2 text-[#006217] dark:text-[#28a745] text-xs font-bold uppercase group/link max-w-max hover:opacity-80 transition-opacity"
                    >
                      Read More
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </div>
                )}
            </div>
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="block h-full no-underline">
                {cardContent}
            </Link>
        );
    }

    return cardContent;
}