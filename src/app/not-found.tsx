import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveLeft, Phone, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-4 min-h-[70vh] relative overflow-hidden">
      {/* Background Blueprint Pattern */}
      <div className="absolute inset-0 blueprint-pattern opacity-20 -z-10" />
      
      {/* Decorative Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#006217]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-xl w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Large 404 Display */}
        <div className="relative inline-block">
          <h1 className="text-[12rem] md:text-[15rem] font-black leading-none text-[#006217]/10 dark:text-[#006217]/20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-24 h-24 text-[#006217] opacity-80" aria-hidden="true" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            Lost in the Field?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-[90%] mx-auto">
            The modular space you're looking for was either moved, renamed, or doesn't exist. Let's get you back on track.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button asChild className="bg-[#006217] hover:bg-[#004e12] text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-[#006217]/25 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
            <Link href="/">
              <MoveLeft className="mr-2 h-5 w-5" />
              Return Home
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="px-8 py-6 text-base font-semibold border-[#006217]/20 hover:border-[#006217] hover:bg-[#006217]/5 transition-all w-full sm:w-auto">
            <Link href="/support">
              <Phone className="mr-2 h-5 w-5" />
              Contact Support
            </Link>
          </Button>
        </div>

        {/* Branding Detail */}
        <div className="pt-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
            Kazema Modular Solutions
          </p>
        </div>
      </div>
    </main>
  );
}
