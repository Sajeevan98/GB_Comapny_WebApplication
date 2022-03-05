import React, { Component } from 'react';
import ProductService from './ProductService';

class ProductList extends Component {
    constructor(props){
        super(props)

        this.state = {           
            Products : []
        }
        this.goToAdd = this.GoingToAddPage.bind(this);
        this.goToUpdate = this.GoingToUpdatePage.bind(this);
        this.goToDelete = this.Deleting.bind(this);
    
    }

    GoingToAddPage(){
        this.props.history.push('/product-add');
    }

    GoingToUpdatePage(id){
        this.props.history.push(`/product-update/${id}`);
    }

    componentDidMount(){
        ProductService.getProduct()
        .then(
            (res)=>{
                this.setState( {Products: res.data} )
            }
        )
    }

    Deleting(id){
        if(window.confirm('Are you sure?'))
        {
            ProductService.deleteProduct(id).then(
                ()=>{
                    this.setState({ Products: this.state.Products.filter( product=> product.id !== id) })
                }
            )
        }
    }


  render() {
    return (
        <div><br/>
            <div className='container bg-white' ><br/>
                <button className="btn btn-outline-success mr-3" onClick={this.goToAdd}> <b className=' mr-2'>Add Product</b><i className="fa-solid fa-circle-plus"></i></button>
                <h5 className='text-center text-secondary'>
                    <i>Available Product-List From DataBase</i></h5>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                                <tr className="p-3 mb-2 bg-secondary text-white text-center" >
                                    <th>Product Id</th>
                                    <th>Product Name</th>
                                    <th>Manufacture Company</th>
                                    <th>Manufacture Year</th>
                                    <th>Special Feature</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Products.map( product =>(
                                <tr className="text-dark" key={product.id}>
                                    <th className="text-danger">{product.id}</th>
                                    <th>{product.name}</th>
                                    <th>{product.company}</th>
                                    <th>{product.year}</th>
                                    <th>{product.feature}</th>  
                                    <th>
                                        <button className="btn btn-primary btn-sm" onClick={ ()=>this.goToUpdate(product.id) }> <b className=' mr-2'>update</b> <i className="fa-solid fa-marker"></i></button>
                                    </th>   
                                    <th>
                                        <button className="btn btn-danger btn-sm" onClick={ ()=>this.goToDelete(product.id) }> <b className=' mr-2'>delete</b> <i className="fa-solid fa-trash-can"></i></button>
                                    </th>                         
                                </tr>
                                ))}
                                
                            </tbody>
                    </table>  
                </div> 

            </div><br/>
        </div>
    )
  }
}

export default  ProductList;