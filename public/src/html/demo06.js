import React from 'react';

var Demo06 = React.createClass({
  data: [
    {a: ['1','2','3']},
    {b: ['1','2','3']}
  ],
  render: function () {
    var list = (item) => {
      var a = [];
      for (let i in item) {
        item[i].map((item2,index2) => {
           a.push(<span>--{item2}--</span>);
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

export {Demo06};
