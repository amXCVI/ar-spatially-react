import { useOutsideClick } from "@/shared/lib/use-outside-click";

const useBackdropModalHook = ({ closeModal }: { closeModal?: () => void }) => {
    const modalRef = useOutsideClick(() => {
        if (closeModal) {
            closeModal();
        }
    });

    return { modalRef };
};

export { useBackdropModalHook };
