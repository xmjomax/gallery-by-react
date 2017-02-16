require('normalize.css/normalize.css');
require('styles/Main.scss');

import React from 'react';

// 获取图片相关的json信息
let imageDatas = require('sources/imageDatas.json');

// 自执行函数 将 json 文件的图片名 转换成图片URL路径信息
imageDatas =  ( function genImageURL( imageDatasArr ) {
  for (let i = 0, j = imageDatasArr.length; i < j; i++) {
    let singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">

        <section>
          <section className="img__sec">

          </section>
          <section className="controller__nav">

          </section>
        </section>

      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
