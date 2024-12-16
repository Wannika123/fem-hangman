import data from '@/data/data.json'
import { notFound } from 'next/navigation'
import { capitalize } from '@/utils/formatString'
import Game from '@/component/game/Game'
import { SoundProvider } from '@/context/SoundContext'

type GamePageProps = {
    params: Promise<{ category: string}>
}

export default async function GamePage({ params }: GamePageProps) {

    const currParams = await params
    const category = capitalize(currParams.category)

    const dataArr = Object.entries(data.categories)

    let nameList: { name: string, selected: boolean }[] = []
    
    for (let i = 0; i < dataArr.length; i++) {
        if (dataArr[i][0] === category) {
            nameList = dataArr[i][1]
            break;
        }
    }

    if (nameList.length === 0) {
        notFound()
    }
  
    return (
        <>
            <SoundProvider>
                <Game nameList={nameList.map(obj => obj.name)} />
            </SoundProvider>
        </>
    )
}