import { useWalletContext } from "@/shared/stores";

const useWalletConnectButtonHook = () => {
    const { openWalletConnectModal } = useWalletContext();

    const handleWalletConnect = () => {
        openWalletConnectModal();
    };

    return { handleWalletConnect };
};

export { useWalletConnectButtonHook };
