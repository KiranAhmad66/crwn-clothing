import React, { Component } from "react";
import MenuItem from "../menu-item component/menu-item";
import "./directive.scss"
class Directory extends Component{
    constructor(){
        super();
        this.state={
            sections: [
              {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens',
                size:'large'
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens',
                size:'large'

              }
            ]
            
          }
    }

 render(){
    return(
        <div className="directory-menu">
            {this.state.sections.map(({id,...sections})=>(
                <MenuItem key={id} {...sections} />
            ))}
        </div>
    )    
 }
}
export default Directory;
