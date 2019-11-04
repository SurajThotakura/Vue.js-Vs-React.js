import React, {Component} from 'react'
import CasesTable from './Components/CasesTable'
import Cases from './cases.json';


class App extends Component {
  render(){
    const tagColor = {
      'Open':'yellowTag',
      'Closed':'greenTag',
      'Customer no show': 'redTag',
      'Escalated': 'orangeTag'
  }
    return (
      <div>
        <CasesTable casesData = { Cases } tagColor = {tagColor}/>
      </div>
    )
  }
}

export default App;
