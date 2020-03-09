import React from 'react';
import {connect} from 'react-redux';

import { show , hide } from '../store/category.js';

const categoryResult = props=>{
    return(
        <section>
            <ul>
                {
                    props.category.categories.map(category =>{
                        return <li onClick={ ()=> props.show(category.name)} key={category.name}>
                            {category.name} - {category.displayName} - {category.description}
                        </li>
                    })
                }
            </ul>
            <button onClick={props.hide}>hide</button>
        </section>
    )
}
const mapStateToProps = state =>({
category: state.cattegory
})

const mapDispatchToProps = {show , hide};
export default connect(mapStateToProps , mapDispatchToProps)(categoryResult)