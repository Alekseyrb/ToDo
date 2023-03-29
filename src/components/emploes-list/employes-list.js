import EmployeesListItem from "../employes-list-item/employes-list-item";
import './emloyees-list.css';

const EmployeesList = ({data, onDelete}) => {

    const elements = data.map(elem => {
        const {id, ...elemProps} = elem;
        return (
            // <EmployeesListItem name={elem.name} salary={elem.salary}/>
            <EmployeesListItem
                key={id}
                {...elemProps}
                onDelete={() => onDelete(id)}/>
        );
    });

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    );
}

export default EmployeesList;