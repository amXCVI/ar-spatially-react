import { routes } from "@/shared/config";

const ErrorPage = () => {
    return (
        <div className="bg-dark-gray w-full h-full min-h-dvh">
            <div className="flex flex-col container p-6 mx-auto">
                <h1 className="text-white mx-auto">Error</h1>
                <a href={`/${routes.home}`} className="text-white">
                    Home page
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;
