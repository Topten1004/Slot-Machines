
class Row extends React.Component {
    static defaultProps = {
        num: 0,
        isWinner: true
    }
    render () {
        console.log(this.props);

        const  {num, s1, s2, s3} = this.props;
        const isWinner = ((s1===s2) && (s2 ===s3)) ? ('Winner'): 'Looser' ;
        const isWinColor = ((s1===s2) && (s2 ===s3)) ? 'win': 'loose' ;

        console.log(89, Row.defaultProps);
        const manos = ['play', 'sing', 'jump', 'shout'];
        manos.map((man, ind) => console.log(man, ind));
        return (
            <div style={{backgroundColor: 'grey', color: 'gold', border: '5px solid green'}}>
                <div>
                   {manos.map((man, index) => <p key={index}>{man}</p>)}
                </div>
                <h1>Row{num}</h1>
                <p >{s1} {s2} {s3}</p>
                <h2 className={isWinColor} >{isWinner}</h2>
                {/* <img src="./images/banana.png" alt="banana"></img>
                <img src="./images/orange.png" alt="orange"></img>
                <img src="./images/images.jfif" alt="grape"></img> */}
            </div>
        )
    }
}
