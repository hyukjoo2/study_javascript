'use strict';

let os;
(function (os) {
  os[os["Windows"] = 3] = "Windows";
  os[os["Ios"] = 10] = "Ios";
  os[os["Android"] = 11] = "Android";
})(os || (os = {}));
console.log(os);

const os1 = {
  3: "Windows",
  10: "Ios",
  11: "Android",
  "Windows": 3,
  "Ios": 10,
  "Android": 11
};
console.log(os1);





