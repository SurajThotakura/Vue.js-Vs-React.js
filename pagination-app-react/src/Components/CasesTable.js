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

class CasesTable extends Component {
    constructor(props) {
        super();
        this.state = {
            pageData: props.casesData,
            page: 0,
            perPage: 10,
        };
        this.goTo = this.goTo.bind(this);
    }
      goTo(e) {
        this.setState(state => ({
            page: e
          }));
      }
    render() {
        
        //table body component -------------------------------------------------------------
        let {pageData, page, perPage} = this.state
        let pageNumber = this.state.page
        let totalPages = Math.ceil(this.props.casesData.length/perPage)
        let from = page * perPage;
        let to = (page + 1) * perPage;
        let displayData = pageData.slice(from, to)
        const cases = displayData.map((cases, index) => {
            return(
                <tr key={index}>
                    <td>{'SP-'+cases.id}</td>
                    <td>{cases.name}</td>
                    <td>{cases.type}</td>
                    <td>{cases.doctor}</td>
                    <td>
                        {<i className={this.props.tagColor[cases.status]}></i>}
                        {cases.status}
                    </td>
                    <td>{cases.lastUpdated}</td>
                </tr>
            )
        })
        //table body component -------------------------------------------------------------

        return(
            <div>

                <table>
                    <TableHeader />
                    <tbody>{cases}</tbody>
                </table>

                <div className="pagination">

{/* previous button */}
                    <div style={{float:'left'}}>{pageNumber > 0
                        ? <button className="previous" onClick={(e) => this.goTo(pageNumber-1)}>
                            <i className="material-icons">navigate_before</i>
                        </button>
                        : <button className="previous" disabled>
                            <i className="material-icons">navigate_before</i>
                        </button>
                    }
                    </div>

{/* first page */}
                    <button className="pgBlock" onClick={(e) => this.goTo(0)}>1</button>

{/* second page */}
                    <div style={{float:'left'}}>{pageNumber === totalPages-1 || pageNumber === 0
                        ? <button className="pgBlock" onClick={(e) => this.goTo(1)}>2</button>
                        : <div className="pgBlock">...</div>}
                    </div>

{/* current page */}
                    <div className="pgBlock">{pageNumber === totalPages-1 || pageNumber === 0 ? <div>...</div> : <div>{page+1}</div>}</div>

{/* last but one page */}
                    <div style={{float:'left'}}>{pageNumber === totalPages-1 || pageNumber === 0
                        ? <button className="pgBlock" onClick={(e) => this.goTo(totalPages-2)}>{totalPages-1}</button>
                        : <div className="pgBlock">...</div>}
                    </div>

{/* last page */}
                    <button className="pgBlock" onClick={(e) => this.goTo(totalPages-1)}>{totalPages}</button>

{/* next button */}
                    <div style={{float:'left'}}>{pageNumber < totalPages-1
                        ? <button className="next" onClick={(e) => this.goTo(pageNumber+1)}>
                            <i className="material-icons">navigate_next</i>
                        </button>
                        : <button className="next" disabled>
                            <i className="material-icons">navigate_next</i>
                        </button>
                    }
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default CasesTable