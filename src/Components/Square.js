import "../App.css"
export default function Square({val,chosseSquare}){

    return(
        <div className="square" onClick={chosseSquare}>
            {val}
           

        </div>
    )


}