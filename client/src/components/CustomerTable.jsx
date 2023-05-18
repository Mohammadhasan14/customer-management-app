import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import DeleteCustomer from './DeleteCustomer';
import EditCustomer from './EditCustomer';
import axios from 'axios';

export default function CustomerTable() {
    const [customers, setCustomers] = useState([]);
    const [customerEdit, setCustomerEdit] = useState([]);
    const [customerDelete, setCustomerDelete] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5

    useEffect(() => {
        axios
            .get('http://localhost:3000')
            .then((res) => {
                console.log(res.data);
                setCustomers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function handleEdit(index) {
        const actualIndex = indexOfFirstCustomer + index;
        const edit = customers[actualIndex];
        setCustomerEdit(edit);
    }

    function handleDelete(index) {
        const actualIndex = indexOfFirstCustomer + index;
        const remove = customers[actualIndex];
        setCustomerDelete(remove);
    }




    const indexOfLastCustomer = currentPage * recordsPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - recordsPerPage;
    const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

    function prevPage() {
        if (currentPage !== indexOfFirstCustomer) {
            setCurrentPage(currentPage - 1)
        }
    }

    function handlePageClick(pageNumber) {
        setCurrentPage(pageNumber);
    }

    function nextPage() {
        if (currentPage !== indexOfLastCustomer) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <>
            <div className='container container-fluid text-nowrap align-items-center table-wrapper'>
                <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <div className='text-end col-12 mb-2'>
                            <button className="btn btn-success rounded-4 btn-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">Add more</button>
                        </div>
                        <div className='card '>
                            <h3 className='my-4 mx-3'>
                                Customer Details list:
                            </h3>
                            <div className='table-wrapper table-responsive'>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Full Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">State</th>
                                            <th scope="col">City</th>
                                            <th scope="col">Languages</th>
                                            <th scope="col">Date</th>
                                            <th scope='col'>Active</th>
                                            <th scope="col">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customers && currentCustomers.map((data, index) => {
                                            const actualIndex = indexOfFirstCustomer + index;
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{actualIndex + 1}</th>
                                                    <td>{data.fullName}</td>
                                                    <td>{data.email}</td>
                                                    <td>{data.country}</td>
                                                    <td>{data.state}</td>
                                                    <td>{data.city}</td>
                                                    <td>{data.languages}</td>
                                                    <td>{data.modifiedDate}</td>
                                                    <td>{data.isChecked ? "Yes" : "No"}</td>

                                                    <td>
                                                        <button type="button" onClick={() => { handleEdit(index) }} className="btn btn-primary btn-sm rounded-4 me-1" data-bs-toggle="modal" data-bs-target="#editCustomer">Edit</button>
                                                        <EditCustomer
                                                            editItem={customerEdit}
                                                        />
                                                        <button type="button" onClick={() => { handleDelete(index) }} className="btn btn-danger btn-sm rounded-4" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>
                                                        <DeleteCustomer
                                                            deleteItem={customerDelete}
                                                        />
                                                    </td>

                                                </tr>
                                            )
                                        })}

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>

                </div>
                <Pagination
                    currentPage={currentPage}
                    recordsPerPage={recordsPerPage}
                    totalCustomers={customers.length}
                    onPageClick={handlePageClick}
                    firstIndex={indexOfFirstCustomer}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />
            </div>

        </>
    )
}
