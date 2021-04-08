import React from "react";
 
class AppView extends React.Component{
 
    constructor(props){
        super(props);
        this.state = {newItem: ""};
         
        this.onInputChange = this.onInputChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onInputChange(e){
        this.setState({newItem:e.target.value});
    }
    onClick(e){
        if(this.state.newItem){
            this.props.onAddItem(this.state.newItem);
            this.setState({newItem:" "});
        }
    }
    render(){

        let remove = this.props.onRemoveItem;
        let upd = this.props.onUpdateItem;
        return <div> 
                <input type="text" value={this.state.newItem} onChange={this.onInputChange} />    
                <button onClick={this.onClick}>Добавить</button>
                <button onClick={()=>alert(this.props.phones)}>Чек</button>
            <h2>Список смартфонов</h2>
                <div>
                    {
                        this.props.phones.map(function(item){
                            return <Phone key={item} text={item} onRemove={remove} onUpdate={upd} />
                        })
                    }
                </div>
            </div>;
    }
}
 
class Phone extends React.Component{
 
    constructor(props){
        super(props);
        this.initialstate={text: props.text}
        this.state = {text: props.text};
        this.onInputChange = this.onInputChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onClick2 = this.onClick2.bind(this);
    }
    onInputChange(e){
        this.setState({text:e.target.value});
    }
    onClick(e){
        this.props.onRemove(this.state.text);
    }
    onClick2(e){
        this.props.onUpdate(this.initialstate.text, this.state.text)

    }
    render(){
        return <div> 
                <p>
                    <input type="text" value={this.state.text} onChange={this.onInputChange}/><br />
                    <button onClick={this.onClick}>Удалить</button>
                    <button onClick={this.onClick2}>Редакт</button>
                </p>
            </div>;
    }
}
export default AppView;