export default function CreateUserComponent() {

    return (
        <div className="border-2 p-2">
            <h1>Create User</h1>
            <form className="flex flex-col">
                <label>
                    Name:
                    <input type="text" name="name" className="bg-gray-200" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" className="bg-gray-200 " />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" className="bg-gray-200" />
                </label>
                <input type="submit" value="Create User" />
            </form>
        </div>
    )
}