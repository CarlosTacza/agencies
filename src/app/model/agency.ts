import { Optional } from '@angular/core';

export interface Agency {
    id: number;
    agencia: string;
    distrito: String;
    provincia: String;
    departamento: String;
    direccion: String;
    lon?: number;
    lat?: number;
  }