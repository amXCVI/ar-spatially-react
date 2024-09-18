import { useState } from "react";

import { useWalletContext } from "@/shared/stores";

import { useSyncProviders } from "./use-synk-providers-hook";

const useWalletsConnectModalHook = () => {
    const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>();
    const [userAccount, setUserAccount] = useState<string>("");
    const providers = useSyncProviders();

    const { addConnectedWallet, closeWalletConnectModal, isOpenWalletConnectModal } = useWalletContext();

    // Connect to the selected provider using eth_requestAccounts.
    const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
        try {
            const accounts = (await providerWithInfo.provider.request({
                method: "eth_requestAccounts",
            })) as string[];

            setSelectedWallet(providerWithInfo);
            setUserAccount(accounts?.[0]);
            addConnectedWallet(accounts?.[0]);

            closeWalletConnectModal();
        } catch (error) {
            console.error(error);
        }
    };

    return { handleConnect, selectedWallet, userAccount, providers, isOpenWalletConnectModal, closeWalletConnectModal };
};

export { useWalletsConnectModalHook };
