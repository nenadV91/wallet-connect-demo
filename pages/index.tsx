import type { NextPage } from "next";
import { walletconnect } from "connectors";
import { useWeb3React } from "@web3-react/core";
import { useTryActivation } from "hooks/useTryActivation";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { types, data, domain } from 'example-data'

const Home: NextPage = () => {
  const { account, connector, library } = useWeb3React();
  const tryActivation = useTryActivation()

  const handleDisconnect = () => {
    if (connector instanceof WalletConnectConnector) {
      connector.close()
    }
  }

  const mockTransaction = async () => {
    try {
      const signer = library.getSigner()
      const response = await signer._signTypedData(domain, types, data)
      console.log('response', response)
    } catch (error) {
      console.log('debugging mockTransaction error', error)
    }
  }

  return (
    <div>
      {account ? (
        <div>
          <div>Connected with: {account}</div>
          <br />
          <div>
            <button onClick={mockTransaction}>Mock transaction</button>
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
