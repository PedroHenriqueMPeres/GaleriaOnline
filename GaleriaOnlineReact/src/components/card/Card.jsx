    import "./Card.css"

    import Noffa from "../../assets/img/Noffa.png"
    import imgCard from "../../assets/img/miranhas.png"
    import Caneta from "../../assets/img/pen.svg"
    import lixo from "../../assets/img/trash.svg"


    export const Card = ({tituloCard}) => {
        return(
            <>
            <div className="cardDaImagem">
                <p>{tituloCard}</p>
                <img src={imgCard} alt="card" />
                <div className="icons">
                    <img src={Caneta} alt="editar" />
                    <img src={lixo} alt="Apagar" />
                </div>
                </div>
            </>
        )
    }
