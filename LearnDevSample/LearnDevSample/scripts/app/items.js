// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    var Item = (function (_super) {
        __extends(Item, _super);
        function Item() {
            _super.apply(this, arguments);
        }
        Item.prototype.formattedRating = function () {
            return this.props.rating.toFixed(1);
        };
        Item.prototype.render = function () {
            return (React.createElement("div", {"className": "row record"}, React.createElement("div", {"className": "record-rating"}, this.formattedRating()), React.createElement("div", {"className": "col-sm-12 record-detail"}, React.createElement("a", {"href": this.props.href, "className": "record-title"}, this.props.title), React.createElement("div", {"className": "record-description"}, this.props.description))));
        };
        return Item;
    })(React.Component);
    exports.Item = Item;
    var Items = (function (_super) {
        __extends(Items, _super);
        function Items(props) {
            var dataInitialize = []; //allows for setting type
            _super.call(this, props);
            this.state = {
                data: dataInitialize
            };
        }
        Items.prototype.updateData = function (newData) {
            console.info('update data');
            this.setState({
                data: newData
            });
        };
        Items.prototype.render = function () {
            var list = [];
            this.state.data.forEach(function (item, idx) {
                list.push(React.createElement(Item, {"rating": item.rating, "title": item.title, "description": item.description, "href": item.href, "key": idx}));
            });
            return (React.createElement("div", null, list));
        };
        return Items;
    })(React.Component);
    exports.Items = Items;
});
//# sourceMappingURL=items.js.map