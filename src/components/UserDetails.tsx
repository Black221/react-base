import Icon from "./Icon";


interface UserDetails {
    img: string;
    name: string;
    email?: string;
    phone?: string;
    website?: string;
    address?: string;
    company?: string;
    date?: string;
    id?: string;
    view?: string;
    edit?: string;
}


export const SmallUserDetails = ({img, name, date}: UserDetails) => {

    return (<>
        <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src={img} alt="Avatar of Jonathan Reinink"/>
            <div className="text-sm">
                <p className="text-gray-900 leading-none">{name}</p>
                <p className="text-gray-600">{date}</p>
            </div>
        </div>
    </>)
}

export const UserDetails = ({id, img, name, email, phone, address, view, edit}: UserDetails) => {

    return (<>
        <div className="p-4 border rounded-xl w-fit space-y-1">
            <div className="flex items-center w-full justify-between">
                {id  && <div className="font-semibold text-lg uppercase text-gray-900">id: {id}</div>}
                { (view  || edit) && <div className="flex items-center space-x-2">
                    {view && <Icon name={"eye"} color="lightgreen" size={16} onClick={() => {}} />}
                    {edit && <Icon name={"edit"} color="blue" size={16} onClick={() => {}} />}
                </div>}
            </div>
            <div className="flex items-center justify-between space-x-6">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <img className="w-16 h-16 rounded-full mr-4" src={img} alt="Avatar of Jonathan Reinink"/>
                    </div>
                    <div className="text-sm">
                        <div className="flex items-center space-x-2">
                            <p>Name :</p>
                            <p className="text-gray-900 leading-none">{name}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <p>Email :</p>
                            <p className="text-gray-600">{email}</p>
                        </div>
                        {phone && <div className="flex items-center space-x-2">
                            <p>Phone :</p>
                            <p className="text-gray-600">{phone}</p>
                        </div>}  
                        {address && <div className="flex items-center space-x-2">
                            <p>Address :</p>
                            <p className="text-gray-600">{address}</p>
                        </div>}  
                    </div>
                </div>
                
            </div>
        </div>
    </>)
}