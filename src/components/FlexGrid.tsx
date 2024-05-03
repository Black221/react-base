


interface FlexGridProps {
    children: React.ReactNode;
    
}
export const FlexGrid = ({ children }: FlexGridProps) => {

    return (<>
        <div className="flex mb-4">
            {children}
        </div>
    </>)
}

interface FlexGridItemProps {
    children: React.ReactNode;
}
export const FlexGridItem = ({ children }: FlexGridItemProps) => {

    return (<>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">
            {children}
        </div>
    </>)
}