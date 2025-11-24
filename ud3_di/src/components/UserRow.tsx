interface UserData {
    id:number,
    email:string, 
    name:string, 
    surname:string, 
    age:number
}

function UserRow({id, email, name, surname, age}:UserData) {
    return(
        <tr>
            <td className="border p-2">{id}</td>
            <td className="border p-2">{email}</td>
            <td className="border p-2">{name}</td>
            <td className="border p-2">{surname}</td>
            <td className="border p-2">{age}</td>
        </tr>
    );
}

export default UserRow;