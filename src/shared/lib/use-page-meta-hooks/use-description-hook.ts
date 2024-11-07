import { useEffect, useRef } from "react";

const useDescription = (desc: string) => {
    const documentDefined = typeof document !== "undefined";

    const originalDescription = useRef(
        documentDefined ? document.getElementsByTagName("META").namedItem("description")?.textContent : null,
    );

    const el = document.querySelector("meta[name='description']");

    useEffect(() => {
        if (!el || !documentDefined) return;

        if (originalDescription.current !== desc) {
            el.setAttribute("content", desc);
        }

        return () => {
            if (originalDescription.current && el) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                el.setAttribute("content", originalDescription.current);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [el]);
};

export { useDescription };
