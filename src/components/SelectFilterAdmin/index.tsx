import { useContext, useState } from "react";
import { JobContext } from "../../contexts/JobContext";

const SelectFilterAdmin = () => {
  const [selectTechAdm, setSelectTechAdm] = useState<string>("");
  const [selectSalaryAdm, setSelectSalaryAdm] = useState<string>("");
  const [selectTypeAdm, setSelectTypeAdm] = useState<string>("");

  const { filterSelectAdm } = useContext(JobContext);

  return (
    <div className="searchSelect">
      <form
        onSubmit={(event) => {
          filterSelectAdm(
            (event.preventDefault(),
            {
              tech: selectTechAdm,
              salary: selectSalaryAdm,
              type: selectTypeAdm,
            })
          );
        }}
        action=""
      >
        {/* <div className="filterLeft"> */}
        <select
          onChange={(event) => setSelectTechAdm(event.target.value)}
          id="tecnologies"
          defaultValue={"default"}
        >
          <option value="">Tecnologia</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Angular">Angular</option>
        </select>
        <select
          onChange={(event) => setSelectTypeAdm(event.target.value)}
          id="type"
          defaultValue={"default"}
        >
          <option value="">Tipo</option>
          <option value="Remoto">Remoto</option>
          <option value="Híbrido">Hibrido</option>
          <option value="Presencial">Presencial</option>
        </select>
        {/* </div> */}
        {/* <div className="filterRight"> */}
        <select
          onChange={(event) => setSelectSalaryAdm(event.target.value)}
          id="salary"
        >
          <option value="" selected>
            Salário
          </option>
          <option value="0">R$0 a R$5.000</option>
          <option value="5000">R$5.000 a R$10.000</option>
          <option value="10000">R$10.000 a R$15.000</option>
          <option value="15000">R$15.000 a R$20.000</option>
          <option value="20000">R$20.000 a R$25.000</option>
          <option value="25000">R$25.000 a R$30.000</option>
        </select>
        {/* <select
        onChange={(event) => setSelectCompanyAdm(event.target.value)}
        id="company"
      >
        <option value="" selected>
          Empresa
        </option>
        <option value="microsoft">Microsoft</option>
        <option value="google">Google</option>
      </select> */}
        {/* </div> */}
        <button>Filtrar</button>
      </form>
    </div>
  );
};

export default SelectFilterAdmin;
