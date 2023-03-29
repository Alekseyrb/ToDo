import './employees-add-form.css';
import {Component} from "react";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ' ',
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value, //для получения атрибута name
        });
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className='app-add-form'>
                <h3>Добавить нового сотрудника</h3>
                <form className='add-form d-flex'>
                    <input type="text"
                           onChange={this.onValueChange}
                           name='name'
                           value={name}
                           className='form-control new-post-label'
                           placeholder='Как его зовут?'/>
                    <input type="number"
                           onChange={this.onValueChange}
                           name='salary'
                           value={salary}
                           className='form-control new-post-label'
                           placeholder='З/П в $?'/>
                    <button type="button" className='btn btn-outline-light'>Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;