import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        imageUrl: 'https://picsum.photos/200',
        tags: []

    };
    handleIncrement = () =>{
        // console.log(product);
        this.setState({count: this.state.value + 1});
    };
    renderTags(){
        if(this.state.tags.length === 0)
        return <p>There is no tag !!!</p>;

        return <ul>
        {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        
    }
    render() { 
        console.log('props',this.props);

        return(
         <div>
             {this.props.children}
             {this.state.tags.length === 0 && "Please create a new tag !!"}
             {this.renderTags()}
             <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
             <button onClick={() => this.handleIncrement({id:1})} className="btn btn-secondary btn-sm">Increment</button>
             </div>
        
        )

    }
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount = () =>{
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }

}
 
export default Counter;