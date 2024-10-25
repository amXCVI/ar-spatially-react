import { Fragment } from "react/jsx-runtime";

import { ObjectViewer } from "@/widgets/object-viewer";

import { AllObjectsList } from "@/features/all-objects-list/ui/all-objects-list";

const ObjectsPage = () => {
    return (
        <Fragment>
            <AllObjectsList />
            <ObjectViewer />
        </Fragment>
    );
};

export { ObjectsPage };
