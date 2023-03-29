import EmployeesListItem from "../employes-list-item/employes-list-item";
import './emloyees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(elem => {
        const {id, ...elemProps} = elem;
        return (
            // <EmployeesListItem name={elem.name} salary={elem.salary}/>
            <EmployeesListItem key={id} {...elemProps}/>
        );
    });

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    );
}

export default EmployeesList;