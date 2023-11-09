interface GOProps {
    restartGame: () => void;
    score:number;
}

export default function GameOver({ restartGame, score }:GOProps){

    return (
        <>
        <ul className="z-20 fixed inset-x-1/4 md:inset-x-1/3 top-1/4 bg-white p-4
            flex flex-col justify-center items-center gap-3
            md:text-lg lg:text-xl
        ">
            <li>Game Over!</li>
            <li className="flex flex-col items-center">
                <p>Your score was: </p>
                <p className="font-semibold">{score}</p>
            </li>
            <li className="flex flex-col items-center">
                <p>Top Score: </p>
                <p className="font-semibold">{score}</p>
            </li>
            <button type="button" onClick={restartGame} className="bg-gray-300 border border-gray-500 rounded p-1">Restart</button>
        </ul>
        <div className="z-10 fixed w-full h-[100vh] bg-black opacity-30"></div>
        </>
    )
}