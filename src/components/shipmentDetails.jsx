import React, { Component } from 'react';
import { getShipmentById } from '../services/shipmentServices'


class ShipmentDetails extends Component {

    state = {
        shipment: []

    }

    async componentDidMount() {

        // we can use redux for getting shipment by ID but for time limition we will produce with this approch
        try {
            const { data: shipment } = await getShipmentById(this.props.match.params.id);
            this.setState({ shipment: shipment[0] });

        }
        catch (ex) {
            if (ex.respose && ex.respose.status === 404)
                return this.props.history.replace("/not-found");
        }
    }



    render() {
        const { shipment } = this.state;
        return (
            <React.Fragment>
                <h1 className="my-4">
                    Shipment Name :{shipment.name}
                </h1>

                <div className="row">

                    <div className="col-md-4">
                        <hr className="my-4" />
                        <h4 className="my-3">Shipment Details</h4>
                        <ul>
                            <li>Mode: {shipment.mode}</li>
                            <li>Type: {shipment.type}</li>
                            <li>Destination: {shipment.destination}</li>
                            <li>Statues: {shipment.status} </li>
                            <li>Total: {shipment.total} </li>
                        </ul>


                    </div>

                </div>
            </React.Fragment>

        )

    }


}


export default ShipmentDetails;


