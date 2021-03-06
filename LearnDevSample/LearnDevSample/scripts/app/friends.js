/// <reference path="../../typings/react-global.d.ts" />
/// <reference path="../../typings/dojo/dojo.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "dojo/request/xhr"], function (require, exports, xhr) {
    var FriendCard = (function (_super) {
        __extends(FriendCard, _super);
        function FriendCard() {
            _super.apply(this, arguments);
        }
        FriendCard.prototype.render = function () {
            return (React.createElement("div", {"className": "friend"}, React.createElement("div", {"className": "img-circle friends-image-initials"}, React.createElement("h3", null, this.props.initials)), React.createElement("h4", null, this.props.name), React.createElement("div", {"className": "friends-details"}, React.createElement("div", null, this.props.courses, " courses taken"), React.createElement("div", null, this.props.articles, " articles read"))));
        };
        return FriendCard;
    })(React.Component);
    exports.FriendCard = FriendCard;
    var Friends = (function (_super) {
        __extends(Friends, _super);
        function Friends() {
            _super.apply(this, arguments);
            this.state = {
                data: this.props.initialData
            };
        }
        Friends.prototype.getData = function () {
            console.info('getData()');
            var options = {
                handleAs: "json",
                headers: {
                    "X-Requested-With": null
                }
            };
            console.info('still in getData()');
            var promise = xhr.get("http://learndevapi.azurewebsites.net/api/Friends", options);
            promise.then(function (data) {
                console.info('setting data');
                data = data.map(function (value, idx) {
                    value.articles = value.articlesCount;
                    value.courses = value.coursesCount;
                    return value;
                });
                this.setState({ data: data });
            }.bind(this), function (err) {
                console.info('encountered error');
            }, function (data) {
                console.info('in progress...');
                console.info(data);
            });
            console.info(promise.response);
        };
        Friends.prototype.render = function () {
            var items = [];
            this.state.data.forEach(function (friendItem, idx) {
                items.push(React.createElement(FriendCard, {"key": friendItem.id, "name": friendItem.name, "initials": friendItem.initials, "courses": friendItem.courses, "articles": friendItem.articles}));
            });
            return (React.createElement("div", {"className": "friends"}, items));
        };
        return Friends;
    })(React.Component);
    exports.Friends = Friends;
});
//ReactDOM.render(<FriendCard initials="HS" name="Homer Simpson" courses={22} articles={17}  />, document.getElementById('test'));
//# sourceMappingURL=friends.js.map