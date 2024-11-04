import PlusIcon from "../assets/plus-icon.svg?react";

import { useCreateFeedFormHook, useCreateFeedModalHook } from "../model";

const CreateFeedModal = () => {
    const { isOpenModal, toggleIsOpenModal, modalRef } = useCreateFeedModalHook();

    const { files, content, handleFileChange, onChangeContent, createPost } = useCreateFeedFormHook({
        toggleIsOpenModal,
    });

    return (
        <div className={`block`}>
            <div
                className={`flex flex-col justify-center items-center gap-2 duration-500
                    cursor-pointer hover:bg-white50 w-14 h-14
                    fixed top-10 right-10
                    border border-blue-accent bg-white30 rounded-full p-4 backdrop-blur`}
                onClick={toggleIsOpenModal}
            >
                <PlusIcon />
            </div>

            <div
                className={`fixed top-0 ${isOpenModal ? "right-0 bottom-0 left-0 z-10" : "!h-0 overflow-hidden"} flex justify-center items-center`}
            >
                <div
                    className={`container duration-500 ${
                        isOpenModal ? "opacity-1" : "opacity-0"
                    } flex flex-col items-center justify-between overflow-hidden z-50
                                backdrop-blur-xl rounded-[34px] border border-white h-min
                                mx-10 max-w-prose
                                p-6 gap-4`}
                    style={{
                        background:
                            "linear-gradient(105.87deg, rgba(133, 133, 133, 0.4) 3.04%, rgba(82, 82, 82, 0.24) 99.24%)",
                    }}
                    ref={modalRef}
                >
                    <div className="">
                        <textarea value={content} onChange={onChangeContent} autoFocus rows={5} />
                    </div>
                    <div className="">
                        <input
                            type="file"
                            accept="image/*, video/*"
                            multiple
                            onChange={handleFileChange}
                            className="mb-4 p-2 border rounded"
                        />
                        <div className="flex flex-wrap">
                            {files.map((file, index) => (
                                <div key={index} className="m-2">
                                    {file.type.startsWith("image/") ? (
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt={file.name}
                                            className="w-24 h-24 object-cover rounded"
                                        />
                                    ) : (
                                        <video width="100" height="100" controls className="rounded">
                                            <source src={URL.createObjectURL(file)} type={file.type} />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                    <p className="text-center mt-2">{file.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="border px-4 py-0.5 rounded-xl" onClick={createPost}>
                        Create post
                    </button>
                </div>
            </div>
        </div>
    );
};

export { CreateFeedModal };
