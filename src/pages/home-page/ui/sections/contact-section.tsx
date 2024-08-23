import Spline from "@splinetool/react-spline";

import { DefaultButton } from "@/shared/ui/buttons";
import { Title } from "@/shared/ui/text-components";

const ContactSection = () => {
    return (
        <section className="mt-11 px-6" id={"contact"}>
            <div
                className="container mx-auto 
                           rounded-[40px] overflow-hidden
                           flex flex-col gap-1
                          "
            >
                <div className="bg-light-bg px-9 py-6 gap-5">
                    <Title title="Contact form" className="mb-6" />
                    <div className="flex w-full">
                        <div className="grid grid-cols-8 grid-rows-6 md:grid-rows-5 grid-flow-col gap-5 w-full">
                            <TextField
                                id="project-name"
                                label="Project name"
                                placeholder="Project name"
                                className="col-span-8 md:col-span-4"
                            />
                            <TextField
                                id="your-email"
                                label="Your email"
                                placeholder="Email name"
                                className="col-span-8 md:col-span-4 md:col-start-5"
                            />
                            <TextField id="subject" label="Subject" placeholder="Subject" className="col-span-8" />
                            <TextField
                                id="Description"
                                label="Description"
                                placeholder="Description"
                                className="col-span-8 row-span-2 md:row-start-3 h-full"
                                textarea
                            />

                            <div className="col-span-8 md:row-start-5 flex justify-end mt-1">
                                <DefaultButton className="text-gray90 h-min">Send info</DefaultButton>
                            </div>
                        </div>
                        <div className="hidden lg:block w-[700px]">
                            <Spline
                                scene="https://prod.spline.design/K1GucrIZAgAvvtHu/scene.splinecode"
                                className="h-full lg:max-h-[40dvh]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TextField = ({
    id,
    label,
    className,
    placeholder,
    textarea = false,
}: {
    id: string;
    label: string;
    placeholder?: string;
    className?: string;
    textarea?: boolean;
}) => {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            <label htmlFor={id} className="button-font text-gray90 ml-8">
                {label}
            </label>
            {textarea ? (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    className="bg-white border-none text-gray90 manrope-regular-16 px-8 py-4 rounded-[2rem] h-full"
                />
            ) : (
                <input
                    id={id}
                    placeholder={placeholder}
                    className="bg-white border-none text-gray90 manrope-regular-16 px-8 py-4 rounded-[2rem]"
                />
            )}
        </div>
    );
};

export { ContactSection };

// https://prod.spline.design/K1GucrIZAgAvvtHu/scene.splinecode
