import React, { createContext, useContext, useState } from "react";

import { WalletsStore } from "./utils";

interface WalletContextProps {
    isOpenWalletConnectModal: boolean; //          / открыто окно подключения к кошельку
    openWalletConnectModal: () => void; //         / открыть окно
    closeWalletConnectModal: () => void; //        / закрыть окно

    connectedWallets: string[]; //                 / список подключенных адресов
    addConnectedWallet: (e: string) => void; //    / подключить новый адрес

    isConnectedWallet: boolean; //                 / есть ли хоть один подключенный адрес
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpenWalletConnectModal, setIsOpenWalletConnectModal] = useState<boolean>(false);
    const [connectedWallets, setConnectedWallets] = useState<string[]>(WalletsStore.getWalletAddresses());

    const openWalletConnectModal = () => {
        setIsOpenWalletConnectModal(true);
    };

    const closeWalletConnectModal = () => {
        setIsOpenWalletConnectModal(false);
    };

    const addConnectedWallet = (walletAddress: string) => {
        WalletsStore.putWalletAddress(walletAddress);

        setConnectedWallets((e) => [...e, walletAddress]);
    };

    return (
        <WalletContext.Provider
            value={{
                isOpenWalletConnectModal,
                openWalletConnectModal,
                closeWalletConnectModal,
                connectedWallets,
                addConnectedWallet,
                isConnectedWallet: !!connectedWallets.length,
            }}
        >
            {children}
        </WalletContext.Provider>
    );
};

export const useWalletContext = (): WalletContextProps => {
    const context = useContext(WalletContext);

    if (!context) {
        throw new Error("useWalletContext must be used within an WalletProvider");
    }

    return context;
};
