import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchListIfNeeded } from '../../Actions';
import Listing from '../Listing/Listing'

class List  extends Component {

    componentDidMount() {
        this.props.dispatch(fetchListIfNeeded());
    }

    render() {

        var content = <></>;
        if(this.props.isLoading){
            content = <div>Loading</div>
        }else{
            content = <div>
                {
                    this.props.list.map((element) => (
                        <Listing listing={element} tab="list"></Listing>
                    ))
                }
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
        list: state.frappe.list,
        isLoading: state.frappe.isLoading
    }
)

export default connect(mapStateToProps)(List)
