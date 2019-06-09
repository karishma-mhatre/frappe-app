import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchListIfNeeded } from '../../Actions';
import Listing from '../Listing/Listing'

class List  extends Component {

    componentDidMount() {
        this.props.dispatch(fetchListIfNeeded());
    }

    render() {
        return (
            <>
                {
                    this.props.isLoading &&
                    <div>Loading</div>

                }
                {
                    !this.props.isLoading &&
                    <div className="container list-container">
                        {
                            this.props.list.map((element, index) => (
                                <Listing listing={element} tab="list" key={index}></Listing>
                            ))
                        }
                    </div>

                }
            </>
        )
    }
}

const mapStateToProps = state => (
    {
        list: state.frappListings.list,
        isLoading: state.frappListings.isLoading
    }
)

export default connect(mapStateToProps)(List)
