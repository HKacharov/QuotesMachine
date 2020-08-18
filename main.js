var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RandomQuotes = function (_React$Component) {
  _inherits(RandomQuotes, _React$Component);

  function RandomQuotes(props) {
    _classCallCheck(this, RandomQuotes);

    var _this = _possibleConstructorReturn(this, (RandomQuotes.__proto__ || Object.getPrototypeOf(RandomQuotes)).call(this, props));

    _this.state = {
      quote: "",
      author: "",
      color: ""
    };
    _this.newQuote = _this.newQuote.bind(_this);
    return _this;
  }

  _createClass(RandomQuotes, [{
    key: "newQuote",
    value: function newQuote() {
      var _this2 = this;

      var colors = ["#1d2e4d", "#24b370", "#94c229", "#c22611", "#2e2338", "#502059", "#9c1762", "#400205", "#19a6d1", "#202f33"];
      var randomColor = Math.floor(Math.random() * 10);
      fetch("https://quote-garden.herokuapp.com/quotes/random").then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this2.setState({ quote: data.quoteText, author: data.quoteAuthor });
      }).then(this.setState({ color: colors[randomColor] }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.newQuote();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "quote-box" },
        React.createElement(
          "div",
          { id: "quote" },
          React.createElement(
            "p",
            { style: { color: this.state.color }, id: "text" },
            this.state.quote
          ),
          React.createElement(
            "p",
            { style: { color: this.state.color }, id: "author" },
            "- ",
            this.state.author
          )
        ),
        React.createElement(
          "div",
          { id: "buttons" },
          React.createElement(
            "a",
            { id: "tweet-quote", className: "twitter-share-button", target: "_blank", href: "https://twitter.com/intent/tweet", dataurl: "https://dev.twitter.com/web/tweet-button", datatext: this.state.quote + " - " + this.state.author },
            React.createElement("i", { id: "inner", className: "fab fa-twitter-square" })
          ),
          React.createElement(
            "button",
            { style: { backgroundColor: this.state.color }, id: "new-quote", onClick: this.newQuote },
            "New Quote"
          )
        )
      );
    }
  }]);

  return RandomQuotes;
}(React.Component);

ReactDOM.render(React.createElement(RandomQuotes, null), document.getElementById("main"));
