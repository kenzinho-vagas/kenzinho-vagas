import { useContext, useState } from "react";
import { JobContext } from "../../contexts/JobContext";
import JobsAdminStyle from "../../styles/JobsFilterAdmin";

function JobsAdmin() {
  const { writtenSearchAdmin } = useContext(JobContext);
  const [searchValue, setSearchValue] = useState("");

  const filteredCard = (value: string) => {
    writtenSearchAdmin(value);
  };

  return (
    <JobsAdminStyle>
      <div className="searchSelect">
        <div className="filterLeft">
          <select id="tecnologies" defaultValue={"default"}>
            <option value="default" disabled>
              Tecnologia
            </option>
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
            <option value="typescript">TypeScript</option>
          </select>
          <select id="type" defaultValue={"default"}>
            <option value="default" disabled>
              Tipo
            </option>
            <option value="remoto">Remoto</option>
            <option value="hibrido">Hibrido</option>
            <option value="presencial">Presencial</option>
          </select>
        </div>
        <div className="filterRight">
          <select id="salary" defaultValue={"default"}>
            <option value="default" disabled>
              Salário
            </option>
            <option value="1000">R$1.000</option>
            <option value="2000">R$2.000</option>
            <option value="5000">R$5.000</option>
          </select>
          <select id="company" defaultValue={"default"}>
            <option value="deafult" disabled>
              Empresa
            </option>
            <option value="microsoft">Microsoft</option>
            <option value="google">Google</option>
          </select>
        </div>
      </div>
      <form
        onSubmit={(event) => (
          event.preventDefault(), filteredCard(searchValue)
        )}
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
