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

    let mon = new Date().getMonth();
    return(
        <div>Season Display   {season}</div>
    );
};

export default SeasonDisplay;