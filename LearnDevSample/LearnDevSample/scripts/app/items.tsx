// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

export interface ItemProps {
    key?: number,
    rating: number,
    href: string,
    title: string,
    description: string
}

export class Item extends React.Component<ItemProps, {}>{
    formattedRating(){
        return this.props.rating.toFixed(1);
    }
    render() {
        return (
            <div className="row record">
                <div className="record-rating">
                    {this.formattedRating()}
                </div>
                <div className="col-sm-12 record-detail">
                    <a href={this.props.href} className="record-title">{this.props.title}</a>
                    <div className="record-description">{this.props.description}</div>
                </div>
            </div>
        );
    }
}

export interface ItemsState{
    data: ItemProps[];
}
export class Items extends React.Component<{}, ItemsState>{
    constructor(props){
        let dataInitialize: ItemProps[] = []; //allows for setting type
        super(props);
        this.state = {
            data: dataInitialize          
        }
    }
    updateData(newData: ItemProps[]){
        console.info('update data');
        this.setState({
            data: newData    
        });
    }
    render(){
        let list: JSX.Element[] = [];
        this.state.data.forEach((item, idx) => {
            list.push(<Item rating={item.rating} title={item.title} description={item.description} href={item.href} key={idx}></Item>);    
        });
        return (
            <div>{list}</div>                
        );    
    }
}


