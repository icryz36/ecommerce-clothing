import React, { Component } from 'react';
import SHOPDATA from './shop.data'
import PreviewCollection from './../../components/preview-collection/preview-collection.component'

import './shoppage.style.scss'
class Shoppage extends Component {
    constructor(){
        super()
        this.state = {
            collection : SHOPDATA
        }
    }
    render() {
        const {collection} = this.state
        return (
            <div className="shop-page">
                {
                    collection.map(({id,...otherCollectionProps}) => (
                        <PreviewCollection key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default Shoppage;