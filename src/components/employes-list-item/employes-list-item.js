import './employees-list-item.css';

const EmployeesListItem = ({name, salary, increase}) => {

    // let classNames = 'list-group-item d-flex justify-content-between';
    // if (increase) {
    //     classNames += ' increase';
    // }

    return (
        <li className={`list-group-item d-flex justify-content-between ${increase ? 'increase' : ''}`}>
        {/*<li className={classNames}>*/}
            <span className='list-group-item-label'>{name}</span>
            <input type="text" defaultValue={salary + '$'} className='list-group-item-input'/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button" className='btn-cookie btn-sm'>
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

export default EmployeesListItem;