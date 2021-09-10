import * as React from "react"

interface Test{
    name: string
}

interface TestProps {
    data: Test
}
 
const TestComponent: React.FC<TestProps> = (props) => {
    return ( 
        <h1>Test component {props.data.name}</h1>
     );
}
 
export default TestComponent
