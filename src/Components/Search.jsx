import React from "react"


function Search(props){
        return(

        <div>
            <p>Showing {props.noOfMovies} from the database</p>
            <button type="button" class="btn btn-primary mb-4">New</button>
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1"
             onChange={(e)=>{
                 props.receiveSearchParam(e.currentTarget.value)
             }}
             />
            </div>
        </div>
        )
    };


export default Search;