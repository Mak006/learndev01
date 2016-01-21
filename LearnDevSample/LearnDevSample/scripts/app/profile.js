// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    var ProfileItem = (function (_super) {
        __extends(ProfileItem, _super);
        function ProfileItem() {
            _super.apply(this, arguments);
        }
        ProfileItem.prototype.render = function () {
            var hiddenClassP = "";
            var hiddenClassInput = " hidden";
            if (!this.props.isReadOnly) {
                hiddenClassP = " hidden";
                hiddenClassInput = "";
            }
            return (React.createElement("div", null, React.createElement("label", null, this.props.title), React.createElement("p", {"className": "form-control-static" + hiddenClassP}, " ", this.props.value), React.createElement("input", {"type": "text", "defaultValue": this.props.value.toString(), "className": "form-control" + hiddenClassInput, "onChange": this.props.valueOnChangeHandler})));
        };
        return ProfileItem;
    })(React.Component);
    exports.ProfileItem = ProfileItem;
    var ProfileButton = (function (_super) {
        __extends(ProfileButton, _super);
        function ProfileButton() {
            _super.apply(this, arguments);
        }
        ProfileButton.prototype.render = function () {
            return (React.createElement("button", {"className": "btn btn-block " + this.props.iconClass, "onClick": this.props.onClick}, this.props.label));
        };
        return ProfileButton;
    })(React.Component);
    exports.ProfileButton = ProfileButton;
    var DevLearnProfile = (function (_super) {
        __extends(DevLearnProfile, _super);
        function DevLearnProfile(args) {
            _super.call(this, args);
            this.courses = this.props.defaultCourses;
            this.articles = this.props.defaultArticles;
            this.state = {
                isReadOnly: true,
                courses: this.props.defaultCourses,
                articles: this.props.defaultArticles
            };
        }
        DevLearnProfile.prototype.editClick = function (e) {
            e.preventDefault();
            this.setState({ isReadOnly: false });
        };
        DevLearnProfile.prototype.saveClick = function (e) {
            e.preventDefault();
            this.setState({ isReadOnly: true, courses: this.courses, articles: this.articles });
        };
        DevLearnProfile.prototype.cancelClick = function (e) {
            e.preventDefault();
            this.setState({ isReadOnly: true });
        };
        DevLearnProfile.prototype.changeCoursesValue = function (e) {
            this.courses = parseInt(e.target.value);
            //this.setState({ courses: this._courses });
        };
        DevLearnProfile.prototype.changeArticlesValue = function (e) {
            this.articles = parseInt(e.target.value);
        };
        DevLearnProfile.prototype.render = function () {
            var _this = this;
            var editButtonClass = "";
            var saveCancelButtonClass = " hidden";
            if (!this.state.isReadOnly) {
                editButtonClass = " hidden";
                saveCancelButtonClass = "";
            }
            return (React.createElement("div", null, React.createElement(ProfileItem, {"title": "Courses", "value": this.state.courses, "isReadOnly": this.state.isReadOnly, "valueOnChangeHandler": function (e) { return _this.changeCoursesValue(e); }}), React.createElement(ProfileItem, {"title": "Articles", "value": this.state.articles, "isReadOnly": this.state.isReadOnly, "valueOnChangeHandler": function (e) { return _this.changeArticlesValue(e); }}), React.createElement("div", {"className": "row profile-buttons"}, React.createElement("div", {"className": "col-sm-6 pull-right" + editButtonClass}, React.createElement(ProfileButton, {"iconClass": "btn-primary", "label": "Edit", "onClick": function (e) { return _this.editClick(e); }})), React.createElement("div", {"className": "col-sm-6" + saveCancelButtonClass}, React.createElement(ProfileButton, {"iconClass": "btn-primary", "label": "Save", "onClick": function (e) { return _this.saveClick(e); }})), React.createElement("div", {"className": "col-sm-6" + saveCancelButtonClass}, React.createElement(ProfileButton, {"iconClass": "btn-danger", "label": "Cancel", "onClick": function (e) { return _this.cancelClick(e); }})))));
        };
        return DevLearnProfile;
    })(React.Component);
    exports.DevLearnProfile = DevLearnProfile;
});
//# sourceMappingURL=profile.js.map