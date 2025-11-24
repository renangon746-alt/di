import UserRow from "./UserRow";

function Table() {
    const users = [
        { id: 1, email: "alice@example.com", name: "Alice", surname: "Johnson", age: 25 },
        { id: 2, email: "bob@example.com", name: "Bob", surname: "Smith", age: 30 },
        { id: 3, email: "carol@example.com", name: "Carol", surname: "Brown", age: 28 },
        { id: 4, email: "david@example.com", name: "David", surname: "Williams", age: 35 },
        { id: 5, email: "eve@example.com", name: "Eve", surname: "Davis", age: 22 },
        { id: 6, email: "frank@example.com", name: "Frank", surname: "Miller", age: 40 },
    ];
    console.log(users);
    return (
        <>
            <table>
                <thead className="border">
                    <tr className="bg-lime-400">
                        <th className="border p-2">ID</th>
                        <th className="border p-2">EMAIL</th>
                        <th className="border p-2">NAME</th>
                        <th className="border p-2">SURNAME</th>
                        <th className="border p-2">AGE</th>
                    </tr>
                </thead>
                <tbody>
                    <UserRow {...users[0]}/>
                    <UserRow {...users[1]}/>
                    <UserRow {...users[2]}/>
                    <UserRow {...users[3]}/>
                    <UserRow {...users[4]}/>
                    <UserRow {...users[5]}/>
                </tbody>
            </table>
        </>
    );
}

export default Table;