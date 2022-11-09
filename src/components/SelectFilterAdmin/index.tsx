import { useContext, useState } from "react";
import { JobContext } from "../../contexts/JobContext";
import { JobContext as teste } from "../../contexts/JobContextDU";

const SelectFilterAdmin = () => {
  const [selectTechAdm, setSelectTechAdm] = useState<string>("");
  const [selectSalaryAdm, setSelectSalaryAdm] = useState<string>("");
  const [selectTypeAdm, setSelectTypeAdm] = useState<string>("");

  const { filterSelectAdm } = useContext(JobContext);
  const { allJobs } = useContext(teste);

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
        <select
          onChange={(event) => setSelectTechAdm(event.target.value)}
          id="tecnologies"
          defaultValue={"default"}
        >
          <option value="">Tecnologia</option>
          {allJobs
            .map((Element) => Element.tech)
            .reduce((list, sub) => list.concat(sub), [])
            .filter((Element, index, self) => index === self.indexOf(Element))
            .map((Element) => {
              return <option value={Element}>{Element}</option>;
            })}
        </select>
        <select
          onChange={(event) => setSelectTypeAdm(event.target.value)}
          id="type"
          defaultValue={"default"}
        >
          <option value="">Tipo</option>
          <option value="Rem">Remoto</option>
          <option value="Híb">Hibrido</option>
          <option value="Pre">Presencial</option>
        </select>

        <select
          onChange={(event) => setSelectSalaryAdm(event.target.value)}
          id="salary"
          defaultValue={"default"}
        >
          <option value={"default"} disabled>
            Salário
          </option>
          <option value="0">R$0 a R$5.000</option>
          <option value="5000">R$5.000 a R$10.000</option>
          <option value="10000">R$10.000 a R$15.000</option>
          <option value="15000">R$15.000 a R$20.000</option>
          <option value="20000">R$20.000 a R$25.000</option>
          <option value="25000">R$25.000 a R$30.000</option>
        </select>
        <button>Filtrar</button>
      </form>
    </div>
  );
};

export default SelectFilterAdmin;
