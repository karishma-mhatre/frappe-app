import React, { Component } from 'react'
import { connect } from 'react-redux'
import Listing from '../Listing/Listing';
import './favourites.scss';

class Favourites extends Component {

    render() {
        return (
            <>
                {
                    this.props.favourites.length > 0 &&
                    <div className="container list-container">
                        {
                            this.props.favourites.map((element, index) => (
                                <Listing listing={element} key={index}></Listing>
                            ))
                        }
                    </div>

                }
                {
                    this.props.favourites.length === 0 &&
                    <div className="no-favourites">No Favourites yet.</div>
                }
            </>
        )
    }
}

const mapStateToProps = state => (
    {
        favourites: state.frappListings.favourites,
    }
)

export default connect(mapStateToProps)(Favourites)
