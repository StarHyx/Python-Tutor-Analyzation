# Python Tutor Analyzation

[Python Tutor Website](http://www.pythontutor.com/)
[原仓库](https://github.com/pgbovine/OnlinePythonTutor)

## 目标

分析Python Tutor(v5-unity)中实现python单步调试的核心部分，以及前端渲染原理
抽离出核心模块代码，移植到其他项目中

## 使用方法：

```shell
pip3 install bottle
npm start
```

打开localhost:8003/debugger.html

如需要重新编译按照instructions.txt中内容进行操作

## 项目结构

`bottle_server.py` 用bottle框架起一个web服务

live-programming-mode下:

处理请求：`LIVE_exec_py3`

`pg_logger` 执行python代码的核心

在`generate_json_trace.py`中设置options.usercode值即可编译出所需json轨迹,交给前端渲染

有require的
opt-live.ts
opt-frontend-common.ts
opt-shared-sessions.ts