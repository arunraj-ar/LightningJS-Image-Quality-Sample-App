/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Utils } from '@lightningjs/sdk'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xff000000,
        rect:true
      },

      Item1:{
        x:10,
        y:10,
        Image1: {
          w: 454,
          h: 256,
          src: Utils.asset('images/image_1920x1080.jpg'),
        },
        Text1:{
          y:276,
          text:{
            text:'image_1920x1080.jpg',
            fontSize:24,
          }
        }
      },

      Item2:{
        x:474,
        y:10,
        Image2: {
          w: 454,
          h: 256,
          src: Utils.asset('images/image_454x256.jpg'),
        },
        Text2:{
          y:276,
          text:{
            text:'image_454x256.jpg',
            fontSize:24,
          }
        }
      },

      Item3:{
        x:10,
        y:350,
        Image1: {
          w: 454,
          h: 256,
          src: Utils.asset('images/image_1920x1080.png'),
        },
        Text1:{
          y:276,
          text:{
            text:'image_1920x1080.png',
            fontSize:24,
          }
        }
      },

      Item4:{
        x:474,
        y:350,
        Image2: {
          w: 454,
          h: 256,
          src: Utils.asset('images/image_454x256.png'),
        },
        Text2:{
          y:276,
          text:{
            text:'image_454x256.png',
            fontSize:24,
          }
        }
      }

    }
  }

  _init() {
    this.createImage()
  }

  createImage(){
    var x = document.createElement("IMG");
    x.setAttribute("src", "../static/images/image_1920x1080.jpg");
    x.setAttribute("width", "454");
    x.setAttribute("height", "256");
    x.setAttribute("style", "position:absolute; top:10px; left:938px; z-index:3;");
    var txt = document.createElement("p");
    txt.appendChild(document.createTextNode("image_1920x1080.jpg rendered in HTML5 DOM"))
    txt.setAttribute("style","position:absolute; top:286px; left:938px; z-index:3; color:white; font-family: Roboto, Arial, sans-serif; font-size: 24px;")
    document.body.appendChild(x);
    document.body.appendChild(txt);
  }

}
