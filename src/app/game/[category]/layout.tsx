import MenuBtn from "@/component/game/MenuBtn";
import { capitalize } from "@/utils/formatString";

export default async function GameLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: { category: string }
}>) {
    const currParams = await params
    const category = currParams.category  

    return (
        <div className="screen">
            <header 
                style={{ display: 'flex', alignItems: 'center' }}
                className="game-header"
            >
                <MenuBtn />
                <h2>{capitalize(category)}</h2>
            </header>
            <main>{children}</main>
        </div>   
    )
}