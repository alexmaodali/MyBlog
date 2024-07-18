# MyBatis

MyBatis 时持久层(dao)框架，用于简化 JDBC

## 初体验

![img](./newimg/JavaWeb5_IMG/m1.png)

```
pojo.User:

    private Integer id;
    private String name;
    private String pwd;
    //setters and getters

.properties:

    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
    spring.datasource.url=jdbc:mysql://localhost:3306/mybatis
    spring.datasource.username=root
    spring.datasource.password=root

Test:

    @Autowired
    private UserMapper userMapper;

    @Test
    public void testListUser() {
        List<User> userList = userMapper.list();
        userList.stream().forEach(user -> {
            System.out.println(user);});
    }

mapper.UserMapper:

    @Mapper
    public interface UserMapper {
        @Select("SELECT * FROM user")
        public List<User> list();
    }

```

@Mapper //在运行时，会自动生成改接口的实现类对象（代理对象），并将该对象交给 IOC

## SQL 提示

![img](./newimg/JavaWeb5_IMG/lint.png)
![img](./newimg/JavaWeb5_IMG/lint1.png)

## JDBC

![img](./newimg/JavaWeb5_IMG/jdbc1.png)
![img](./newimg/JavaWeb5_IMG/jdbc2.png)

## 数据库连接池

```
标准接口：DataSource
功能：获取连接 Connection getConnection() throws SQLException

常见连接池：C3P0 DBCP Druid Hikari(SpringBoot Default)
Druid - ali开源 , 是Java最好的数据库连接池之一
```

### 切换数据库连接池

![img](./newimg/JavaWeb5_IMG/datasource.png)

这里的 spring.datasource.(druid).url 中 druid 可以省略

## lombok

springboot start 中规定了 lombok 版本,所有这里无需指定版本
![img](./newimg/JavaWeb5_IMG/lombok.png)

```
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
    </dependency>

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public class User {
        private Integer id;
        private String name;
        private String pwd;
    }
```

## MyBatis 增删改查

### 日志输出

```
.properties:

    mybatis.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl

    //预编译：性能高 防止SQL注入
    Preparing: delete from emp where id = ?
    Parameters: 16 (Integer)
```

### 增

```
    @Insert("INSERT INTO user(name,age) VALUES(#{name},#{age})")
    public void insert(User user);

    //返回主键 (user.getId())
    @Options(keyProperty="id", useGeneratedKeys=true)
    @Insert("INSERT INTO user(name,age) VALUES(#{name},#{age})")
    public void insert(User user);

```

### 删

```
    //删除成功返回1 失败0    ${value} SQL拼接(不好)
    @Delete("DELETE FROM emp WHERE id = #{id}")
    public void delete(Integer id);
```

### 改

```
    @Update("UPDATE user SET name=#{name},age=#{age} WHERE id=#{id}")
    public void update(User user)
```

### 查

#### 根据 ID 查询回显

```
    @Select("SELECT * FROM user WHERE id=#{id}")
    public User getById(Integer id);
```

##### 数据封装问题

![img](./newimg/JavaWeb5_IMG/err1.png)

解决方法

![img](./newimg/JavaWeb5_IMG/err2.png)

#### 根据条件查询

```
    //性能低 不安全 存在SQL注入风险
    @Select("SELECT * FROM user WHERE name LIKE '%${name}%' AND age=#{age}")

    //推荐concat
    @Select("SELECT * FROM user WHERE name LIKE concat('%',#{name},'%') AND age=#{age}")

    public List<User> list(String name,Integer age);
```

## MyBatis XML 文件

![img](./newimg/JavaWeb5_IMG/xml1.png)

### MyBatisX Plugins
