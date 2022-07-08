import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { dateLocalFormatter } from '../../utils/helpers';
// import DeleteModal from '../DeleteModal/DeleteModal';




function FlightTable() {
    
    const dispatcher = useDispatch();
    const [flightList, setFlightList] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    // const [refreshKey, setRefreshKey] = useState(0);
    // setRefreshKey(load);
    // console.log(load);
    // console.log("refresh: "+refreshKey);
    
    async function fetchData() {
    
        const res = await api.getFlights()
        // console.log(res.data);
        // dispatcher({type: 'SET_ALL_FLIGHT', payload: res.data});
        setFlightList(res.data);
    };

    // find whether to reset
    let load = useSelector(store => store.refresh);
    // console.log(load);
    useEffect(()=>{
        fetchData();
    },[load])
    
    function stateHandler(prop) {
        //need to format dates to show up on submit form
        dispatcher({type: 'SET_FLIGHT', payload: prop});
        dispatcher({type: 'SET_SIDEBAR', payload: true});
        // console.log(prop);
    }

    async function deleteHandler(id) {
        await api.deleteFlight(id)

        // this will update the store and refresh the page
        let load = new Date().getTime() + (Math.floor(Math.random() * 1000));
        dispatcher({type: 'SET_REFRESH', payload: load});
    }
    
    // function sortFlightByNum(fList) {
    //     const sorted = [fList].sort((a,b)=> b[fList.flightNumber]-a[fList.flightNumber]);
    //     setFlightList(sorted);
    // }
    

    const handleDeleteClose = () => setShowDelete(false);
    const handleDeleteOpen = () => setShowDelete(true);
    //need an Local button to conditionally render submit form over Table

    return (
        <>
        <Table className="table center" style={{marginTop:"110px"}} striped bordered hover responsive="auto" variant="dark">
            <thead>
                <tr>
                    <th>Flight #</th>
                    <th>Departure Airport</th>
                    <th>Departure Date</th>
                    <th>Arrival Airport</th>
                    <th>Arrival Date</th>
                    <th>Capacity</th>
                    <th className="">Configure</th>
                    <th className="position-fixed align-right editDeleteDiv">
                        {!showDelete?
                            <>
                            {/* <Button className="configBtn" size="sm" variant="warning" onClick={()=>{ stateHandler(flight) }}>EDIT</Button> */}
                            <Button className="configBtn editDeleteBtn" size="md" variant="danger" onClick={()=>{ handleDeleteOpen() }}><strong>Edit/Delete</strong></Button>
                            </>:<>
                            {/* <Button className="configBtn" size="sm" variant="danger" onClick={()=>{ deleteHandler(flight._id,load) }}>DELETE</Button> */}
                            <Button className="configBtn editDeleteBtn" size="md" variant="warning" onClick={()=>{ handleDeleteClose() }}><strong>Edit/Delete</strong></Button>
                            </>
                        }
                    </th>
                </tr>
            </thead>
            <tbody>
                { flightList.map((flight)=>(
                    <tr className="" key={flight._id}>
                        <td key={flight.flightNumber}>
                            {flight.flightNumber}
                        </td>
                        <td key={flight.departureAirport}>
                            {flight.departureAirport} 
                        </td>
                        <td key={flight.departureDate}>
                            {dateLocalFormatter(flight.departureDate).split(",")[0]}<br/>
                            {dateLocalFormatter(flight.departureDate).substring(10)}
                        </td>
                        <td key={flight.arrivalAirport}>
                            {flight.arrivalAirport} 
                        </td>
                        <td key={flight.arrivalDate}>
                            {dateLocalFormatter(flight.arrivalDate).split(",")[0]}<br/>
                            {dateLocalFormatter(flight.arrivalDate).substring(10)}
                        </td>
                        <td key={flight.passengerCapacity}>
                            {flight.currentPassengerCount} / {flight.passengerCapacity}
                        </td>
                        
                        <td>
                        
                            
                           
                            {/* <DeleteModal 
                                // id={flight._id} 
                                // fNum={flight.flightNumber}
                            /> */}
                            {!showDelete?
                                <>
                                <Button className="configBtn" size="sm" variant="warning" onClick={()=>{ stateHandler(flight) }}>EDIT</Button>
                                {/* <Button className="configBtn" size="sm" variant="danger" onClick={()=>{ handleDeleteOpen() }}>DELETE</Button> */}
                                </>:<>
                                <Button className="configBtn" size="sm" variant="danger" onClick={()=>{ deleteHandler(flight._id,load) }}>DELETE</Button>
                                {/* <Button className="configBtn" size="sm" variant="warning" onClick={()=>{ handleDeleteClose() }}>Cancel</Button> */}
                                </>
                            }
                         
                        </td>
                    </tr>
                ))}
            </tbody> 
        </Table>
        </>
    )
}

export default FlightTable;