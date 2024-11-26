import { ReactNode, useEffect, useState } from "react";

import ErrorPage from "@/pages/error-page";

interface ErrorBoundaryProps {
    children: ReactNode;
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
    const [hasError, setHasError] = useState(false);

    const errorHandler = (error: string) => {
        setHasError(true);
        console.log("Error caught in ErrorBoundary:", error);
    };

    useEffect(() => {
        const handleError = (event: { error: string }) => {
            errorHandler(event.error);
        };

        window.addEventListener("error", handleError);

        return () => {
            window.removeEventListener("error", handleError);
        };
    }, []);

    if (hasError) {
        return <ErrorPage />;
    }

    return children;
};

export { ErrorBoundary };
