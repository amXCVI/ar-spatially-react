import Spline from "@splinetool/react-spline";

import { DefaultButton } from "@/shared/ui/buttons";
import { Title } from "@/shared/ui/text-components";

const ContactSection = () => {
    return (
        <div className="flex flex-col justify-between">
            <div
                className="container mx-auto max-w-7xl xl:max-w-screen-2xl rounded-[40px]
                           overflow-hidden
                          "
            >
                <div className="bg-light-bg px-4 py-10 md:p-10">
                    <Title title="Contact form" className="mb-6" />
                    <div className="flex w-full">
                        <div className="grid grid-cols-8 grid-rows-5 grid-flow-col gap-4 w-full">
                            <TextField
                                id="project-name"
                                label="Project name"
                                placeholder="Project name"
                                className="col-span-4"
                            />
                            <TextField
                                id="your-email"
                                label="Your email"
                                placeholder="Email name"
                                className="col-span-4 col-start-5"
                            />
                            <TextField id="subject" label="Subject" placeholder="Subject" className="col-span-8" />
                            <TextField
                                id="Description"
                                label="Description"
                                placeholder="Description"
                                className="col-span-8 row-span-2 row-start-3 h-full"
                                textarea
                            />

                            <div className="col-span-8 row-start-5 flex justify-end">
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
        </div>
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
