function JobsAdmin() {
  return (
    <div className="jobsFilter">
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
    </div>
  );
}

export default JobsAdmin;
