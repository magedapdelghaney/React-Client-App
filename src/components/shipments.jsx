import React, { Component } from 'react';
import { getShipments, updateShipment } from '../services/shipmentServices'
import Pagination from './common/pagination';
import SearchBox from './common/searchBox';
import paginate from '../helper/helpers';
import ShipmentsTable from './shipmentsTable';
import { ToastContainer, toast } from 'react-toastify';

import _ from "lodash";

class Shipments extends Component {

    state = {

        shipments: [
        ],
        shipmentsCount: 0,
        pageSize: 20,
        currentPage: 1,
        searchQuery: "",
        sortCol: { key: "id", order: "asc" },
      
    }



    async componentDidMount() {
        const { data: shipments } = await getShipments();
        this.setState({ shipments });

    }


    handelPageChange = page => {
        this.setState({ currentPage: page });
    }

    handelSearch = query => {
        this.setState({ searchQuery: query, currentPage: 1 });
    }


    handelSort = sortKey => {
        let sortCol = { ...this.state.sortCol };

        if (sortCol.key === sortKey) {
            sortCol.order = (sortCol.order === "asc" ? "desc" : "asc")

        }
        else {
            sortCol = { key: sortKey, order: 'asc' };
        }

        this.setState({ sortCol });
    }
    
    handelUpdateMode  =  (shipment) => {
        shipment.editMode="edit";
        const shipments = [...this.state.shipments];
        const index = shipments.indexOf(shipment);
        shipments[index] = shipment;
        this.setState({ shipments});

    }

    handelUpdate = async (shipment) => {

        await updateShipment(shipment);
        const shipments = [...this.state.shipments];
        const index = shipments.indexOf(shipment);
        shipments[index] = shipment;
        this.setState({ shipments});

        toast.success("Shipment updated Successfully !", {
            position: toast.POSITION.TOP_CENTER
        });


    }

    render() {

        const { length: count } = this.state.shipments;
        const { pageSize, currentPage, shipments: shipmentsList, searchQuery, sortCol } = this.state;


        // get all shipments incase if no filtring by search 
        let filtredShipments = shipmentsList;

        if (searchQuery) {
            filtredShipments = shipmentsList.filter(item =>
                item.id.toLowerCase().startsWith(searchQuery.toLowerCase())
            )

        }

        filtredShipments = _.orderBy(filtredShipments, [sortCol.key], [sortCol.order]);

        const shipments = paginate(filtredShipments, currentPage, pageSize);

        return (
            <React.Fragment >
                <h1 className="mt-5">Shipments List</h1>

                <SearchBox value={searchQuery} onChange={this.handelSearch} ></SearchBox>

                <ShipmentsTable shipments={shipments} 
                onSort={this.handelSort} 
                updateName={this.handelUpdate} 
                changeMode={this.handelUpdateMode} />

                <Pagination itemsCount={count} pageSize={pageSize} onPageChange={this.handelPageChange}
                    currentPage={currentPage}
                />

                <ToastContainer />

            </React.Fragment>


        );
    }



}

export default Shipments;  