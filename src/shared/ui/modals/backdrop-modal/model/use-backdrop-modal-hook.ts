import { useOutsideClick } from "@/shared/lib/use-outside-click";

const useBackdropModalHook = ({ closeModal, isOpenModal }: { closeModal?: () => void; isOpenModal: boolean }) => {
    const modalRef = useOutsideClick(() => {
        if (closeModal && isOpenModal) {
            // ? Не уверен, что это нужно ? // oops
            window.history.replaceState(null, "");
            closeModal();
        }
    });

    if (isOpenModal) {
        // push to history when modal opens
        window.history.pushState(null, "", window.location.href);

        // close modal on 'back'
        window.onpopstate = () => {
            if (closeModal) {
                closeModal();
            }
        };
    }

    return { modalRef };
};

export { useBackdropModalHook };
