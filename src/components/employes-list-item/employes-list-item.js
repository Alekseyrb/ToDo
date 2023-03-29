import './employees-list-item.css';
import {Component} from "react";

class EmployeesListItem extends Component{

    // let classNames = 'list-group-item d-flex justify-content-between';
    // if (increase) {
    //     classNames += ' increase';
    // }
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            rise: false,
        };
    }

    onIncrease = () => {
        // this.setState(state => ({
        //    increase: !state.increase,
        // }));
        this.setState(({increase}) => ({
           increase: !increase,
        }));
    }

    like = () => {
        this.setState(({rise}) => ({
           rise: !rise,
        }));
    }

    render() {
        const {name, salary} = this.props;
        const {increase, rise} = this.state;
        return (
            <li className={`list-group-item d-flex justify-content-between ${rise ? 'like' : ''} ${increase ? 'increase' : ''}`}>
                {/*<li className={classNames}>*/}
                <span onClick={this.like} className='list-group-item-label'>{name}</span>
                <input type="text" defaultValue={salary + '$'} className='list-group-item-input'/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button" className='btn-cookie btn-sm' onClick={this.onIncrease}>
                        <i className='fas fa-cookie'></i>
                    </button>

                    <button type="button" className='btn-cookie btn-sm'>
                        <i className='fas fa-trash'></i>
                    </button>

                    <i className='fas fa-star'></i>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;