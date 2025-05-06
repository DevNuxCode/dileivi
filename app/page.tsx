import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { AppointmentForm } from "@/components/AppointmentForm";

import servicios from "@/data/servicios.json";
import clientes from "@/data/clientes.json";
import testimonios from "@/data/testimonios.json";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services services={servicios} />
      <Portfolio trabajos={clientes} />
      <Testimonials testimonios={testimonios} />
      <AppointmentForm />
    </div>
  );
}