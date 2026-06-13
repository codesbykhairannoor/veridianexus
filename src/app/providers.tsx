'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ChakraNextJsProvider } from '@chakra-ui/next-js';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ChakraNextJsProvider>
        <ChakraProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </ChakraProvider>
      </ChakraNextJsProvider>
    </SessionProvider>
  );
}