# 登录

## 简单登录

![img](./newimg/JavaWeb6_IMG/login.png)

## 登录校验

### 会话技术

![img](./newimg/JavaWeb6_IMG/huihua.png)
![img](./newimg/JavaWeb6_IMG/huihua1.png)

### Cookie

![img](./newimg/JavaWeb6_IMG/cookie.png)
![img](./newimg/JavaWeb6_IMG/cookie1.png)

### Session

![img](./newimg/JavaWeb6_IMG/session.png)

### JWT

![img](./newimg/JavaWeb6_IMG/jwt.png)

![img](./newimg/JavaWeb6_IMG/jwt1.png)
![img](./newimg/JavaWeb6_IMG/jwt2.png)

#### JWT 使用案例

##### 引入 JWT

```
        <!--JWT-->
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt</artifactId>
            <version>0.9.1</version>
        </dependency>
        <dependency>
            <groupId>javax.xml.bind</groupId>
            <artifactId>jaxb-api</artifactId>
            <version>2.3.1</version>
        </dependency>
        <dependency>
            <groupId>javax.activation</groupId>
            <artifactId>activation</artifactId>
            <version>1.1.1</version>
        </dependency>
        <dependency>
            <groupId>org.glassfish.jaxb</groupId>
            <artifactId>jaxb-runtime</artifactId>
            <version>2.3.3</version>
        </dependency>

```

```
@Slf4j
@RestController
public class LoginController {
    @Autowired
    private EmpService empService;

    @PostMapping("/login")
    public Result login(@RequestBody Emp emp) {
        log.info("/n员工登录:=>{}", emp);
        Emp e = empService.login(emp);
        if (e != null) {
            Map<String, Object> claims = new HashMap<>();
            claims.put("id", e.getId());
            claims.put("name", e.getName());
            claims.put("username", e.getUsername());
            String JWT = JWTUtils.generateJWT(claims);
            return Result.success(JWT);
        }
        return Result.error("登录失败 用户名或密码错误");
    }
}
```

```
public class JWTUtils {
    private static String signKey = "itheima";
    private static Long expire = 43200000L;

    /*
     * 生成JWT
     * @param claims jwt第二部分payload内容
     * @return
     */
    public static String generateJWT(Map<String, Object> claims) {
        String JWT = Jwts.builder()
                .addClaims(claims)
                .signWith(SignatureAlgorithm.HS256, signKey)
                .setExpiration(new Date((System.currentTimeMillis() + expire)))
                .compact();
        return JWT;
    }

    /*
     *ParseJWT
     *@return -> payload
     */
    public static Claims parseJWT(String jwt) {
        Claims claims = Jwts.parser()
                .setSigningKey(signKey)
                .parseClaimsJwt(jwt)
                .getBody();
        return claims;
    }
}
```

```
{
    "code": 200,
    "msg": "success",
    "data": "eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi6b6Z5a6H5a6BIiwiaWQiOjUsInVzZXJuYW1lIjoieXVubG9uIiwiZXhwIjoxNzIxNDI0MjI2fQ.6edOeVdAK1X2T4sNss2JurrYKF81ttbaKlUDiEyUanQ"
}
```

### Filter

![img](./newimg/JavaWeb6_IMG/filter.png)

#### 初体验

javax.servlet.Filter
![img](./newimg/JavaWeb6_IMG/filter1.png)
![img](./newimg/JavaWeb6_IMG/filter2.png)

![img](./newimg/JavaWeb6_IMG/filter3.png)
![img](./newimg/JavaWeb6_IMG/filter4.png)

#### 过滤器链

![img](./newimg/JavaWeb6_IMG/chain.png)

#### 登录案例

```
        <!--        fastJson-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>1.2.76</version>
        </dependency>
```

![img](./newimg/JavaWeb6_IMG/as.png)

### Interceptor

![img](./newimg/JavaWeb6_IMG/in.png)

#### 快速入门

![img](./newimg/JavaWeb6_IMG/in1.png)
![img](./newimg/JavaWeb6_IMG/in2.png)
![img](./newimg/JavaWeb6_IMG/in3.png)
![img](./newimg/JavaWeb6_IMG/in4.png)

#### 登录拦截

![img](./newimg/JavaWeb6_IMG/in0.png)

# 全局异常捕获器

![img](./newimg/JavaWeb6_IMG/ex.png)

# Spring 事务管理 AOP

## 事务

![img](./newimg/JavaWeb6_IMG/sr.png)
![img](./newimg/JavaWeb6_IMG/sr1.png)
![img](./newimg/JavaWeb6_IMG/sr2.png)

### rollback

![img](./newimg/JavaWeb6_IMG/sr3.png)

### propagation

![img](./newimg/JavaWeb6_IMG/sr4.png)
![img](./newimg/JavaWeb6_IMG/sr5.png)
![img](./newimg/JavaWeb6_IMG/sr6.png)

## AOP

![img](./newimg/JavaWeb6_IMG/aop.png)

### 快速入门

![img](./newimg/JavaWeb6_IMG/aop2.png)
![img](./newimg/JavaWeb6_IMG/aop1.png)

### 核心概念

![img](./newimg/JavaWeb6_IMG/aop3.png)
![img](./newimg/JavaWeb6_IMG/aop5.png)

### 通知

![img](./newimg/JavaWeb6_IMG/noti.png)

#### 执行顺序

![img](./newimg/JavaWeb6_IMG/noti2.png)

### PointCut 切入点表达式

![img](./newimg/JavaWeb6_IMG/noti1.png)
![img](./newimg/JavaWeb6_IMG/noti3.png)

![img](./newimg/JavaWeb6_IMG/noti4.png)
![img](./newimg/JavaWeb6_IMG/noti5.png)

![img](./newimg/JavaWeb6_IMG/log.png)
![img](./newimg/JavaWeb6_IMG/an.png)

### 连接点

![img](./newimg/JavaWeb6_IMG/join.png)

# SpringBoot 原理篇

## config

![img](./newimg/JavaWeb6_IMG/confi.png)
![img](./newimg/JavaWeb6_IMG/confi1.png)
![img](./newimg/JavaWeb6_IMG/confi2.png)
![img](./newimg/JavaWeb6_IMG/confi4.png)

## Bean 的管理

@Component @Controller @Service @Repository

### Bean 获取

![img](./newimg/JavaWeb6_IMG/confi0.png)

### 作用域

![img](./newimg/JavaWeb6_IMG/bean.png)

![img](./newimg/JavaWeb6_IMG/bean1.png)

### 第三方 Bean

![img](./newimg/JavaWeb6_IMG/bean2.png)

## 起步依赖

maven 的依赖传递

## 自动配置

![img](./newimg/JavaWeb6_IMG/s.png)

![img](./newimg/JavaWeb6_IMG/s1.png)
![img](./newimg/JavaWeb6_IMG/s2.png)

### 原理

![img](./newimg/JavaWeb6_IMG/s3.png)
![img](./newimg/JavaWeb6_IMG/s4.png)
