import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 pb-8 overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo100.png"
              alt="Dileivi Bello Studio Logo"
              width={100}
              height={100}
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight">
            <span className="block">Dileivi Bello Studio</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 font-normal">Arte en tus manos</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto">
            Expertos en manicure profesional. Creamos diseños exclusivos que te 
            harán destacar con un toque de elegancia y personalidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-base">
              <Link href="#agendar">
                <Calendar className="mr-2 h-5 w-5" /> Agendar Cita
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
              <Link href="#servicios">Ver Servicios</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}