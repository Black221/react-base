
interface Props {
    label: string;
    className?: string;
    onClick?: () => void;
    backgroundColor?: string;
}

export default function Button ({ label, className = "", backgroundColor = "bg-main", onClick} : Props) {

    // filter border and rounded corners
    const hasBorder: boolean = className.includes("border");
    const hasRounded: boolean = className.includes("rounded");

    return (<>
        <button 
            className={`${className} ${backgroundColor} p-2 px-4 ${!hasBorder ? "border" : ""} ${!hasRounded ? "rounded-md" : ""}`} 
            onClick={onClick}
        >
            {label}
        </button>
    </>)
}