import { useCallback } from "react";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useWeb3React } from "@web3-react/core";

export function useTryActivation() {
  const { activate, connector } = useWeb3React();

  return useCallback(
    async (connector: AbstractConnector | undefined) => {

      if (connector instanceof WalletConnectConnector) {
        connector.walletConnectProvider = undefined;
      }

      if (connector) {
        activate(connector, undefined, true).catch((error) => {
          console.log("Error connecting to wallet", error);
        });
      }
    },
    [activate]
  );
}