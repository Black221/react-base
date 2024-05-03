 

interface Props {
    items: Item[];
}

interface Item {
    img: React.ReactElement;
    name: string;
    description: string;
    action: React.ReactElement;
}

export default function List ({ items }: Props) {

    return(<>
        <div>
            {items.map((item, index) => {

                return (<>
                    <div key={index}>
                        <div className="flex items-center space-x-4">
                            <div>
                                {item.img}
                            </div>
                            <div className="flex-1">
                                <div className="text-lg font-bold">{item.name}</div>
                                <div className="text-gray-500">{item.description}</div>
                            </div>
                            <div>
                                {item.action}
                            </div>
                        </div>
                    </div>
                </>)
            })
        }
        </div>
    </>)
}