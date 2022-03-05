import React, { Component } from 'react'
import ProductService from './ProductService';

const initialState ={
            Name: '',
            Company: '',
            Year: '',
            Feature: '',

            nameError: '',
            companyError: '',
            yearError: '',
            featureError: ''
}

class AddProduct extends Component {
    constructor(props){
        super(props)
        this.state= initialState;

        this.goToBack = this.GoingToBack.bind(this);
        this.SaveProducts = this.Saving.bind(this);
    }

    GoingToBack(){
        this.props.history.push('/product');
    }

    Cancel(){
        this.props.history.push('/product-add');
    }
  
    handleChangeEvent =(e) =>{
        const isCheckBox = e.target.type ==="checkBox";
        this.setState( {
            [e.target.name]: isCheckBox
            ? e.target.checked
            : e.target.value
        })
    }

    validate =() =>{
        let companyError = "";
        let nameError = "";
        let yearError = "";
        let featureError = "";
        let isValid = true;

        if(!this.state.Name){
            nameError = "Name field cannot be empty!";
        }
        if(!this.state.Company){
            companyError = "Company field cannot be empty!";
        }
        if(!this.state.Year){
            yearError = "Please Enter Manufacture Year!";
        }
        if(!this.state.Feature){
            featureError = "Please Enter Something about your product...";
        }


        if(companyError || nameError || yearError || featureError){
            this.setState(
                {companyError, nameError, yearError, featureError}
            )
            // console.log("error executed: "+isValid);
            return false;
        }
        // console.log("function returned:"+isValid);
        return isValid;
    } 


    Saving =(e) =>{

        e.preventDefault();
        const product_details = {name: this.state.Name, company: this.state.Company, year: this.state.Year, feature: this.state.Feature}
        const isValid = this.validate();
        // console.log(isValid)
        console.log("product Details ---> " + JSON.stringify(product_details)); 

        if(isValid){          
            let status = ProductService.addProduct(product_details)
            .then(
                ()=>{
                        if(status){
                            console.log("data successfully added");
                            this.props.history.push("/product-add"); 
                            this.setState(initialState); //clear form
                        }
                }
            )
        }
        
    }

  render() {
    return (
            <div><br/>
                <form className='container bg-light' style={{ width: '58rem' }} ><br/>
                <button className="btn btn-outline-warning mr-3" onClick={this.goToBack}> <b className=' mr-2'>BACK</b><i className="fa-solid fa-backward"></i></button>
                    <h3 className='text-center text-success'>Add Product</h3>

                    <div className='text-dark'  >
                        <div className="card-body">
                            <label ><b>Product Name</b></label>
                            <input type="text" className="form-control" placeholder="Enter product name" name="Name" 
                            value={this.state.Name}
                            onChange={this.handleChangeEvent.bind(this)}
                            />
                            <div style={{ fontSize:'14px', color:'red', fontWeight:'500', fontStyle:'italic' }}>{this.state.nameError}</div> 
                        </div>

                        <div className="card-body">
                            <label ><b>Manufacture Company</b></label>
                            <input type="text" className="form-control" placeholder="Enter manufacture company name " name="Company"
                            value={this.state.Company}
                            onChange={this.handleChangeEvent.bind(this)}
                            />
                            <div style={{ fontSize:'14px', color:'red', fontWeight:'500', fontStyle:'italic' }}>{this.state.companyError}</div>
                        </div>

                        <div className="card-body">
                            <label ><b>Manufacture Year</b></label>
                            <input type="text" className="form-control" placeholder="Enter manufacture Year " name="Year"
                            value={this.state.Year}
                            onChange={this.handleChangeEvent.bind(this)}
                            />
                             <div style={{ fontSize:'14px', color:'red', fontWeight:'500', fontStyle:'italic' }}>{this.state.yearError}</div> 
                        </div>

                        <div className="card-body">
                            <label><b>Features</b></label>
                            <input type="text" className="form-control" placeholder="Enter features of the product " name="Feature"
                            value={this.state.Feature}
                            onChange={this.handleChangeEvent.bind(this)}
                            />
                             <div style={{ fontSize:'14px', color:'red', fontWeight:'500', fontStyle:'italic' }}>{this.state.featureError}</div> 
                        </div>
                    </div>
                        <br /> <br />
                        <button className="btn btn-outline-success mr-3" onClick={this.SaveProducts}> <b className=' mr-2'>ADD</b> <i className="fa-solid fa-thumbs-up"></i></button>
                        <button className="btn btn-outline-danger mr-3" onClick={this.Cancel.bind(this)}> <b className=' mr-2'>CANCEL</b> <i className="fa-solid fa-thumbs-down"></i></button>
                        <br/><br/>
                </form><br/>
            </div>
       
    )
  }
}

export default AddProduct;