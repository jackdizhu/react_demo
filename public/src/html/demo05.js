import React from 'react';

var Demo04 = React.createClass({
  data: [
    {a: ['1','2','3']},
    {b: ['1','2','3']}
  ],
  render: function () {
    return (
      <div className="productBox">
        {
          this.data.map((item,index) => {
              for (let i in item) {
                return item[i].map((item2,index2) => {
                   return <div>--{item2}--</div>
                })
              }
          })
        }
      </div>
    );
  }
});

export {Demo04};
