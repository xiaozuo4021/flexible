# flexible移动适配解决方案
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fblackcater%2Fflexible.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fblackcater%2Fflexible?ref=badge_shield)


## 使用

### 引入`flexible.js`

在项目根目录有一个`flexible.js`文件，你需要让这段代码在所有js代码执行之前执行。

```html

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
	<meta content="yes" name="apple-mobile-web-app-capable">
  <meta content="yes" name="apple-touch-fullscreen">
  <meta content="telephone=no,email=no" name="format-detection">
  <link rel="apple-touch-icon" href="favicon.png">
  <link rel="Shortcut Icon" href="favicon.png" type="image/x-icon">
  <!-- other meta tags -->
  <link rel="stylesheet" href="./normalize.css">
  <script src="./flexible.js"></script>
  <!-- other script tags -->
</head>
<body style="margin: auto; width: 10rem;">
</body>
</html>

```

这个文件主要的行为是：

1. 添加`<meta name="viewport" ....>`标签
2. 给html添加`font-size`css属性值和添加`data-dpr`自定义属性

### 引入`normalize.css`

项目根目录有一个`normalize.css`文件，这是笔者日常积累的一个css normalize库。

大家可以用，也可以使用自己的或者开源项目[normalize.css](https://github.com/necolas/normalize.css)


### 使用css预编译

项目根目录中提供了`less`, `sass`和`stylus`三种`flexible`文件。

**每个文件都提供2个变量：**

1. `flexible-ue` :  设计稿宽度（默认为 iPhone6设计稿，750px）
2. `flexible-dpr` : 设计稿 dpr 值，默认为`2`(iPhone6)

你可以覆盖这些变量。

**每个文件都提供3个函数(mixin/function)**

1. `px2rem` : 将`px`值转化为`rem`值，如果值是 `em`单位，则不做处理。
2. `font-dpr` : 在`rem`移动适配中，我们不推荐对字体也转化为`rem`单位，但是字体需要适配高清屏，所以通过这个函数，可以快速生成适配各种`dpr`的`font-size`大小值
3. `px-dpr` : 有时候，不仅仅`font-size`属性，我们不需要转为`rem`，可能`border`属性，之类的我们也不需要转成`rem`形式，但是需要适配高清屏，这时候可以使用这个函数。

以：`sass`为例：

```scss

@import './flexible.scss'; // 引入文件

$flexible-ue: 750; // 自定义基准值
$flexible-dpr: 3; // 自定义dpr

.test {
	@include px-dpr(border-radius, 6px, "solid #ccc");
	@include font-dpr(12px);
	border: px2rem(8px) solid #ccc;
}

```

更多例子可以查看 项目下的`test/src`目录。


### 使用插件

如果你很懒，可以使用[cssrem](https://github.com/flashlizi/cssrem)插件。

项目根目录`tool/cssrem`可以找到。


## 须知

建议大家使用`sass`和`stylus`预处理。

因为`less`不支持自定义函数，除非你使用了`less@3`([mixins-as-functions](https://github.com/less/less-meta/blob/master/proposal/mixins-as-functions.md))

在`flexible.less`文件中，我使用了hack方式，实现了一个自定义函数。在2.5版本是没有问题的，如果其他版本出现问题，可以提个`issue`反馈给我。

在`flexible.less`文件中，还提供了另一个`px2rem`自定义函数实现版本，但是其是基于`less`插件[less-plugin-functions](https://github.com/seven-phases-max/less-plugin-functions)实现的。

所以，如果你使用这种版本形式的`px2rem`函数实现。你需要在`webpack`, `gulp`, `grunt`或其他工具对应`less`插件中，将这个插件引入。


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fblackcater%2Fflexible.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fblackcater%2Fflexible?ref=badge_large)