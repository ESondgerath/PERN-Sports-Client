import React from 'react';
// import GamesList from './Games/GamesList';
import EventIndex from './Events/EventIndex';

const Splash = (props) => {
    return (
        <div>
            <EventIndex token={props.sessionToken} />
        </div>
    )
}
export default Splash;