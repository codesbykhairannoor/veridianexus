import { ChakraProvider } from '@chakra-ui/react';
import { ChakraNextAppProvider } from '@chakra-ui/next-js';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ChakraNextAppProvider>
      <ChakraProvider>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </SessionProvider>
      </ChakraProvider>
    </ChakraNextAppProvider>
  );
}