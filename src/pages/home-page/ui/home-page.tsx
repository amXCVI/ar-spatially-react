import Header from "@/features/header";
import { SectionLayout } from "@/shared/ui/layouts";

const HomePage = () => {
    return (
        <SectionLayout className="">
            <div className="bg-[url(/images/landing/start-section/bg-image.svg)] h-full f-full bg-cover bg-no-repeat bg-center rounded-[40px]">
                <Header />
                <div className="container"></div>
            </div>
        </SectionLayout>
    );
};

export default HomePage;
