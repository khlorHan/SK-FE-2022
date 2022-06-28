/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// Button 클래스
// var _Button = createClass({
//   constructor(type, label) {
//     this.type = type;
//     this.label = label;
//   },
//   static: {
//     version: '1.0.0',
//   },
//   getType: function () {
//     return this.type;
//   },
// });

class Button {
  static version = '1.0.0';

  constructor(type, label) {
    this.type = type;
    this.label = label;
  }

  getType() {
    return this.type;
  }
}

// Button 클래스를 확장한 AriaButton 클래스
class AriaButton extends Button {
  static displayName = 'AriaButton';

  constructor(type, label, usingAria = true) {
    super(type, label);
    this.usingAria = usingAria;
  }

  getVersion() {
    return AriaButton.version;
  }
}

// var _AriaButton = createClass(
//   {
//     constructor(type, label, usingAria) {
//       Button.apply(this, arguments);
//       this.usingAria = createClass.defaultArg(usingAria, true);
//     },
//     static: {
//       displayName: 'AriaButton',
//     },
//     getVersion: function () {
//       return AriaButton.version;
//     },
//   },
//   Button
// );
