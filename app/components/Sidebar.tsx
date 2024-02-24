import Link from "next/link";


const links = [
    { name: 'Devices', href: '/devices',},
    { name: 'Advertisements', href: '/advertisements'},
    { name: 'Users', href: '/users'},

];
export default function Sidebar() {
    return (
        <div className="flex flex-col bg-black text-white h-screen p-4">
            {links.map((link) => (
                <div className="p-2" key={link.name}>
                    <Link href={link.href} key={link.name}>
                        {link.name}
                    </Link>
                </div>
            ))}
        </div>
    )
}