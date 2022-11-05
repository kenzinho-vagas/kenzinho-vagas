import { DivFilters } from "../../styles/Divs";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useContext, useState } from "react";
import { JobContext } from "../../contexts/JobContextDU";
import SelectFilter from "../SelectFilter";

const Filters = () => {
  const { writtenSearch } = useContext(JobContext);
  const [valueSeacrh, setValueSeacrh] = useState("");

  // function filterCard(event: React.ChangeEvent<HTMLInputElement>) {
  //   event.preventDefault();
  //   setSearch(event.target.value);
  // }

  const filterCard = (value: string) => {
    writtenSearch(value);
  };

  return (
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
              // value={search}
              onChange={(event) => setValueSeacrh(event.target.value)}
            />
            <button>Buscar</button>
          </form>
          {/* <AiOutlineSearch /> */}
          {/* <div className="searchBar">
        <div className="searchBarInput">
          <input
            type="text"
            placeholder="Pesquisar"
            value={search}
            onChange={(event) => filterCard(event)}
          />
          <AiOutlineSearch /> */}
        </div>
      </div>
    </DivFilters>
  );
};

export default Filters;
