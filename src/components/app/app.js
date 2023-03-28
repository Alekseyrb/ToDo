import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../emploes-list/employes-list";
import EmployesAddForm from "../employes-add-form/employes-add-form";

function App() {

    const data = [
        {name: 'John C.', salary: 800, increase: false},
        {name: 'Alex M.', salary: 3000, increase: true},
        {name: 'Den W.', salary: 500, increase: false},
    ];

    return (
        <div className={'app'}>
            <AppInfo/>

            <div className={'search-panel'}>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>

            <EmployesAddForm/>
        </div>
    );
}

export default App;