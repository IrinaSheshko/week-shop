function Clothes({anyWordClothes}){
    return(
        <div className="products">
            {anyWordClothes.map(thing => {
                const {id, name, searchTerm, price, image} = thing;
                return(
                    
                        <div key={id} className="product-card">
                            <img src={image} alt="dress" width="400px" height="500px"/>
                            <div className="product-info">
                                <h3>{name}</h3>
                                <h4>$ {price}</h4>
                        </div>
                        </div>
                        
                )
            })}
        </div>
    )
}
export default Clothes;