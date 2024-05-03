

interface AlertProps {
    title?: string;
    type: "success" | "error" | "warning" | "info";
    message: string;
}


export function Alert ({title, type, message}: AlertProps) {

    const convert = (type: "success" | "error" | "warning" | "info") => {
        switch(type) {
            case "success":
                return "green";
            case "error":
                return "red";
            case "warning":
                return "yellow";
            case "info":
                return "blue";
        }
    }

    return(<>
        <div className={`bg-${convert(type)}-200 border border-${convert(type)}-400 text-${convert(type)}-700 px-4 py-3 rounded relative flex space-x-4 h-fit w-fit `} role="alert">
            <strong className="font-bold">{title}</strong>
            <span className="block sm:inline">
                {message}
            </span>
            <span className="f">
                <svg className={`fill-current h-6 w-6 text-${convert(type)}-500`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
        </div>
    </>)
}


export function AlertV2 ({title, type, message}: AlertProps) {
    
    const convert = (type: "success" | "error" | "warning" | "info") => {
        switch(type) {
            case "success":
                return "green";
            case "error":
                return "red";
            case "warning":
                return "yellow";
            case "info":
                return "blue";
        }
    }

    return(<>
        <div className="max-w-80 min-w-64 border rounded-xl items-center flex flex-col p-4 px-6 space-y-4">
            <div className="flex justify-between items-center w-full font-bold">
                <div className={`px-4 py-1 rounded text-white bg-${convert(type)}-600`}>{title}</div>
                <div>
                    <span className="f">
                        <svg className={`fill-current h-6 w-6 text-${convert(type)}-500`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                </div>
            </div>
            <div className="text-start w-full">
                {message}
            </div>
        </div>
    </>)
}