import { ContainerFilters, DivFilters } from "../../styles/Divs";
import { AiOutlineSearch } from "react-icons/ai";
import { JobContext } from "../../contexts/JobContextDU";
import React, { useContext } from "react";

const Filters = () => {
  const { search, setSearch } = useContext(JobContext);

  function filterCard(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  return (
    <ContainerFilters>
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
          <input
            type="text"
            placeholder="Pesquisar"
            value={search}
            onChange={(event) => filterCard(event)}
          />
          <AiOutlineSearch />
        </div>
      </div>
    </DivFilters>
    </ContainerFilters>
    
  );
};

export default Filters;
