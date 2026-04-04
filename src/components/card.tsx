import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart, ArrowUpRight, MapPin, CalendarDays } from "lucide-react";


type CardProps = {
    title: string;
    description: string;
    image: string;
    tag: string;
    location?: string;
    date?: string;
};

export default function Card({ title, description, image, tag, location, date }: CardProps) {
    return (
        <div className="group bg-card text-card-foreground border border-border rounded-xl overflow-hidden shadow-md hover:-translate-y-2 transition-all duration-500 flex flex-col h-full hover:shadow-[0_0_20px_rgba(6,182,212,0.5),0_0_40px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.7),0_0_60px_rgba(139,92,246,0.6)] hover:border-cyan-400/50">
            {/* Image */}
            <div className="h-45 overflow-hidden relative">
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
            <div className="flex-1 flex flex-col p-5">
                {/* Meta Data */}
                {(location || date) && (
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-semibold mb-3">
                        {location && (
                            <div className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-[#006217] dark:text-[#28a745]" />
                                <span>{location}</span>
                            </div>
                        )}
                        {date && (
                            <div className="flex items-center gap-1.5">
                                <CalendarDays className="w-3.5 h-3.5 text-[#006217] dark:text-[#28a745]" />
                                <span>{date}</span>
                            </div>
                        )}
                    </div>
                )}
                
                <h3 className="text-[17px] leading-tight font-bold mb-2">{title}</h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {description}
                </p>

                {/* Buttons */}
                <div className="mt-auto flex gap-2">
                    <Button className="group/quote flex-1 text-white py-2 text-xs font-bold uppercase flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                        <ShoppingCart className="w-4 h-4 transition-transform duration-300 group-hover/quote:-rotate-12 group-hover/quote:scale-110" />
                        Get Quote
                    </Button>

                    <Button className="group/details flex-1 bg-white border border-green-700 text-green-700 py-2 text-xs font-bold uppercase flex items-center justify-center gap-2 hover:bg-green-50 transition-all">
                        View Details
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/details:translate-x-1 group-hover/details:-translate-y-1" />
                    </Button>
                </div>
            </div>
        </div>
    );
}