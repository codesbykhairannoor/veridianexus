import { ChakraProvider } from '@chakra-ui/react';
import { ChakraNextThemeProvider } from '@chakra-ui/next-js';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <ChakraNextThemeProvider>
        <ChakraProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </ChakraProvider>
      </ChakraNextThemeProvider>
    </SessionProvider>
  );
}