import { Footer } from "@/features/footer";
import Header from "@/features/header";

import { DarkLayout } from "@/shared/ui/layouts";

const EventPage = () => {
    return (
        <DarkLayout className="flex flex-col justify-between">
            <Header white />

            <div
                className="container mx-auto h-[70vh] w-full px-6
                           border-4 border-raisin-black rounded-[60px]"
            ></div>

            <Footer />
        </DarkLayout>
    );
};

export { EventPage };
