import JobsAdminStyle from "../../styles/JobsFilterAdmin";

function JobsAdmin() {
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
      <input type="text" id="adminJobSearch" placeholder="Pesquisar" />
    </JobsAdminStyle>
  );
}

export default JobsAdmin;
