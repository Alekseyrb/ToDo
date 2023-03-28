import EmployeesListItem from "../employes-list-item/employes-list-item";
import './emloyees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(elem => {
       return (
           // <EmployeesListItem name={elem.name} salary={elem.salary}/>
           <EmployeesListItem {...elem}/>
       );
    });

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    );
}

export default EmployeesList;