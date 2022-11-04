import { DivFilters } from "../../styles/Divs";
import { AiOutlineSearch } from "react-icons/ai";
// import { listenerCount } from "process";
import SelectFilter from "../SelectFilter";

const Filters = () => {
  return (
    <DivFilters>
      <SelectFilter />
      <div className="searchBar">
        <div className="searchBarInput">
          <input type="text" placeholder="Pesquisar" />
          <AiOutlineSearch />
        </div>
      </div>
    </DivFilters>
  );
};

export default Filters;
