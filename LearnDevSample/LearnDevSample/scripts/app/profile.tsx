// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

export interface ProfileItemProps {
    value: number;
    title: string;
    isReadOnly: boolean;
    valueOnChangeHandler(e: any);
}

export class ProfileItem extends React.Component<ProfileItemProps, {}>{

    render() {
        let hiddenClassP = "";
        let hiddenClassInput = " hidden";
        if (!this.props.isReadOnly) {
            hiddenClassP = " hidden";
            hiddenClassInput = "";
        }
        return (
            <div>
                <label>{this.props.title}</label>
                <p className={"form-control-static" + hiddenClassP} > { this.props.value }</p>
                <input type="text" defaultValue={this.props.value.toString() } className={"form-control" + hiddenClassInput} onChange={this.props.valueOnChangeHandler} />
            </div>
        );
    }
}

export interface ProfileButtonProps {
    label: string;
    iconClass: string;
    onClick(e: React.MouseEvent);
}

export class ProfileButton extends React.Component<ProfileButtonProps, {}>{
    render() {
        return (
            <button className={"btn btn-block " + this.props.iconClass} onClick={this.props.onClick}>{this.props.label}</button>
        );
    }
}

export interface ProfileState {
    isReadOnly?: boolean;
    courses?: number;
    articles?: number;
}
export interface DevLearnProfileProps {
    defaultCourses: number;
    defaultArticles: number;
}
export class DevLearnProfile extends React.Component<DevLearnProfileProps, ProfileState>{
    courses: number;
    articles: number;
    constructor(args) {
        super(args);

        this.courses = this.props.defaultCourses;
        this.articles = this.props.defaultArticles;
        this.state = {
            isReadOnly: true,
            courses: this.props.defaultCourses,
            articles: this.props.defaultArticles
        };
    }
    editClick(e: React.MouseEvent) {
        e.preventDefault();
        this.setState({ isReadOnly: false });
    }
    saveClick(e: React.MouseEvent) {
        e.preventDefault();
        this.setState({ isReadOnly: true, courses: this.courses, articles: this.articles });
    }
    cancelClick(e: React.MouseEvent) {
        e.preventDefault();
        this.setState({ isReadOnly: true });
    }
    changeCoursesValue(e: Event) {
        this.courses = parseInt((e.target as HTMLInputElement).value);
        //this.setState({ courses: this._courses });
    }
    changeArticlesValue(e: Event) {
        this.articles = parseInt((e.target as HTMLInputElement).value);
    }
    render() {
        let editButtonClass = "";
        let saveCancelButtonClass = " hidden";
        if (!this.state.isReadOnly) {
            editButtonClass = " hidden";
            saveCancelButtonClass = "";
        }
        return (
            <div>
                <ProfileItem title="Courses" value={this.state.courses} isReadOnly={this.state.isReadOnly} valueOnChangeHandler={(e) => this.changeCoursesValue(e)} />
                <ProfileItem title="Articles" value={this.state.articles} isReadOnly={this.state.isReadOnly} valueOnChangeHandler={(e) => this.changeArticlesValue(e)} />
                <div className="row profile-buttons">
                    <div className={"col-sm-6 pull-right" + editButtonClass} >
                        <ProfileButton iconClass="btn-primary" label="Edit" onClick={(e) => this.editClick(e)} />
                        </div>
                    <div className={"col-sm-6" + saveCancelButtonClass} >
                        <ProfileButton iconClass="btn-primary" label="Save" onClick={(e) => this.saveClick(e)} />
                        </div>
                    <div className={"col-sm-6" + saveCancelButtonClass} >
                        <ProfileButton iconClass="btn-danger" label="Cancel" onClick={(e) => this.cancelClick(e)} />
                    </div>
                </div>
            </div>
        );
    }
}
