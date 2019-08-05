import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import M from 'materialize-css';

import axios from 'axios';

export default class AddCelebrity extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            instagram: "",
            twittter: "",
            youtube: "",
            image: "",
            category: "",
        }
    }


    
    componenetDidMount(){
        window.selectInit();
    }      

    handleFormSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/api/celebrity", {
            name: this.state.name,
            instagram: this.state.instagram,
            twitter: this.state.twitter,
            youtube: this.state.youtube,
            image: this.state.image,
            category: this.state.category,
          }, {withCredentissals: true })
        .then( () => {
            this.props.getData();
            // this function updates the list in ProjectIndex.js
            this.setState({name: "", instagram: "", youtube: "", twitter: "", image: "", category: ""});
        })
        .catch( error => console.log(error) )
      }


      // Explain
      handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }


    render() {
        return (
            <div>


                {/* <!-- Modal Structure --> */}
                <div id="addCelebrity" class="modal modal-fixed-footer">
                    <div className="modal-content">
                        <form onSubmit={this.handleFormSubmit}>
                            <label>
                                Name:
                                <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
                            </label>
                            <label>
                                Twitter Handle:
                                <input type="text" name="twitter" value={this.state.twitter} onChange={ e => this.handleChange(e)}/>
                            </label>
                            <label>
                                Instagram Handle:
                                <input type="text" name="instagram" value={this.state.instagram} onChange={ e => this.handleChange(e)}/>
                            </label>
                            <label>
                                Youtube Handle:
                                <input type="text" name="youtube" value={this.state.youtube} onChange={ e => this.handleChange(e)}/>
                            </label>
                            <label>
                                Celebrity Image:
                                <input type="file" name="pic" accept="image/*" />
                            </label>
                            <label>
                                Category:
                                <input type="text" name="category" value={this.state.category} onChange={ e => this.handleChange(e)}/>
                            </label>

                            {/* <select>
                                <option value="" disabled selected>Choose your option</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select> */}


                            <input className =".modal-close" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>







            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

});

