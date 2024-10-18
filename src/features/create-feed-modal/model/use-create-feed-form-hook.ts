import { ChangeEvent, useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { useAppDispatch } from "@/shared/lib/redux-service";
import { allFeedsActions } from "@/shared/stores/feeds-store";

const useCreateFeedFormHook = ({ toggleIsOpenModal }: { toggleIsOpenModal: () => void }) => {
    const dispatch = useAppDispatch();

    const [files, setFiles] = useState<File[]>([]);
    const [content, setContent] = useState<string>("");

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const filesArray = event.target.files;

        if (filesArray) {
            setFiles(Array.from(filesArray));
        }
    };

    const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const createPost = () => {
        // const promises = files.map(async (file) => {
        //     return { ...(await ApiEndpoints.file.uploadFile({ file })), fileType: file.type };
        // });

        // Promise.all(promises).then((res) => {
        //     console.log(res);
        ApiEndpoints.post
            .createPost({
                content,
                location: "Black",
                lat: 43.282829,
                lng: 33.91957,
                videoFiles: files.filter((item) => item.type.includes("video/")),
                imageFiles: files.filter((item) => item.type.includes("image/")),
            })
            .then((res) => {
                dispatch(allFeedsActions.unshiftPostToList({ post: res }));
                toggleIsOpenModal();
            });
        // });
    };

    return { files, content, handleFileChange, onChangeContent, createPost };
};

export { useCreateFeedFormHook };
