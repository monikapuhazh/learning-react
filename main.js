import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Liquid from './Liquid.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));

var liquidElt = document.getElementById('liquid');
var water = {
    name: 'water',
    freezingPt: 32,
    boilingPt: 212
};
var waterElt = document.createElement('div');
liquidElt.appendChild(waterElt) ;
ReactDOM.render(<Liquid config={water}/>, waterElt);

var ethanol = {
    name: 'ethanol',
    freezingPt: -173.2,
    boilingPt: 173.1
};
var ethanolElt = document.createElement('div');
liquidElt.appendChild(ethanolElt);
ReactDOM.render(<Liquid config={ethanol}/>, ethanolElt);