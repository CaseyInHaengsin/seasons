import React from 'react';

const getSeason = (lat, month) => {
    console.log(month);
    if (month > 2 && month < 9){
       return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer'
    }

}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? 'Bur, it\'s chilly' : 'It\'s flippin hot';
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    
    return (
        <div>
            <i className={`${icon} icon`} />
            <h1 align="Center">{ text }</h1>
            <i className={`${icon} icon`} />
        </div>
    );
}

export default SeasonDisplay;