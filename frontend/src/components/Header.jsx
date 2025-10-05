import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { LogOut, Github } from "lucide-react"

export default function Header() {
    return (
        <div className='border-b-1 border-gray-700 sticky top-0 bg-black/95'>
            <div className='flex items-center justify-between px-5 py-3'>
                <Link to={"/"}>
                    <div className='flex'>
                        <Github className='text-blue-600'></Github>
                        <p className='font-medium pl-1 text-white'>Git-Genius</p>
                    </div>
                </Link>

                <a href="#how">
                    <Button className='border-1 border-white/30 cursor-pointer hover:bg-white/10 text-white/80'>How to Use</Button>
                </a>
            </div>
        </div>
    )
}