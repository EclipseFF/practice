import UsersComponent from "@/app/components/UsersComponent";
import CreateUserComponent from "@/app/components/CreateUserComponent";

export default function Page() {
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1">
                <CreateUserComponent />
            </div>
            <div className="col-span-3">
                <UsersComponent />
            </div>
        </div>
    )
}