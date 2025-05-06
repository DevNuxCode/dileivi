"use client";

import Image from "next/image";
import { Testimonio } from "@/lib/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialsProps {
  testimonios: Testimonio[];
}

export function Testimonials({ testimonios }: TestimonialsProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
      />
    ));
  };

  return (
    <section id="testimonios" className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <Badge variant="outline" className="mb-2">Testimonios</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight">Lo Que Dicen Nuestras Clientas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre por qué nuestras clientas nos eligen y confían en nuestro trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={testimonio.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/30 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    {renderStars(testimonio.rating)}
                  </div>
                  <p className="italic">{testimonio.comment}</p>
                </CardContent>
                <CardFooter className="flex items-center gap-3 pt-2">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image 
                      src={testimonio.image} 
                      alt={testimonio.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonio.name}</h4>
                    <p className="text-sm text-muted-foreground">Cliente</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}