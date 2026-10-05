import { Farmaco } from '../types';

// Auto-descoberta dinâmica de todos os fármacos colocados na pasta drugs/
// Adicionar um novo remédio = apenas criar novo_farmaco.ts aqui dentro!
const modules = (import.meta as any).glob('./drugs/*.ts', { eager: true });

export const DRUGS: Farmaco[] = Object.values(modules)
  .map((mod: any) => mod.default)
  .filter((d): d is Farmaco => Boolean(d && d.id && d.nome))
  .sort((a, b) => a.nome.localeCompare(b.nome));

export const getDrugById = (id: string): Farmaco | undefined =>
  DRUGS.find(d => d.id === id);
