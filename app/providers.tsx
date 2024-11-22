"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  Chain,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import {
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const mainnet = {
  id: 1,
  name: 'Ethereum',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://virtual.mainnet.rpc.tenderly.co/3f59caed-35bb-496d-9b3d-40f299ec6f16'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Etherscan',
      url: 'https://etherscan.io',
      apiUrl: 'https://api.etherscan.io/api',
    },
  },
  contracts: {
    ensRegistry: {
      address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    },
    ensUniversalResolver: {
      address: '0xce01f8eee7E479C928F8919abD53E553a36CeF67',
      blockCreated: 19_258_213,
    },
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 14_353_601,
    },
  },
} as const satisfies Chain;

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <NextUIProvider navigate={router.push}>
            <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
          </NextUIProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
