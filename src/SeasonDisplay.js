import React from 'react';
import ReactDOM from 'react-dom';

const getSeason = (lat,month)=>{
    if(month>2 && month<9){
        return lat>0 ? 'summer' : 'winter';
    }else{
        return lat>0 ? 'winter' : 'summer';
    }
}

let SeasonDisplay = (props)=>{
    let season = getSeason(props.lat, new Date().getMonth());
    // if(season=='summer'){
    //     return <div>let's hit the beach</div>
    // }else{
    //     return <div>Burr!! it's chilly</div>
    // }
    const text = season==='winter' ? 'Burr!!! it\'s chilly' : 'lets go to the beach';
    const icon = season==='winter' ? 'snowflake' : 'sun'; 
    return(
        <div>
            <i className={`${icon} loading icon`}></i>
            <h1>{text}</h1>
            <i className={`${icon} loading icon`}></i>
        </div>
    );
};

export default SeasonDisplay;