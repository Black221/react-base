import Button from "./Button";



interface Cart {
    img: string;
    title: string;
    subtitle?: string;
    width?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
    height?: "36" | "44" | "52" | "64" | "72" | "80";
    description: string;
    tags: string[];
    extra?: React.ReactElement
}

export const Card = ({img, title, description, tags, width = "sm", height = "36"}: Cart) => {

    return (<>
        <div className={`max-w-${width} rounded-md overflow-hidden shadow-lg`}>
            <div className={`w-full max-h-${height} flex items-center justify-center  overflow-hidden`}>
                <img className={`w-full object-center h-auto`} src={img} alt={title} />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {tags.map((item) => {
                    return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item}</span>
                })}
            </div>
        </div>
        
    </>)
}


export const  CardH = ({img, title, subtitle, description, extra}: Cart) => {

    return (<>
        <div className="max-w-md w-full h-fit lg:max-w-full lg:flex">
            <div className="w-48 h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <img className="w-full h-full object-cover" src={img} alt={title} />
            </div>
            <div className="border-r border-b border-l h-fit border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8 h-fit">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        {subtitle}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base h-fit overflow-hidden">
                        {description}
                    </p>
                </div>
                {extra}
            </div>
        </div>
    </>)
}


interface Props {
    subtitle: string;
    title: string;
    description: string;
    img: string;
    button: ButtonProps;
}

interface ButtonProps {
    label: string;
    action?: () => void;
}

export const CardR = ({subtitle, title, description, img, button}: Props) => {

    return (<>
        <div className="border w-fit rounded-xl shadow-lg p-4 space-y-2 min-w-80">
            <div className="flex items-center justify-between">
                <div className="text-sm font-bold">{subtitle}</div>
                <Button {...button} />
            </div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-gray-500">{description}</p>
            <div className="flex items-center justify-center w-full h-48 overflow-hidden rounded-lg">
                <img src={img} alt={title} className="w-full h-auto object-cover" />
            </div>
        </div>
    </>)
}

interface Status {
    left: React.ReactElement;
    right: React.ReactElement;
    status: "pending" | "completed" | "error";
    percentage: number;
    message: string;
}

export const CardStatus = ({left, right, status, message, percentage = 5}: Status) => {

    return (<>
        <div className="space-y-4 p-5 border rounded-md shadow-lg bg-white max-w-80">
            <div className="w-full flex items-center justify-between">
                {left} {right}
            </div>
            <div className="font-semibold">
                {message}
            </div>
            <div className="">
                {status === "pending" && <div className="py-2 font-semibold rounded-md">Pending</div>}
                {status === "completed" && <div className="py-2 font-semibold rounded-md">Completed</div>}
                {status === "error" && <div className="py-2 font-semibold rounded-md">Error</div>}
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: percentage+"%"}}></div>
                </div>
            </div>
        </div>
    </>)
}