import React, {useState} from "react";

export default function Challenges() {
    //import the context to show that user is logged in
    //if not logged in, either navigate them to another page, or show an element that says not authorised

    //if logged in, then you render the elements below
    //let currentTime = new Date()

    //GET fetch function or axios to the backend endpoint
    //backend endpoint should return a response status, as well as the result is successful
    //JSON
    //JSON.parse --> convert the JSOn string into a regular JS object
    //with the result, you output the values into your JSX


    //Reigster page
    //input min length of 8 characters
    //create a state that checks your input value
    //create an error state
    //input --> onChange call function once the event fires
    //inside the function, your logic should check the value.length
    //if value.length is < 8, set error state to display a error message
    const [flag, setFlag] = useState('')

    function handleChange(event) {
        setFlag(event.target.value)
    }

    function submitChallenge() {
        if (flag === "statue") {
            alert("Success")
        } else {
            alert("try again")
        }
        
    }

    return (
        <>
            <link rel="stylesheet" href="../css/styles.css" />
            <link rel="stylesheet" href="../css/Bootstrap.css" />
            <div class="row">
                <div class="col-xl-12  text-center">
                    <h1 class="display-1 bold color_white content__title">Challenges<span class="vim-caret">&nbsp;</span></h1>
                    <p class="text-grey text-spacey hackerFont lead mb-5">
                        Want a go at what we offer? Try any of the two challenges here!
                    </p>
                </div>
            </div>
            <br />
            <div class="col-md-12">
                <h4>Try these out!</h4>
            </div>

            <div class="col-md-4 mb-3">
                <div class="card category_web">
                    <div class="card-header solved" data-target="#problem_id_1" data-toggle="collapse" aria-expanded="true" aria-controls="problem_id_1">
                        Salad Bowl
                    </div>
                    <div id="problem_id_1" class="card-body collapse show">
                        <blockquote class="card-blockquote">
                            <p className={flag ? 'text-success' : 'text-gray'}>
                                Challenge 1: Mom said it was Xfqfi Ynrj! (Decrypt what "Xfqfi Ynrj" is and input it in MD5!) (7ca08393fa89108a58f6e477dc1fdc30)
                            </p>
                            <div class="row submit-row">
                                <div class="col-12 col-sm-4 mt-3 mt-sm-0 key-submit">
                                    <button id="challenge-submit" class="challenge-submit btn btn-outline-secondary w-100 h-100" type="submit" onClick={submitChallenge}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    );
}
