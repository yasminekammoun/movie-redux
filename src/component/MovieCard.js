import React from 'react'
import Rating from './Rating'
import AddModal from './AddModal'
import {removeMovie} from '../actions/movieActions'
import { connect } from 'react-redux'

const MovieCard = props => {
    return (
        <div className="film-card shadow-lg p-3 mb-5 bg-white rounded card">    
            <Rating rate={props.infos.count} rateIt={() => {}}/>    
            <img className="custom-image" src={props.infos.img} alt=''/>
            <hr/> 
            <div className="custom-card">
                <h2>{props.infos.title}</h2>
            </div>
            <button onClick={()=>props.removeMovie(props.infos.id)}>remove</button>
            <AddModal editMode='true' movieToEdit={props.infos}/>
             <button>Description</button> 
             </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeMovie : (id)=> dispatch(removeMovie(id))
    }
}
 
    export default  connect(null , mapDispatchToProps)(MovieCard);
    