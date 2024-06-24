// import './style.css';
import { CSSProperties, FC } from "react";

import { LoadingSpinner } from "./loading.style";

type LoadingProps = {
    style?: CSSProperties;
};

const Loading: FC<LoadingProps> = ({ style }: LoadingProps) => {
    return (
        <LoadingSpinner className="lds-spinner" style={style}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </LoadingSpinner>
    );
};
export default Loading;
