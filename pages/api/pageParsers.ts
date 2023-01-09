import type { TypePage } from './types';
import stringify from 'fast-safe-stringify';

export const parsePage = (page: unknown): TypePage => {
  // Kill circular references
  return JSON.parse(stringify(page)) as TypePage;
};
