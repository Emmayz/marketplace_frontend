import { useState } from 'react';

function JobPostForm() {

    // RegistrationForm can transition to the following 5 states:
    // (1) initial, (2) loading, (3) validationFailed, (4) successful, (5) unsuccessful
    const [state, setState] = useState("initial");
    const [formErrors, setFormErrors] = useState([]);

    // (1) Read the values in the input elements
    let jobTitleField;
    let locationField;
    let companyInformationField;
    let jobDescriptionField;
    let categoryField;
    let requiredSkillsField;
    let timelineField;
    let budgetField;


    const formData = new FormData();


    function attachFile(evt) {

        //Create an array from the attachment(s)
        const files = Array.from(evt.target.files);

        // For each attachment, append the file to formData
        files.forEach(
            function(fileattachment, index){
                formData.append(index, fileattachment);
            }
        )

    }

    function postJob() {
            
    
        // (2) Validate the value
        const errors = [];
    
        if( jobTitleField.value.length === 0 ) {
            errors.push('Please enter Job title');
        }
    
        if( locationField.value.length === 0 ) {
            errors.push('Please enter the job location');
        }

        if( companyInformationField.value.length === 0 ) {
            errors.push('Please enter the company information');
        }

        if( jobDescriptionField.value.length === 0 ) {
            errors.push('Please enter the Job description');
        }

        if( categoryField.value.length === 0 ) {
            errors.push('Please enter Job Category');
        }

        if( requiredSkillsField.value.length === 0 ) {
            errors.push('Please specify the required skills');
        }

        if( timelineField.value.length === 0 ) {
            errors.push('Please enter timeline');
        }

        if( budgetField.value.length === 0 ) {
            errors.push('Please enter budget');
        }


        // If the required fields are valid
        if( errors.length === 0 ) {
            // Show the preloader
            setState("loading")

            // Prepare formData for backend
            formData.append('jobTitle', jobTitleField.value);
            formData.append('location', locationField.value);
            formData.append('companyInformation', companyInformationField.value);
            formData.append('jobDescription', jobDescriptionField.value);
            formData.append('category', categoryField.value);
            formData.append('requiredSkills', requiredSkillsField.value);
            formData.append('timeline', timelineField.value);
            formData.append('budget', budgetField.value);

            // Register data
            fetch(
                `${process.env.REACT_APP_BACKEND_URL}/jobs/create`,
                {
                    method: 'POST',
                    headers: {
                        // 'Content-type': 'application/json'
                    },
                    body: formData
                }
            )
            // Convert encoded string to JSON
            .then(
                function(backendResponse) {
                    return backendResponse.json()
                }
            )
            .then(
                function(jsonResponse) {
                    if(jsonResponse.jobTitle) {
                        setState("successful")
                    } else {
                        setState("unsuccessful")
                    }   
                }
            )
            .catch(
                function(backendError) {
                    setState("unsuccessful");
                }
            )
    
        } 
        // If the required fields are NOT valid
        else {
            // Indicate the error
            setState("validationFailed");
            setFormErrors(errors);
        }
    };
    
    return (
        <div className="container" style={{"margin-top": "5em", "max-width": "40em"}}>
            <h1>Post Job</h1>
            <br/>

            <label>Enter the Job title *</label>
            <input ref={
                function(theComponent) {
                    jobTitleField = theComponent
                }
            } className="field form-control" name="jobTitle" type="text" />      
            
            <label>Enter the Job Location *</label>
            <input ref={
                function(theComponent) {
                    locationField = theComponent
                }
            } className="field form-control" name="location" type="text" />

            <label>Enter the Company Information *</label>
            <input ref={
                function(theComponent) {
                    companyInformationField = theComponent
                }
            } className="field form-control" name="companyInformation" type="text" rows={3} />

            <label>Enter the Job Description *</label>
            <input ref={
                function(theComponent) {
                    jobDescriptionField = theComponent
                }
            } className="field form-control" name="jobDescription" type="textarea" rows={3} />

            <label>Enter the Job Category *</label>
            <input ref={
                function(theComponent) {
                    categoryField = theComponent
                }
            } className="field form-control" name="category" type="text" />
            
            <label>Enter the Required Skills *</label>
            <input ref={
                function(theComponent) {
                    requiredSkillsField = theComponent
                }
            } className="field form-control" name="requiredSkills" type="text"  />   

            <label>Enter the Job timeline *</label>
            <input ref={
                function(theComponent) {
                    timelineField = theComponent
                }
            } className="field form-control" name="timeline" type="text"  />

            <label>Enter the Budget *</label>
            <input ref={
                function(theComponent) {
                    budgetField = theComponent
                }
            } className="field form-control" name="budget" type="number"  />
            
            

            <br/><br/>

            {
                (state !== 'loading' && state !== 'successful') &&
                <button 
                onClick={postJob}
                className="btn btn-primary"
                style={{"padding": "10px", "font-size": "16px"}}>
                    Post Job
                </button>
            }
            
            {
                state === 'loading' &&
                <p>Loading...</p>
            }

            {
                state === 'validationFailed' &&
                <div className="mt-5 alert alert-danger">
                    Please enter correct details
                    
                    <ul>
                    {
                        formErrors.map(
                            function(message) {
                                return (
                                    <li>{message}</li>
                                )
                           }
                        ) 
                    }
                    </ul>

                </div>
            }

            {
                state === 'successful' &&
                <div className="alert alert-success">Account created successfully</div>
            }

            {
                state === 'unsuccessful' &&
                <div className="mt-5 alert alert-danger">Something went wrong. Please try again.</div>
            }
        </div>
        
    )
}


export default JobPostForm;   