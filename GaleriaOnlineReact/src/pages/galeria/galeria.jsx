import icon from "../../assets/img/upload.svg"
import { Botao } from "../../components/botao/Botao"
import { Card  } from "../../components/card/Card"
import './galeria.css'
function Galeria() {
    return (
        <>
            <body>
                <main>
                    <h1 className='TituloGaleria'>Galeria Online</h1>
                    <form className='Formulario' onSubmit="">
                        {/* <div className="cssatu"> */}
                            <div className='campoNome'>
                                <label>Nome:</label>
                                <input className='inputNome' />
                            </div>
                            <div className='campoImagem'>
                                <label className='arquivoLabel'>
                                    <i><img src={icon} alt="enviar Imagem" /></i>
                                    <input type="file" className="InputCarregar" />
                                </label>
                            </div>
                            <Botao nomeBotao="Cadastrar" />
                        {/* </div> */}
                    </form>
                    <div className="CardsJunta">
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                        <Card 
                        tituloCard = "Miranhas"
                        />
                    </div>
                </main>
            </body>
        </>
    )
}

export default Galeria