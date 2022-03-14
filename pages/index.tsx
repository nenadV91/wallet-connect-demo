import type { NextPage } from "next";
import { walletconnect } from "connectors";
import { useWeb3React } from "@web3-react/core";
import { useTryActivation } from "hooks/useTryActivation";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const Home: NextPage = () => {
  const { account, connector } = useWeb3React();
  const tryActivation = useTryActivation()

  const handleDisconnect = () => {
    if (connector instanceof WalletConnectConnector) {
      connector.close()
    }
  }

  return (
    <div>
      {account ? (
        <div>
          <div>Connected with: {account}</div>
          <br />
          <div>
            <button>Make transaction</button>
            <button onClick={handleDisconnect}>Disconnect</button>
          </div>
        </div>
      ) : (
        <button onClick={() => tryActivation(walletconnect)}>
          Connect with WalletConnect
        </button>
      )}
    </div>
  );
};

export default Home;
