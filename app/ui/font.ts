import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['700', '400'] });
export const poppins = Poppins({
    subsets: ["devanagari"],
    weight: ['400', '500', '600', '700', '900']
})