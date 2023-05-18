import React, { useEffect, useState } from 'react'
import { Multiselect } from 'multiselect-react-dropdown'
import axios from 'axios';

export default function EditCustomer(props) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [userInput, setUserInput] = useState({
        firstName: "",
        lastName: "",
        reviewPeriod: "",
        performanceRating: "",
        GoalsObjectives: "",
        Accomplishments: "",
        AreasForImprovement: "",
        TrainingAndDevelopment: "",
        feedback: ""
    })

    useEffect(() => {

        if (props.editItem) {
            setUserInput(props.editItem);

        }

    }, [props.editItem])

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

    console.log('props.editItemsss', props.editItem)
    console.log('userInput', userInput)

    function handleSubmit() {
        axios.post('http://localhost:3000/edit', userInput)
            .then(res => {
                console.log(res.data);
                setTimeout(() => {
                    window.location.reload();
                }, 100)
            })
            .catch(err => console.log(err));
        console.log('handlesubmit: ', userInput)
    }

    function handleChanges(e) {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setUserInput(() => {
            return { ...userInput, [name]: newValue }
        })
        
    }

    console.log('userInputchanges', userInput);
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
    return (
        <>
            <div class="modal fade" id="editCustomer" tabindex="-1" aria-labelledby="editCustomer" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Make changes</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form class="row g-3 needs-validation" novalidate>
                                <div class="col-md-4">
                                    <label for="validationCustom01" class="form-label">Full Name: </label>
                                    <input type="text" class="form-control" onChange={handleChanges} name='fullName' id="validationCustom01" value={userInput.fullName} required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <br />
                                <div class="col-md-4">
                                    <label for="validationCustom02" class="form-label">Email</label>
                                    <input type="text" class="form-control" onChange={handleChanges} name='email' id="validationCustom02" value={userInput.email} required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label for="validationCustom03" class="form-label">Password</label>
                                    <div class="input-group has-validation">
                                        <input type="password" class="form-control" onChange={handleChanges} name='password' id="validationCustom03" value={userInput.password} aria-describedby="inputGroupPrepend" required />
                                        <div class="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <label for="validationCustom04" class="form-label">Confirm Password</label>
                                    <div class="input-group has-validation">
                                        <input type="password" class="form-control" onChange={handleChanges} name='confirmPassword' id="validationCustom04" value={userInput.confirmPassword} aria-describedby="inputGroupPrepend" required />
                                        <div class="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <label for="validationCustom05" class="form-label">Country</label>
                                    <div class="input-group has-validation">
                                        <input type="text" class="form-control" onChange={handleChanges} name='country' id="validationCustom05" value={userInput.country} aria-describedby="inputGroupPrepend" required />
                                        <div class="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationCustom06" class="form-label">State</label>
                                    <select class="form-select" id="validationCustom06" onChange={handleChanges} name='state' value={userInput.state} required>
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
                                    <div class="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <label for="validationCustom07" class="form-label">City</label>
                                    <input type="text" class="form-control" onChange={handleChanges} name='city' id="validationCustom07" value={userInput.city} required />
                                    <div class="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationCustom08" class="form-label">Languages</label>
                                    <Multiselect
                                        options={options}
                                        selectedValues={selectedOptions}
                                        onSelect={onSelected}
                                        onRemove={onRemove}
                                        name='languages'
                                        displayValue="label"
                                        placeholder="Select languages"
                                    />                                    <div class="invalid-feedback">
                                        Please provide a valid zip.
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" onChange={handleChanges} name='isChecked' type="checkbox" checked={userInput.isChecked} id="invalidCheck" />
                                        <label class="form-check-label" for="invalidCheck">
                                            Active
                                        </label>
                                        <div class="invalid-feedback">
                                            Please fill this
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary rounded-4 " data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-primary reload-page rounded-4 " data-bs-dismiss="modal" onClick={handleSubmit}>Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
