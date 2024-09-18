import MetamaskWalletIcon from "../assets/metamask-icon.svg?react";

import { useWalletConnectButtonHook } from "../model";

const WalletConnectButton = () => {
    const { handleWalletConnect } = useWalletConnectButtonHook();

    return (
        <div className="flex flex-col gap-4 w-full" onClick={handleWalletConnect}>
            <h4 className="onest-semibold-18 text-white">Your wallet</h4>
            <div
                className="flex items-center
        border-2 border-silver-sand hover:border-spanish-gray duration-300 cursor-pointer rounded-[25px]"
            >
                <div className="p-5">
                    <MetamaskWalletIcon />
                </div>
                <span className="roboto-medium-15 text-white">Connect digital wallet</span>
            </div>
        </div>
    );
};

export { WalletConnectButton };
