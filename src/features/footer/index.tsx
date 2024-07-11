import { Socials } from "@/shared/ui/socials";

const Footer = () => {
    return (
        <footer className="container mx-auto flex flex-col md:flex-row justify-between mt-20 lg:mt-0">
            <div className="mt-auto text-white">© 2024 AR Spatially</div>

            <div className="flex flex-col md:items-end gap-2 ml-auto">
                <div className="medium-14 text-spanish-gray">Spatially AR-Planet</div>
                <div className="light-12 text-spanish-gray">helps businesses create unique AR content</div>
                <Socials className="mt-2" itemClassName="fill-spanish-gray" />
            </div>
        </footer>
    );
};

export { Footer };
