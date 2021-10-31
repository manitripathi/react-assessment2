import {Component} from 'react';
import './App.css';

function Input(props){
        return(
            <div className='placeInput'>
            <div className='flexBox'>  
              Name:{props.index.Name} | Department:{props.index.Department} | Rating:{props.index.Rating}
            </div>
          </div>
        );
    }
class FormOutput extends Component {
      render() {
        return (
          <ul>
            {this.props.arr.map((index) => {
              return <Input key={index.id} index={index} />;
            })}
          </ul>
        );
      }
    }
export default FormOutput;