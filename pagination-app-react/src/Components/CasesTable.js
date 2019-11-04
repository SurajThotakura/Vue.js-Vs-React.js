import React, {Component} from 'react'
import './CasesTable.css'

const TableHeader = () => {
    return(
        <thead className="header">
            <tr>
                <td>Case ID</td>
                <td>Patient Name</td>
                <td>Type</td>
                <td>Clinician</td>
                <td>Status</td>
                <td>Last Updated</td>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const cases = props.casesData.map((cases, index) => {
        return(
            <tr key={index}>
                <td>{'SP-'+cases.id}</td>
                <td>{cases.name}</td>
                <td>{cases.type}</td>
                <td>{cases.doctor}</td>
                <td>
                    {<i className={props.colorTag[cases.status]}></i>}
                    {cases.status}
                </td>
                <td>{cases.lastUpdated}</td>
            </tr>
        )
    })

    return <tbody className="tbody">{cases}</tbody>
}

class CasesTable extends Component {
    render() {
        const { casesData, tagColor } = this.props
        let page = 0
        const perPage = 10
        let from = page * perPage;
        let to = (page + 1) * perPage;
        let pagination = [casesData.slice(from, to)];
        console.log(pagination);
        return(
            <table>
                <TableHeader />
                <TableBody casesData = {casesData} colorTag = {tagColor} />
            </table>
        )
    }
}

export default CasesTable