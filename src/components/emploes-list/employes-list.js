import EmployeesListItem from "../employes-list-item/employes-list-item";
import './emloyees-list.css';

const EmployeesList = () => {
    return (
        <ul className='app-list list-group'>
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    );
}

export default EmployeesList;