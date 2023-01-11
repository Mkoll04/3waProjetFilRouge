import {Fragment} from "react"

const Cards = (props) =>{
    const products = [
    {title:"mon titre", description:"La description",img:"./img/monimg.png"},
    {title:"mon titre 2", description:"La description 2",img:"assets/images/product_0.jpg"}   
]
    return (
        <Fragment>
       <div className="container-product-img">
                    <img className='product-img' src="{products.img}"/>
                </div>
                <div className="card-body-product">
                    <h3 className="title-product">{products.title}</h3>
                    <p className="description-product">{products.description}</p>
                    <div className="footer-card">
                        <div className="footer-card-qte">
                            <button className="btn-product-qte">-</button>
                            <strong>0</strong>
                            <button className="btn-product-qte">+</button>
                        </div>
                        <button className="btn-product">Ajouter au panier</button>
                    </div>
                </div>
                </Fragment>
    )
}

export default Cards