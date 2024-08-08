# Redis

基于内存 以 key-value 结构存储的数据库

基于内存存储 读写性能高

适合存储热点数据

https://redis.io

## radis 下载与安装

```
radis-server.exe redis.windows.conf
radis-cli.exe -h localhost -p 6379 -a root
```

### 数据类型

```
string
hash
list
set
zset / sorted set
```

![img](../Project/imgs/26.png)

# Operation

## string

```
SET key value
GET key
SETEX key seconds value 有效期
SETNX key value         只有key不存在时设置key 分布式锁
```

## hash



| +                    | +                                          |
| :------------------- | :----------------------------------------- |
| HSET key field value | 将hashtable中key的字段field的值设置为value |
| HGET key field       |                                            |
| HDEL key field       |                                            |
| HKEYS key            | 获取所有字段                               |
| HVALS key            | 所有值                                     |

## List



| +                        | +                      |
| :----------------------- | :--------------------- |
| LPUSH key value [value2] |                        |
| LRANGE key start loop    | 获取指定范围值         |
| RPOP key                 | 移除并获取最后一个元素 |
| LLEN key                 | len                    |



## set

| +                      | +                      |
| ---------------------- | ---------------------- |
| SADD key member [mem2] | 添加成员               |
| SMEMBERS key           | 返回所有成员           |
| SCARD key              | 成员数                 |
| SINTER key1 key2       | 返回给定所有集合的交集 |
| SUNION key1 ...        | 并集                   |
| SPEM key m1 [m2]       | 删除成员               |

## zest



| +                                  | +                                            |
| ---------------------------------- | -------------------------------------------- |
| ZADD key score1 m1 [s2 m2]         | 添加成员                                     |
| ZRANGE key start stop [WITHSCORES] | 通过索引区间返回有序集合<br>中指定区间的成员 |
| ZINCRBY key increment m1           | 对指定成员分数上加增量increment              |
| ZREM key m1 [m2]                   | 移除成员                                     |

