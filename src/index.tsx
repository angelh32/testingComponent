import * as React from "react"
import * as ReactDOM from "react-dom"
import TestComponent from "./components/testCard"

const App = () => {
    const data = {
        name: "test"
    }
    return <>
        <TestComponent data={data} />
    </>
    
}

ReactDOM.render(<App/>, document.getElementById("root"))