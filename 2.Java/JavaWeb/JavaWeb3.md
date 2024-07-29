## SpringWeb 初体验

empty project -> new module

2.7.4 稳定版本
![img](./newimg/JavaWeb3_IMG/spring0.png)

删除无用文件

![img](./newimg/JavaWeb3_IMG/spring1.png)

```
    <properties>
        <java.version>11</java.version>
    </properties>
```

localhost:8080/hello

```
package com.itheima.hellospring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @RequestMapping("/hello")
    public String hello(){
        String res = "Hello Spring";
        System.out.println(res);
        return res;
    }
}
```

## HTTP

![img](./newimg/JavaWeb3_IMG/http0.png)

![img](./newimg/JavaWeb3_IMG/http1.png)

![img](./newimg/JavaWeb3_IMG/http2.png)

## Tomcat

![img](./newimg/JavaWeb3_IMG/Tomcat0.png)

### Spring 在启动时集成了 Tomcat Server 内嵌

![img](./newimg/JavaWeb3_IMG/0.png)

## 请求响应

### B/S 底层原理

![img](./newimg/JavaWeb3_IMG/spring2.png)

### Postman 接口测试

### 常见请求 - 参数

```
简单参数 实体参数 数组集合参数 日期参数 Json参数 路径参数
```

#### 简单参数

![img](./newimg/JavaWeb3_IMG/param0.png)
![img](./newimg/JavaWeb3_IMG/param1.png)

##### 参数名不相同怎么办

name->username : null : 22

借助 RequestParam

![img](./newimg/JavaWeb3_IMG/param2.png)

### 实体参数

#### 简单实体对象

pojo/user

![img](./newimg/JavaWeb3_IMG/param3.png)

#### 复杂实体对象

![img](./newimg/JavaWeb3_IMG/param4.png)

### 数组集合参数

集合参数：请求参数名和形参集合名称相同，@RequestParam 用来绑定参数关系
![img](./newimg/JavaWeb3_IMG/param5.png)

### 日期格式

![img](./newimg/JavaWeb3_IMG/param6.png)

### Json 参数

![img](./newimg/JavaWeb3_IMG/json0.png)

### 路径参数

![img](./newimg/JavaWeb3_IMG/path1.png)

### 统一响应数据

![img](./newimg/JavaWeb3_IMG/uni0.png)

Result(code,msg,data)

![img](./newimg/JavaWeb3_IMG/result0.png)

```
public class ApiResponse<T> {
    private int code;
    private String message;
    private T data;

    // Getters and Setters
}
```

```
public class ApiResponseUtil {
    public static <T> ApiResponse<T> success(T data) {
        ApiResponse<T> response = new ApiResponse<>();
        response.setCode(200);
        response.setMessage("Success");
        response.setData(data);
        return response;
    }

    public static <T> ApiResponse<T> error(int code, String message) {
        ApiResponse<T> response = new ApiResponse<>();
        response.setCode(code);
        response.setMessage(message);
        response.setData(null);
        return response;
    }
}
```

```
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ApiResponse<Object> handleException(Exception e) {
        // 可以根据异常类型设置不同的状态码和消息
        return ApiResponseUtil.error(500, "Internal Server Error: " + e.getMessage());
    }
}
```

```
@RestController
@RequestMapping("/api")
public class DemoController {

    @GetMapping("/hello")
    public ApiResponse<String> hello() {
        String message = "Hello, World!";
        return ApiResponseUtil.success(message);
    }

    @GetMapping("/error")
    public ApiResponse<String> error() {
        throw new RuntimeException("This is an error!");
    }
}
```

## 项目 分层解耦

### 三层架构

![img](./newimg/JavaWeb3_IMG/1.png)

dao/impl/EmpDaoA dao/EmpDao

service/impl/EmpServiceA EmpService
![img](./newimg/JavaWeb3_IMG/tr1.png)

### 分层解耦

高内聚 低耦合

IOC 容器 DI Bean

### IOC & DI

控制反转 依赖注入

![img](./newimg/JavaWeb3_IMG/ioc.png)

完成了 controller 层的解耦

```
原来 private EmpService empService = new EmpServiceA();
现在要用EmpServiceB()方法,那么controller层要改为new EmpServiceB()

用依赖注入，则只需修改@Component在的类

@Component 将当前类交给IOC容器管理，成为IOC容器中的Bean
@Autowired 运行时，IOC会提供该类型的bean对象，并赋值给变量
```

### Bean

![img](./newimg/JavaWeb3_IMG/bean1.png)

声明了就有用吗？

![img](./newimg/JavaWeb3_IMG/bean2.png)

### IOC

### DI

![img](./newimg/JavaWeb3_IMG/bean3.png)

### Resource Autowired 区别

![img](./newimg/JavaWeb3_IMG/bean4.png)
