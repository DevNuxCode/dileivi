"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Service } from "@/lib/types";
import { Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServicesProps {
  services: Service[];
}

export function Services({ services }: ServicesProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-16 px-4 md:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <Badge variant="outline" className="mb-2">Nuestros Servicios</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight">Tratamientos de Belleza</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra amplia gama de servicios diseñados para realzar tu belleza natural
            y brindarte una experiencia única.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 } 
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="h-full overflow-hidden border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                <div className="relative h-52 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.name}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredCard === service.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-row gap-4">
                    <div className="flex items-center text-sm">
                      <DollarSign className="mr-1 h-4 w-4 text-muted-foreground" />
                      <span className="font-semibold">{service.price}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                      <span>{service.duration}</span>
                    </div>

                    <Button asChild className="mt-2">
                      <Link href="#agendar" onClick={() => (true)}>
                        Reservar Hora
                      </Link>
                    </Button>


                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}