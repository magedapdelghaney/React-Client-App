import axios from 'axios';
import {apiUrl} from '../config.json'

//use enviroment variable when deploy on server like heroku
// axios.defaults.baseURL=process.env.REACT_API_URL;


const apiEndpoint = apiUrl;

export function getShipments() {
    return axios.get(apiEndpoint);

}

export function updateShipment(shipment) {
    return axios.put(apiEndpoint + "/" + shipment.id, shipment);
}

export function getShipmentById(shipmentId) {
    return axios.get(apiEndpoint + "?id=" + shipmentId );
}