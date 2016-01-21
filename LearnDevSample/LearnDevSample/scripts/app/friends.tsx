/// <reference path="../../typings/react-global.d.ts" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


interface FriendsProps {
    initialData: FriendProps[]
}

export interface FriendProps {
    id?: number,
    key?: number,
    name: string,
    initials: string,
    courses: number,
    articles: number
}

export class FriendCard extends React.Component<FriendProps, {}>{
    render() {
        return (
            <div className="friend">
                        <div className="img-circle friends-image-initials">
                            <h3>{this.props.initials}</h3>
                            </div>
                        <h4>{this.props.name}</h4>
                        <div className="friends-details">
                            <div>{this.props.courses} courses taken</div>
                            <div>{this.props.articles} articles read</div>
                            </div>
                </div>
        );
    }
}

export class Friends extends React.Component<FriendsProps, {}>{
    state = {
        data: this.props.initialData
    }
    render() {
        let items: any[] = [];
        this.state.data.forEach((friendItem, idx) => {
            items.push(<FriendCard key={friendItem.id} name={friendItem.name} initials={friendItem.initials} courses={friendItem.courses} articles={friendItem.articles} />);
        });
        return (
            <div className="friends">
                {items}
            </div>);
    }
}
//ReactDOM.render(<FriendCard initials="HS" name="Homer Simpson" courses={22} articles={17}  />, document.getElementById('test'));

