import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../emploes-list/employes-list";
import EmployesAddForm from "../employes-add-form/employes-add-form";

function App() {
    return (
        <div className={'app'}>
            <AppInfo/>

            <div className={'search-panel'}>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList/>

            <EmployesAddForm/>
        </div>
    );
}

export default App;