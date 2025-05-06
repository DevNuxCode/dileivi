import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 dark:bg-muted/10 border-t border-border/50">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Name */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo100.png"
                alt="Dileivi Bello Studio Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-serif text-xl font-bold">Dileivi Bello Studio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Estudio especializado en manicure profesional, creando diseños únicos y a la medida de cada clienta.
            </p>
          </div>

          {/* Column 2: Menu */}
          <div>
            <h3 className="font-medium text-lg mb-4">Menú</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-sm hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-sm hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#portafolio" className="text-sm hover:text-primary transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="text-sm hover:text-primary transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#agendar" className="text-sm hover:text-primary transition-colors">
                  Agendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">
                  Políticas de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-sm hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="font-medium text-lg mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://www.instagram.com/dibu.33.cl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent/50 hover:bg-accent p-2 rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link 
                href="https://www.tiktok.com/@dilei.bello/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent/50 hover:bg-accent p-2 rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M20 9V7a4 4 0 0 0-4-4h-2"></path>
                  <path d="M15 7v8a7 7 0 0 1-7 7v0a7 7 0 0 1-7-7v0"></path>
                  <path d="M15 9a4 4 0 0 1 4 4"></path>
                </svg>
              </Link>
              <Link 
                href="https://www.youtube.com/channel/UCVlcSQetp1xvosu8hQjrSRg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent/50 hover:bg-accent p-2 rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">
                <strong>Dirección:</strong> Av. Jose Miguel Carrera 1234, San Miguel
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Email:</strong> dileivicbello@gmail.com
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Teléfono:</strong> +56 9 2044 9036
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Dileivi Bello Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}