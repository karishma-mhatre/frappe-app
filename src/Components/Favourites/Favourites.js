import React, { Component } from 'react'
import { connect } from 'react-redux'
import Listing from '../Listing/Listing'

class Favourites extends Component {

    render() {
        var content = <></>;
        if(this.props.isLoading){
            content = <div>Loading</div>
        }else{
            content = <div>
                {
                    this.props.favourites.map((element) => (
                        <Listing listing={element}></Listing>
                    ))
                }

                <div>favourites</div>
            </div>
            
        }
        return (
            <>
            {
                content
            }
            </>
        )
    }
}

const mapStateToProps = state => (
    {
        favourites: state.frappe.favourites,
    }
)

export default connect(mapStateToProps)(Favourites)
