import { useContext, useState } from "react";
import { JobContext } from "../../contexts/JobContext";
import JobsAdminStyle from "../../styles/JobsFilterAdmin";
import SelectFilterAdmin from "../SelectFilterAdmin";

function JobsAdmin() {
  const { writtenSearchAdmin } = useContext(JobContext);
  const [searchValue, setSearchValue] = useState("");

  const filteredCard = (value: string) => {
    writtenSearchAdmin(value);
  };

  return (
    <JobsAdminStyle>
      <SelectFilterAdmin />
      <form
        onSubmit={(event) => (
          event.preventDefault(), filteredCard(searchValue)
        )}
        className="borderForm"
      >
        <input
          type="text"
          id="adminJobSearch"
          placeholder="Pesquisar"
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button>Buscar</button>
      </form>
    </JobsAdminStyle>
  );
}

export default JobsAdmin;
