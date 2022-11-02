import { DivFilters } from "../../styles/Divs"
import {AiOutlineSearch} from "react-icons/ai"

const Filters = () => {

    return (
       <DivFilters>
        <div className="selectFilter">
            <select id="tech">
                <option value="">Tecnologias</option>
            </select>
            <select id="wage">
                <option value="">Salários</option>
            </select>
            <select id="kindWork">
                <option value="">Tipo de vaga</option>
            </select>
        </div>
        <div className="searchBar">
            <div className="searchBarInput">
                <input type="text" placeholder="Pesquisar" />
                <AiOutlineSearch/>
            </div>
        </div>
       </DivFilters>
    )
}

export default Filters