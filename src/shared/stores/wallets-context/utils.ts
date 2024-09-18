const walletAddresesKey: string = "walletAddresesKey";

class WalletsStore {
    static putWalletAddress = (walletAddress: string) => {
        if (!walletAddress) return;

        const addresses = localStorage.getItem(walletAddresesKey);

        const parsedAddresses = addresses ? JSON.parse(addresses) : [];

        localStorage.setItem(walletAddresesKey, JSON.stringify([...parsedAddresses, walletAddress]));
    };

    static getWalletAddresses = () => {
        return [];

        // const addresses = localStorage.getItem(walletAddresesKey);

        // const parsedAddresses = addresses ? JSON.parse(addresses) : [];

        // return parsedAddresses;
    };
}

export { WalletsStore };
