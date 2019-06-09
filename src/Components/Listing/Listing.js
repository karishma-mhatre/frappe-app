import React from 'react';
import { connect } from 'react-redux';
import { addToFavourites } from '../../Actions';
import "./listing.scss";

const Listing = ({dispatch, listing, tab}) => {
    let listingTypeColor = "";
    if(listing.type === 'internship') {
        listingTypeColor = "rgba(193, 70, 112, 0.09)"
    }else {
        listingTypeColor = "#fff"
    }

    let addListing = (e, listingTitle) => {
        e.preventDefault();
        dispatch(addToFavourites(listingTitle));
    }

    let shortenNumber = (num) => {
        let UNITS = {
            TENLAKHS: 1000000,
            LAKHS: 100000,
            THOUSAND: 1000
        }

        if(num > UNITS.TENLAKHS) {
            return (num/UNITS.TENLAKHS).toFixed(2) + "K";
        }else if(num > UNITS.LAKHS) {
            return (num/UNITS.LAKHS).toFixed(2) + "K"
        }else if(num > UNITS.THOUSAND) {
            return (num/UNITS.THOUSAND).toFixed(2) + "K"
        }

        return num;
    }
    return (
        <div className="container listing" style={{backgroundColor: listingTypeColor}}>
            <div className="listing-title" >
                <p>{listing.title}</p>
            </div>
            <div className="listing-img">
                <img src={listing.imageUrl} alt={listing.title}></img>
            </div>
            <div className="listing-type">
                <p>Type: {listing.type}</p>
            </div>
            <div className="listing-desc">
                <p>{listing.desc}</p>
            </div>
            <div  className="listing-view_count">
                <p>{shortenNumber(listing['view-count'])} Views</p>
            </div>
            {
                tab === 'list' && 
                <div className="listing-add">
                    <button className="btn" onClick={(e) => addListing(e, listing.title)}>Add</button>
                </div>
            }
        </div>
    )
}

export default connect()(Listing);


