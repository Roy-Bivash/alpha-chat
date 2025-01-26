import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast"
import { DarkModeSwitch } from "@/components/darkModeSwitch/DarkModeSwitch";

export function Home(){
    const { toast } = useToast()
    return(
        <div>
            <h1 className="text-3xl">Home page</h1>
            <DarkModeSwitch />
        </div>
    )
}