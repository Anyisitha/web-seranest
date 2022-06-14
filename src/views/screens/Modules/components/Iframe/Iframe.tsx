import {FC} from "react";

interface IIframeProps {
    url?: string;
    onClick: () => void;
}

const Iframe: FC<IIframeProps> = ({url, onClick}) => {
    return (
        <>
            <span
                className="text-white absolute z-[1] right-[5%] top-[3%] cursor-pointer"
                onClick={() => onClick()}
            >
            X
        </span>
            <iframe
                src={url}
                height="100%"
                width="100%"
                title="Av-iframe"
            ></iframe>
        </>
    );
}

export default Iframe;