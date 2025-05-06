export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export interface Cliente {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface Testimonio {
  id: number;
  name: string;
  image: string;
  rating: number;
  comment: string;
}