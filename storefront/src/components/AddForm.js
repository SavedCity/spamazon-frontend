import React, {Component} from "react";
export default class AddForm extends Component {
    state = {
        name: '',
    price :'',
    description :'',
    image : '',
    stock: '',
    created_by:'user'
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }
    handleChangeNumbers = (event) => {
        this.setState({
            [event.target.id] : parseInt(event.target.value)
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addProduct(this.state)
    }
render() {
    return (<div> <h1> add a product!</h1>
        <form onSubmit = {this.handleSubmit}>
        <label htmlFor = 'name'> Name </label>
        <input type = 'text' id ='name' onChange = {this.handleChange} value = {this.state.name}/>


        <label htmlFor = 'name'> Price </label>
        <input type = 'number' id = 'price'  onChange = {this.handleChangeNumbers} value = {this.state.price} />

        <label htmlFor = 'name'> Description </label>
        <input type = 'text' id = 'description' onChange = {this.handleChange} value = {this.state.description} />

        <label htmlFor = 'name'> Image </label>
        <input type = 'text' id = 'image' onChange = {this.handleChange} value = {this.state.image} />

        <label htmlFor = 'name'> Stock </label>
        <input type = 'number' id = 'stock' onChange = {this.handleChangeNumbers} value = {this.state.stock} />

        <label htmlFor = 'name'> created_by </label>
        <input type = 'text' id = 'created_by' onChange = {this.handleChange} value = {this.created_by} />
        <input type="submit" value="Upload Item" />
        </form>




        </div>)
}
}
