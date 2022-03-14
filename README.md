# as-config

## 介绍
auto-servers脚手架工具的辅助文件，auto-servers的配置文件生成的时候会在module.exports 上面加

```javascript
/** @type {import("as-config").AsConfig}*/
module.exports = {
    projectId: "399",
    token: "",
    
};
```

在项目中安装了as-config之后配置文件就会有相关的代码提示，方便配置


## TODO
集成一些常用的serverTemplate 模板方法，方便配置diy