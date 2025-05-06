"use client";

import { useState } from "react";
import Image from "next/image";
import { Cliente } from "@/lib/types";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PortfolioProps {
  trabajos: Cliente[];
}

export function Portfolio({ trabajos }: PortfolioProps) {
  const [selectedImage, setSelectedImage] = useState<Cliente | null>(null);

  const handleImageClick = (trabajo: Cliente) => {
    setSelectedImage(trabajo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portafolio" className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <Badge variant="outline" className="mb-2">Nuestro Portafolio</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight">Trabajos Destacados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra galería de trabajos recientes y descubre el arte que podemos crear para ti.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {trabajos.map((trabajo, index) => (
            <motion.div
              key={trabajo.id}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleImageClick(trabajo)}
            >
              <Image
                src={trabajo.image}
                alt={trabajo.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <h3 className="text-white font-medium text-sm md:text-base">{trabajo.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-6"
            onClick={closeModal}
          >
            <motion.div 
              className="relative max-w-3xl w-full max-h-[90vh] flex flex-col"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-square md:aspect-auto md:h-[70vh] overflow-hidden rounded-t-lg">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-background p-4 rounded-b-lg">
                <h3 className="text-xl font-semibold font-serif">{selectedImage.name}</h3>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </div>
              <button 
                onClick={closeModal}
                className={cn(
                  "absolute top-2 right-2 bg-black/50 text-white rounded-full p-1",
                  "hover:bg-black/70 transition-colors"
                )}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}