import {PropsWithChildren} from "react";
import Sidebar from "@/app/components/Sidebar";

export default function Layout(props: PropsWithChildren) {
    return (
        <main className="grid grid-cols-7">
            <Sidebar />
            <div className="col-span-6 bg-white w-full">
                {props.children}
            </div>
        </main>
    )
}