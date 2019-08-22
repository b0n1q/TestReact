const initialState = {
    name: '',
    country: '',
    lat: '',
    lng: '',
};

const mapFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COUNTRY_DATA': {
            return {
                name: action.payload.name,
                country: action.payload.country,
                lat: action.payload.lat,
                lng: action.payload.lng,
            };
        }
        default: {
            return state;
        }
    }
};

export default mapFilterReducer;
