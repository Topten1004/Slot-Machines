//  <img src="./images/banana.png" alt="banana">
//  <img src="./images/orange.png" alt="orange">
//  <img src="./images/grape.jpg" alt="grape">
// import {Row} from './Row.js'

// console.log(Row)
class App extends React.Component {
    render () {
        // let num = 8;
        // console.log(num > 7 && 'winner' );

        return (
            <div > 
                <Row 
                    num='1'
                    s1={'🍊'}
                    s2='🍇'
                    s3='🍎'
                />
                <Row 
                    // num={'2'}
                    s1={'🍊'} 
                    s2='🍊' 
                    s3='🍊'
                    arr={[1,2,3,4]}
                    obj={{boy: 'boy', girl: 'zino', dog: 'peggy'}}
                />
            </div>
        )
    }
}
ReactDOM.render (<App/>, document.querySelector('#root'));