'use client';

import { ChakraProvider } from '@chakra-ui/react'; // ✅ Added
import { ChakraNextThemeProvider } from '@chakra-ui/next-js'; // ✅ Added
import { SessionProvider } from 'next-auth/react'; // ✅ Added
import { ThemeProvider } from 'next-themes'; // ✅ Added
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraNextThemeProvider>
      <ChakraProvider>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </SessionProvider>
      </ChakraProvider>
    </ChakraNextThemeProvider>
  );
}