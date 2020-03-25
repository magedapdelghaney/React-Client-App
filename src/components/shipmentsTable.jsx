import React from 'react';
import { Link } from 'react-router-dom'


const ShipmentsTable = ({ shipments, onSort, updateName, changeMode }) => {

    if (!shipments.length) {
        return <p>Sorry, the list is empty.</p>;

    }


    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col" onClick={() => onSort('id')}>  #ID</th>
                    <th scope="col" onClick={() => onSort('name')}>  Name</th>
                    <th scope="col" onClick={() => onSort('mode')}>  Mode</th>
                    <th scope="col" onClick={() => onSort('type')}>  Type</th>
                    <th scope="col" >  Details</th>
                    <th scope="col" >  Update </th>
                </tr>
            </thead>
            <tbody>

                {
                    shipments.map((shipment, index) =>

                        <tr key={shipment.id}>
                            <th scope="row"> {shipment.id}</th>
                            <td>
                                {shipment.editMode !== "edit" && <span>{shipment.name}</span>}


                                {shipment.editMode === "edit" &&
                                    <form>

                                        <div className="form-group">
                                            <input type="shipmentName" className="form-control" id="shipmentName"
                                                aria-describedby="emailHelp" placeholder="Enter Name"
                                                defaultValue={shipment.name}
                                                onChange={(e) => {
                                                    shipment.name = e.target.value;

                                                }}
                                            />
                                        </div>
                                    </form>
                                }




                            </td>
                            <td>{shipment.mode}</td>
                            <td>{shipment.type}</td>
                            <td><Link key={shipment.id} to={`/shipments/${shipment.id}`} >Deatils</Link></td>
                            <td>
                                <button className='btn btn-primary btn-sm'
                                    style={{ display: shipment.editMode !== "edit" ? 'block' : 'none' }}
                                    onClick={() => { changeMode(shipment) }}>Update</button>

                                <button className='btn btn-primary btn-sm'
                                    style={{ display: shipment.editMode === "edit" ? 'block' : 'none' }}
                                    onClick={() => {
                                        updateName(shipment);
                                        shipment.editMode = 'view'
                                    }} >Save</button>
                            </td>

                        </tr>


                    )}



            </tbody>
        </table>
    );
}

export default ShipmentsTable;



