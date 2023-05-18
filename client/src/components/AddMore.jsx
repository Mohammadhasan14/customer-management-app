import React, { useState } from 'react'
import axios from 'axios'
import { Multiselect } from 'multiselect-react-dropdown'
import Select from 'react-select';

export default function AddMore() {
    const [isChecked, setIsChecked] = useState(false)
    const [selectedOptions, setSelectedOptions] = useState([]);

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [userInput, setUserInput] = useState({

        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        country: "",
        state: "",
        city: "",
        languages: "",
        isChecked: false

    })

    const options = [
        { value: 'English', label: 'English' },
        { value: 'Hindi', label: 'Hindi' },
        { value: 'Marathi', label: 'Marathi' },
        { value: 'tamil', label: 'tamil' },
        { value: 'Gujarati', label: 'Gujarati' },
        { value: 'Urdu', label: 'Urdu' },
        { value: 'Telugu', label: 'Telugu' },
        { value: 'Arabic', label: 'Arabic' },
        { value: 'Spanish', label: 'Spanish' },
        { value: 'French', label: 'French' },
        { value: 'Bengali', label: 'Bengali' },
        { value: 'Russian', label: 'Russian' },
        { value: 'Farsi', label: 'Farsi' },

    ];

    const onSelected = (selectedList) => {
        setSelectedOptions(selectedList);
        setUserInput({
            ...userInput,
            languages: selectedList?.map(item => item.value)
        });
    };

    const onRemove = (removedList) => {
        setSelectedOptions(removedList);
        setUserInput({
            ...userInput,
            languages: selectedList?.map(item => item.value)
        });
    };

    function handleChanges(e) {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setUserInput(() => {
            return { ...userInput, [name]: newValue }
        })
        console.log("handlechange userInput", userInput)
    }

    function handleSubmit(e) {
        // Get the form element
        var form = document.getElementById('customer-form');

        // Check if the form is valid
        if (form.checkValidity() === false) {
            return null
        } else {
        axios.post('http://localhost:3000/addmore', userInput)
            .then(res => {
                console.log(res)
            })
            .catch((err) => console.log(err))
        console.log('handlesubmit: ', userInput)
        }
    }


    console.log("userInput", userInput)
    return (
        <>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Manage Customer</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id='customer-form' className="row g-3 needs-validation" novalidate>
                                <div className="col-md-4">
                                    <label for="validationCustom01" className="form-label">Full Name: </label>
                                    <input type="text" className="form-control" onChange={handleChanges} name='fullName' id="validationCustom01" value={userInput.fullName} required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <br />
                                <div className="col-md-4">
                                    <label for="validationCustom02" className="form-label">Email</label>
                                    <input type="email" className="form-control" onChange={handleChanges} name='email' id="validationCustom02" value={userInput.email} required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label for="validationCustom03" className="form-label">Password</label>
                                    <div className="input-group has-validation">
                                        <input type="password" className="form-control" onChange={handleChanges} name='password' id="validationCustom03" value={userInput.password} aria-describedby="inputGroupPrepend" required />
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label for="validationCustom04" className="form-label">Confirm Password</label>
                                    <div className="input-group has-validation">
                                        <input type="password" className="form-control" onChange={handleChanges} name='confirmPassword' id="validationCustom04" value={userInput.confirmPassword} aria-describedby="inputGroupPrepend" required />
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label for="validationCustom05" className="form-label">Country</label>
                                    <div className="input-group has-validation">
                                        <input type="text" className="form-control" onChange={handleChanges} name='country' id="validationCustom05" value={userInput.country} aria-describedby="inputGroupPrepend" required />
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label for="validationCustom06" className="form-label">State</label>
                                    <select className="form-select" id="validationCustom06" onChange={handleChanges} name='state' value={userInput.state} required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>Andhra Pradesh</option>
                                        <option>Arunachal Pradesh</option>
                                        <option>Assam</option>
                                        <option>Bihar</option>
                                        <option>Chhattisgarh</option>
                                        <option>Goa</option>
                                        <option>Gujarat</option>
                                        <option>Gujarat</option>
                                        <option>Himachal Pradesh</option>
                                        <option>Jharkhand</option>
                                        <option>Karnataka</option>
                                        <option>Kerala</option>
                                        <option>Madhya Pradesh</option>
                                        <option>Maharashtra</option>
                                        <option>Manipur</option>
                                        <option>Meghalaya</option>
                                        <option>Mizoram</option>
                                        <option>Nagaland</option>
                                        <option>Odisha</option>
                                        <option>Punjab</option>
                                        <option>Rajasthan</option>
                                        <option>Sikkim</option>
                                        <option>Tamil Nadu</option>
                                        <option>Telangana</option>
                                        <option>Tripura</option>
                                        <option>Uttar Pradesh</option>
                                        <option>Uttarakhand</option>
                                        <option>West Bengal</option>
                                        <option>...</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label for="validationCustom07" className="form-label">City</label>
                                    <input type="text" className="form-control" onChange={handleChanges} name='city' id="validationCustom07" value={userInput.city} required />
                                    <div className="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label for="validationCustom08" className="form-label">Languages</label>
                                    <Multiselect
                                        options={options}
                                        selectedValues={selectedOptions}
                                        onSelect={onSelected}
                                        onRemove={onRemove}
                                        name='languages'
                                        displayValue="label"
                                        placeholder="Select languages"
                                    />                                    <div className="invalid-feedback">
                                        Please provide a valid zip.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={handleChanges} name='isChecked' type="checkbox" checked={userInput.isChecked} id="invalidCheck" />
                                        <label className="form-check-label" for="invalidCheck">
                                            Active
                                        </label>
                                        <div className="invalid-feedback">
                                            Please fill this
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary rounded-4 " data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn btn-primary rounded-4 " onClick={handleSubmit}>Save</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
