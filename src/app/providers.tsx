'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ChakraNextAdapter } from '@chakra-ui/next-js';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ChakraProvider value={ChakraNextAdapter}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}