import { ContainerFilters, DivFilters } from "../../styles/Divs";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useContext, useState } from "react";
import { JobContext } from "../../contexts/JobContextDU";
import SelectFilter from "../SelectFilter";

const Filters = () => {
  const { writtenSearch } = useContext(JobContext);
  const [valueSeacrh, setValueSeacrh] = useState("");

  const filterCard = (value: string) => {
    writtenSearch(value);
  };

  return (
    <ContainerFilters>
      <DivFilters>
        <SelectFilter />
        <div className="searchBar">
          <div className="searchBarInput">
            <form
              onSubmit={(event) => (
                event.preventDefault(), filterCard(valueSeacrh)
              )}
              action=""
            >
              <input
                type="text"
                placeholder="Pesquisar"
                onChange={(event) => setValueSeacrh(event.target.value)}
              />
              <button>Buscar</button>
            </form>
          </div>
        </div>
      </DivFilters>
    </ContainerFilters>
  );
};

export default Filters;
