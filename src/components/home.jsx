import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div class="jumbotron">
            <h1 class="display-4">FreightHub Frontend Coding Challenge</h1>
            <p class="lead">
                The main goal is for the user to check the shipments at a glance. This allows users to take faster decisions and plan ahead of time.
                Providing information to the customer increases transparency and reduces communication issues..</p>
            <hr class="my-4" />
            <h3>Sections included</h3>
            <ul>
                <li>Home</li>
                <li>Shipments List ( Search and update name)</li>
                <li>Shipment Detais</li>
                <li>Not Found page</li>
            </ul>
            <p class="lead text-center">
                <Link class="btn btn-primary " to="/shipments">Go to Shipment List </Link>
            </p>
        </div>


    );
}

export default Home;