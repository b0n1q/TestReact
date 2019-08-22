import store from './../store';

export default function fetchCountryData(country) {
    console.log(country);
    let action = {
        type: 'FETCH_COUNTRY_DATA',
        payload: country,
    };
    store.dispatch(action);
}
