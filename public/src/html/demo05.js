import React from 'react';

var Demo05 = React.createClass({
  data: [
    {a: ['1','2','3']},
    {b: ['1','2','3']},
    {c: ['1','2','3']}
  ],
  focus: function () {
    console.log(arguments);
  },
  render: function () {
    var list = (item) => {
      var a = [];
      for (let i in item) {
        item[i].map((item2,index2) => {
           a.push(<span>--<input type="text" value={item2} onFocus={() => {this.focus(i,index2)}}/>--</span>);
        })
      }
      return a;
    }
    return (
      <div className="productBox">
        {
          this.data.map((item,index) => {
              return (<div>
              {
                  list(item)
              }
              </div>)
          })
        }
      </div>
    );
  }
});

export {Demo05};
