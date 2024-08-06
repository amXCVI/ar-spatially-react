import Spline from "@splinetool/react-spline";

import { DefaultButton } from "@/shared/ui/buttons";
import { Title } from "@/shared/ui/text-components";

const ContactSection = () => {
    return (
        <div className="flex flex-col justify-between">
            <div
                className="container mx-auto rounded-[40px]
                           overflow-hidden
                          "
            >
                <div className="bg-light-bg px-4 py-10 md:p-10">
                    <Title title="Contact form" className="mb-6" />
                    <div className="grid grid-cols-8 md:grid-cols-11 grid-rows-5 grid-flow-col gap-4">
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
                        <div className="col-span-3 row-span-5 col-start-9 row-start-1 hidden md:block">
                            <Spline
                                scene="https://prod.spline.design/K1GucrIZAgAvvtHu/scene.splinecode"
                                className="h-full lg:max-h-[40dvh]"
                                // style={{ width: "150%", height: "160%" }}
                                // className="h-full max-h-[80dvh] lg:max-h-[50dvh]"
                                // className="object-contain h-full max-h-[80dvh] lg:max-h-[50dvh]"
                            />
                        </div>
                        {/* <img src={icon} className="col-span-3 row-span-5 col-start-9 row-start-1 hidden md:block" /> */}
                        <div className="col-span-8 row-start-5 flex justify-end">
                            <DefaultButton className="text-gray90 h-min">Send info</DefaultButton>
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
            <label htmlFor={id} className="manrope-regular-12 text-black ml-8">
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
