import { IJobsProps } from "../Cards"

interface IListsProps {
    objectArray: IJobsProps[]
}

const Lists = ({ objectArray }: IListsProps) => (
    <ul>
        {
            objectArray.map((object: IJobsProps) => (
                <li key={ object.id }>
                    <h3>{ object.specialty }</h3>
                    <p>{ object.company_name }</p>
                    <p>{ object.level }</p>
                    <p>{ object.kind_of_work }</p>
                    <p>{ object.salary }</p>
                    <button>Ver detalhes</button>
                </li>
            ))
        }
    </ul>
)

export default Lists