import React,{useState,useEffect} from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';

// REact.useMemo
 const Button = React.memo((props)=>{

        console.log('redner Button')
        return(<TouchableOpacity {...props}>
              <Text> CLick {props.name}</Text>
        </TouchableOpacity>
)
})



//  class Button extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     console.log('render button')
//     return (
//       <TouchableOpacity {...this.props}>
//              <Text> CLick</Text>
//       </TouchableOpacity>
//     );
//   }
// }


const App = ({
    params,
}) => 

{
  const [num,setNum] = useState(1)
  const func=()=>{
    setNum(num+1)
  }
  return(
    <View style={{marginTop:100}}>
        <Text style={{width:200}}>Appdddddddddddddddddddddddddddddllllllllllll</Text>
        <Text>{num}</Text>
              <Button name='aaa' onPress={func}/>
        <TouchableOpacity onPress={func}>
          <Text>an vao</Text>
        </TouchableOpacity>
    </View>
);}

export default App;



// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         num:1
//     };
//   }
// func=()=>{
//     this.setState({num:this.state.num+1})
// }
//   render() {
//     return (
//     <View style={{marginTop:100}}>
//         <Text>App</Text>
//         <Text>{this.state.num}</Text>
//         <Button onPress={this.func}/>
//     </View>
//     );
//   }
// }
