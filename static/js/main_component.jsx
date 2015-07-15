var Main = React.createClass({

  componentDidMount: function() {
    $(document).ready(function() {
      $(".image-container").effect("bounce", {times: 3}, 300);
    });
  },

  render: function() {
    return (
      <div className="myintro">
        <div className="image-container">
          <img src="images/nakul-large.jpg" className="main-image" />
        </div>
        <div className="intro-text">
          Howdy!! My name is Nakul and I love to &lt;code/&gt;
        </div>
      </div>
    )
  }
});
