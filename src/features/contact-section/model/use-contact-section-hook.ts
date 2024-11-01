import { useState } from "react";

const useContactSectionHook = () => {
    const [project, setProject] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [mail, setMail] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleSend = () => {};

    return { project, setProject, subject, setSubject, mail, setMail, description, setDescription, handleSend };
};

export { useContactSectionHook };
