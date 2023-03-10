import React from "react";
import { CollectionItem } from "../collection-item/collection-item.component";
import './collection-preview.styles.scss';
export const ColllectionPreview=({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item,index)=>index<4).map(({id,...item})=>(
                <CollectionItem key={id} {...item}/>
            ))}
        </div>
    </div>
)