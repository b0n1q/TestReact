import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchCountryData from '../../redux/actions/fetchConutryData';

import './GooglePlacesInput.css';
import {Field, reduxForm} from "redux-form";

let GoogleAutocomplete = (field) => {
    return <input {...field.input} id={field.id} type="text"/>
};

let GooglePlacesInputForm = props => {
    return <form>
        <Field name="geo" component={GoogleAutocomplete} placeholder="geo" id="pac-input"/>
    </form>
};

let GooglePlacesInputReduxForm = reduxForm({
    // a unique name for the form
    form: 'googlePlaceInput'
})(GooglePlacesInputForm);

class GooglePlacesInput extends Component {

    componentDidMount() {
        const autocomplete = new window.google.maps.places.Autocomplete(
            //TODO: should use ref instead
            document.querySelector('#pac-input')
        );

        // Set the data fields to return when the user selects a place.
        autocomplete.setFields([
            'address_components',
            'geometry',
            'icon',
            'name',
        ]);

        autocomplete.addListener('place_changed', function() {
            const place = autocomplete.getPlace();
            if (!place.geometry) {
                return;
            }
            let address = '';
            if (place.address_components) {
                place.address_components.forEach(adr => {
                    if (adr.short_name.length === 2) {
                        address = adr.short_name;
                    }
                });
            }
            const countryData = {
                name: place.name,
                country: address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            };
                fetchCountryData(countryData);
        });
    }


    render() {
        return (
            <div className="pac-card" id="pac-card">
                <div id="pac-container">
                    <GooglePlacesInputReduxForm/>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    { fetchCountryData }
)(GooglePlacesInput);
