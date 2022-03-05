import React, { Component } from 'react'
import ProductService from './ProductService';

class UpdateProduct extends Component {
    constructor(props){
        super(props)
        this.state ={
            Id : this.props.match.params.id, //get the Id which will be click to update...
            Name: '',
            Company: '',
            Year: '',
            Feature: '',

        }
        this.goToBack = this.goingToBack.bind(this);
        this.updateProducts = this.Updating.bind(this);
        
    }

    goingToBack(){
        this.props.history.push('/product');
    }

    changeProductName = (e)=> {
        this.setState( { Name: e.target.value })
    }
    changeProductCompany = (e)=> {
        this.setState( { Company: e.target.value })
    }
    changeProductYear = (e)=> {
        this.setState( { Year: e.target.value })
    }
    changeProductFeature = (e)=> {
        this.setState( { Feature: e.target.value })
    }

    componentDidMount(){
        ProductService.getProductById(this.state.Id)
        .then( (res)=>{
                    const product = res.data;
                    this.setState({
                        Name: product.name, 
                        Company: product.company,
                        Year: product.year, 
                        Feature: product.feature
                        
                    });
            }
        );
    }

    Updating = (e)=> {
        e.preventDefault();
        const product_details = {name: this.state.Name, company: this.state.Company, year: this.state.Year,  
                                    feature: this.state.Feature}

        console.log( 'products => '+ JSON.stringify(product_details));

        ProductService.updateProduct(product_details, this.state.Id)
        .then(
            (res)=>{
                this.props.history.push('/product')
                console.log( 'data updated successfully!')
            }
        )

       
        
    }


    render() {
    return (

            <div><br/>
                <form className='container bg-light' style={{ width: '58rem' }} ><br/>
                <button className="btn btn-outline-warning mr-3" onClick={this.goToBack}> <b className=' mr-2'>BACK</b><i className="fa-solid fa-backward"></i></button>
                    <h3 className='text-center text-primary'>Update Product</h3>

                    <div className='text-dark'  >
                        <div className="card-body">
                            <label>Id</label>
                            <input type="text" className="form-control text-danger font-weight-bold" name="name"
                            value={this.state.Id}
                            readOnly/>
                        </div>
                        <div className="card-body">
                            <label ><b>Product Name</b></label>
                            <input type="text" className="form-control" placeholder="Enter product name" name="Name" 
                            value={this.state.Name}
                            onChange={this.changeProductName.bind(this)}
                            />
                            <div style={{ fontSize:'14px', color:'red', fontWeight:'500', fontStyle:'italic' }}>{this.state.nameError}</div> 
                        </div>

                        <div className="card-body">
                            <label ><b>Manufacture Company</b></label>
                            <input type="text" className="form-control" placeholder="Enter manufacture company name " name="Company"
                            value={this.state.Company}
                            onChange={this.changeProductCompany.bind(this)}
                            />
                            <div style={{ fontSize:'14px', color:'red', fontWeight:'500', fontStyle:'italic' }}>{this.state.companyError}</div>
                        </div>

                        <div className="card-body">
                            <label ><b>Manufacture Year</b></label>
                            <input type="text" className="form-control" placeholder="Enter manufacture Year " name="Year"
                            value={this.state.Year}
                            onChange={this.changeProductYear.bind(this)}
                            />
                             <div style={{ fontSize:'14px', color:'red', fontWeight:'500', fontStyle:'italic' }}>{this.state.yearError}</div> 
                        </div>

                        <div className="card-body">
                            <label><b>Features</b></label>
                            <input type="text" className="form-control" placeholder="Enter features of the product " name="Feature"
                            value={this.state.Feature}
                            onChange={this.changeProductFeature.bind(this)}
                            />
                             <div style={{ fontSize:'14px', color:'red', fontWeight:'500', fontStyle:'italic' }}>{this.state.featureError}</div> 
                        </div>
                    </div>
                        <br /> <br />
                        <button className="btn btn-primary" onClick={this.updateProducts} > <b>UPDATE</b> </button>
                        <br/><br/>
                </form><br/>
            </div>
    )
  }
}
export default UpdateProduct;
