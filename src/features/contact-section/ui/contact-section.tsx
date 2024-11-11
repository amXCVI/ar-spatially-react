// import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

import { DefaultButton } from "@/shared/ui/buttons";
import { Title } from "@/shared/ui/text-components";

import { useContactSectionHook } from "../model";

const ContactSection = () => {
    const { project, setProject, subject, setSubject, mail, setMail, description, setDescription, handleSend } =
        useContactSectionHook();

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
                                value={project}
                                onChange={setProject}
                            />
                            <TextField
                                id="email"
                                label="Your email"
                                placeholder="Email name"
                                className="col-span-8 md:col-span-4 md:col-start-5"
                                value={mail}
                                onChange={setMail}
                            />
                            <TextField
                                id="subject"
                                label="Subject"
                                placeholder="Subject"
                                className="col-span-8"
                                value={subject}
                                onChange={setSubject}
                            />
                            <TextField
                                id="description"
                                label="Description"
                                placeholder="Description"
                                className="col-span-8 row-span-2 md:row-start-3 h-full"
                                textarea
                                value={description}
                                onChange={setDescription}
                            />

                            <div className="col-span-8 md:row-start-5 flex justify-end mt-1">
                                <Link to={`mailto:spatiallyar@gmail.com&body=${description}?subject=${subject}`}>
                                    <DefaultButton onClick={handleSend} className="text-gray90 h-min">
                                        Send info
                                    </DefaultButton>
                                </Link>
                            </div>
                        </div>
                        <div className="hidden lg:block w-[700px]">
                            {/* <Spline
                                scene="https://prod.spline.design/K1GucrIZAgAvvtHu/scene.splinecode"
                                className="h-full lg:max-h-[40dvh]"
                            /> */}
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
    value,
    onChange,
}: {
    id: string;
    label: string;
    placeholder?: string;
    className?: string;
    textarea?: boolean;
    value: string;
    onChange: (e: string) => void;
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
                    className="bg-white border-none text-gray90 manrope-regular-16 px-8 py-4 rounded-[2rem] h-full resize-none"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            ) : (
                <input
                    id={id}
                    placeholder={placeholder}
                    className="bg-white border-none text-gray90 manrope-regular-16 px-8 py-4 rounded-[2rem]"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
        </div>
    );
};

export { ContactSection };

// https://prod.spline.design/K1GucrIZAgAvvtHu/scene.splinecode
