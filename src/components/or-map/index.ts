import { PolymerElement } from '@polymer/polymer/polymer-element';
import * as L from 'leaflet';
import * as view from './template.html';

export class Map extends PolymerElement {
    shadowRoot: any;
    constructor() {
        super();
    }
    ready() {
        super.ready();
        var accessToken = 'pk.eyJ1IjoibWlibG9uIiwiYSI6ImNqYTlleHZ6dTBocjgzM25pOHhoNWlndWwifQ.yQd0SHT9J3gmTqmbx1amsg';
        var mapboxStreets = L.tileLayer('https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' +
            accessToken, {
                attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a>' +
                    '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            });
        var leafletOptions = {
            center: new L.LatLng(52.03, 5.06),
            zoom: 8,
            zoomControl: false,
            layers: mapboxStreets
        }
        let map = this.shadowRoot.querySelector('#map');
        console.log(map);
        var leafletmap = L.map(map, leafletOptions);
        leafletmap.on('moveend', function() {
            //do stuff
        });
    }
    static get template() {
        return view;
    }
}