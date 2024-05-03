

interface Icon {    
    name: string;    
    size: number;    
    color: string;    
    onClick: () => void;
}

export default function Icon ({ name, size, color, onClick}: Icon) {

    return(<>
        <div className="flex flex-wrap items-center justify-center border p-2 rounded-full">
            <i className={name} style={{fontSize: size, color: color}} onClick={onClick}></i>
        </div>
    </>)
}