import { useOutsideClick } from "@/shared/lib/use-outside-click";

import { formatAddress, useWalletsConnectModalHook } from "../model";

const WalletConnectModal = () => {
    const { handleConnect, selectedWallet, userAccount, providers, isOpenWalletConnectModal, closeWalletConnectModal } =
        useWalletsConnectModalHook();

    const modalRef = useOutsideClick(() => {
        closeWalletConnectModal();
    });

    if (!isOpenWalletConnectModal) {
        return <></>;
    }

    return (
        <div
            className="fixed top-0 right-0 bottom-0 left-0 
                        flex justify-center items-center 
                        backdrop-blur-sm z-[100] p-0 sm:p-5 pt-40 sm:pt-5 bg-white5 overflow-y-scroll"
        >
            <div
                ref={modalRef}
                className="bg-dark-bg shadow-popup-shadow sm:rounded-[60px] p-14 flex flex-col gap-10
                            w-full max-w-2xl"
            >
                <h2 className="typography-38-bold text-white">Wallets Detected:</h2>
                <div className="flex flex-col gap-3">
                    {providers.length > 0 ? (
                        providers?.map((provider: EIP6963ProviderDetail) => (
                            <button
                                key={provider.info.uuid}
                                onClick={() => handleConnect(provider)}
                                className="flex items-center gap-5 p-3 border border-color2 rounded-xl hover:bg-dark60 duration-300"
                            >
                                <img src={provider.info.icon} alt={provider.info.name} />
                                <div className="typography-14-regular text-text_light">{provider.info.name}</div>
                            </button>
                        ))
                    ) : (
                        <div className="typography-14-regular text-text_light">No Announced Wallet Providers</div>
                    )}
                </div>
                <hr />
                <h2 className="typography-38-bold text-white">{userAccount ? "" : "No "}Wallet Selected</h2>
                {userAccount && selectedWallet && (
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-5 typography-14-regular text-text_light">
                            <img src={selectedWallet.info.icon} alt={selectedWallet.info.name} />
                            <div>{selectedWallet.info.name}</div>
                            <div>({formatAddress(userAccount)})</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export { WalletConnectModal };
