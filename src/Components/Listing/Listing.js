import React from 'react';
import { connect } from 'react-redux';
import { addToFavourites } from '../../Actions';

const Listing = ({dispatch, listing, tab}) => {

    let addListing = (e, listingTitle) => {
        e.preventDefault();
        dispatch(addToFavourites(listingTitle));
    }

    return (
        <div>
            <div>{listing.title}</div>
            <div>
                <img src={listing.imageUrl}></img>
            </div>
            <div>
                {listing.type}
            </div>
            <div>
                {listing.desc}
            </div>
            <div>
                {listing['view-count']}
            </div>
            {
                tab === 'list' && 
                <div>
                    <button onClick={(e) => addListing(e, listing.title)}>Add</button>
                </div>
            }
        </div>
    )
}

export default connect()(Listing);


