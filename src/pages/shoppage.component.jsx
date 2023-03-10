import React, { Component } from "react";
import { ColllectionPreview } from "../component/collectionpreview/collectionpreview.component.jsx";
import {SHOP_DATA} from './shop.data.js'
class ShopPage extends Component{
    constructor(props){
        super(props);
        this.state={   
         collections:SHOP_DATA,
    }}
    render(){
        const {collections}=this.state;
        return(
            <div className="shop-page">
                {collections.map(({id,...collections})=>(
                    <ColllectionPreview key={id} {...collections}/>
                ))}

            </div>
        )
    }
}
export default ShopPage;