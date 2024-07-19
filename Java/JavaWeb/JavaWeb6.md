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
