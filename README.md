# Filter

[![Build Status](https://travis-ci.org/kqummp/Filter.svg?branch=master)](https://travis-ci.org/kqummp/Filter)
[![Coverage Status](https://coveralls.io/repos/github/kqummp/Filter/badge.svg?branch=master)](https://coveralls.io/github/kqummp/Filter?branch=master)

Filter

## Usage

```js
var filter = require('filter');

console.log(filter.judgeNumber(123));
```

具体可参见[Test.js](/test/test.js)

### filter.judgeNumber

校验数字

### filter.judgeUsername

校验用户名
* 包含大写字母、小写字母或下划线
* 长度4位至16位

### filter.judgeEmail

校验邮箱

### filter.judgeStrongPassword

校验密码（要求强强度）

必须包含
* 大写字母
* 小写字母
* 数字
* !@#^&这些字符

长度8位至20位

### filter.judgeMediumPassword

校验密码（要求中强度）

必须包含
* 大写字母
* 小写字母
* 数字
* **不能包含特殊字符**

长度6位至20位

### filter.judgeWeakPassword

校验密码（要求弱强度）

可以包含
* 大写字母
* 小写字母
* 数字
* 除下划线外，不能包含其他特殊字符

长度6位至20位

### filter.filter

过滤字符串

所有包含$, {, }, :, ?, #, /的字符串都不能被接受

防止NoSQL注入攻击

所有的数据接收以后都应该使用此函数进行校验
