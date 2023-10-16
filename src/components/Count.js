import './Count.css';
import {Component} from 'react';
export class WordCount extends Component{
    constructor(props)
    {
        super(props);
        this.state={count:0};
    }
    handleChange=(event)=>{
        const sentence=event.target.value;
        if(sentence==="")
        {
            this.setState({
                count:0
            })
        }
        else{
            const words=sentence.split(/\s+|\./).filter(word=>word!=='');
            this.setState({
                count:words.length,
            })
        }
    }
    render()
    {
        return(
            <div>
                <div class="heading"><h1>Responsive Paragraph Word Counter</h1></div>
                <div class="textarea"><textarea rows="6" cols="50" placeholder='Enter the Text here' onChange={this.handleChange}></textarea></div>
                <div class="result"><p>Word Count:{this.state.count}</p></div>
            </div>
        );
    }
    
}