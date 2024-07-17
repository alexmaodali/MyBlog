# JavaBasic

## String API

![stringApi](./statics/images/stringapi.png)

## ArrayList

![arrayList](./statics/images/arrayList.png)

## Enum

![enum](./statics/images/enum.png)

## Object

![object](./statics/images/object.png)

![object2](./statics/images/object2.png)

## StringBuilder

![stringBuilder](./statics/images/stringbuilder.png)

## StringBuffer

![stringBuffer](./statics/images/stringbuffer.png)

## StringJoiner

![stringJoiner](./statics/images/stringJoiner.png)

## Math

![math](./statics/images/math.png)

## System

![system](./statics/images/system.png)

```java
public class Main {
    public static void main(String[] args) {
//      1.  System.exit(0);//不要这样玩
//      2.  currentTimeMills: long -> 1970-1-1 0:0:0 1s=1000ms 可做性能测试
        long beforeLoop = System.currentTimeMillis();
        for (int i = 0; i < 1000000; i++) {
        }
        long afterLoop = System.currentTimeMillis();
        System.out.println((afterLoop - beforeLoop) / 1000.0 + "s");//0.002s
    }
}
```

## Runtime

![runtime](./statics/images/runtime.png)

## BigDecimal

![big](./statics/images/bigDecimal.png)

## Date

![date](./statics/images/date.png)

## SimpleDateFormat

![simpleDateFormat](./statics/images/simpleDateFormat.png)

```java

    Date date = new Date();
    long timeMills = date.getTime();
    String formatDemo = "yyyy年MM月dd日 HH:mm:ss EEE a";
    SimpleDateFormat simpleDateFormat = new SimpleDateFormat(formatDemo);
    String finalTime1 = simpleDateFormat.format(timeMills);
    String finalTime2 = simpleDateFormat.format(date);
    System.out.println(finalTime1);//2024年07月13日 10:43:48 周六 上午
    System.out.println(finalTime2);

```

![parseSimpleDateFormat](./statics/images/parseSimpleDateFormat.png)

```java
String dataStr = "2022-12-12";
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
Date d2 = sdf.parse(dateStr);
```

## Calendar

![Calendar](./statics/images/calendar.png)

```java
    Calendar now = Calendar.getInstance();
    now.add(Calendar.YEAR, 1);
    now.set(Calendar.DAY_OF_MONTH, 10);
```

## jdk8 之前的 DateError

![DateError](./statics/images/dateError.png)

newDate

![newDate](./statics/images/newDate.png)

#### LocalDate LocalTime LocalDateTime

![newDate2](./statics/images/newDate1.png)

#### LocalDate

![LocalDate](./statics/images/localDate.png)

#### LocalTime

![LocalTime](./statics/images/localTime.png)

#### ZoneId

![ZoneId](./statics/images/zoneId.png)

#### Instant

![Instant](./statics/images/instan.png)

#### DataTimeFormatter

![dataTimeFormatter](./statics/images/dateTimeFormatter.png)

```java
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy年MM月dd日");

    LocalDateTime now = LocalDateTime.now();
    String rs = formatter.format(now);//正向格式化

    System.out.println(now);//2024-07-13T11:40:56.861149700
    System.out.println(rs);//2024年07月13日

    String rs2 = now.format(formatter);//反向格式化
    System.out.println(rs2);//2024年07月13日


    DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("yyyy年MM月dd日 HH:mm:ss");
    String dateStr = "2024年07月13日 12:12:11";
    LocalDateTime ldt = LocalDateTime.parse(dateStr, formatter2);
    System.out.println(ldt);
```

#### Period

![Period](./statics/images/period.png)

#### Duration

![Duraton](./statics/images/duration.png)

#### Duration period 作用

![作用](./statics/images/periodduration.png)

## Arrays

![Arrays](./statics/images/arrays.png)

### arrays compare

方法一：

![Arrays](./statics/images/arraysCompare.png)

方法二：

![Arrays](./statics/images/arraySort.png)

## Lambda

![Lambda](./statics/images/lambda1.png)
![Lambda](./statics/images/lambda2.png)
![Lambda](./statics/images/lambda3.png)

## Function Ref 方法引用

![Function Ref](./statics/images/functionRef1.png)

静态方法的引用

![Function Ref](./statics/images/functionRef2.png)

实例方法的引用

![Function Ref](./statics/images/functionRef4.png)

特定类型方法的引用

![Function Ref](./statics/images/functionRef3.png)

构造器的引用

![Function Ref](./statics/images/functionRef5.png)

## 排序

### 冒泡排序

```java
    public static void main(String[] args) {
        int[] arr = {5, 2, 3, 1};
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);//1235
        }
    }
```

### 选择排序

![switchSort](./statics/images/swichSort.png)

## 二分查找

![binarySearch](./statics/images/binaryserch.png)

## Regex

![regexSearch](./statics/images/regex.png)

## 异常 Exception

![Exception](./statics/images/exception.png)

## 集合 Collection Map

### 集合分类

![collectionSearch](./statics/images/collection.png)

### collection 分类

![collectionSearch](./statics/images/collection1.png)

#### collection 方法

![collectionSearch](./statics/images/collection2.png)

#### collection 遍历方法

![collectionSearch](./statics/images/collection3.png)

##### lambda 遍历

```java
collectionDemo.forEach(System.out::println);
```

##### 增强 for 循环

![for](./statics/images/for.png)

##### Iterator hasNext()

![iterators](./statics/images/iterator.png)

#### List

![list](./statics/images/list.png)

##### list 遍历

![list](./statics/images/list1.png)

#### ArrayList 底层原理

![list](./statics/images/arrayList1.png)
![list](./statics/images/arrayList2.png)
![list](./statics/images/arrayList3.png)

#### LinkedList 底层原理

![list](./statics/images/linkedList1.png)
可用来设计栈和队列

#### Set

![set](./statics/images/set1.png)

#### hashValue 哈希值

![hashValue](./statics/images/hashValue.png)

#### hashSet 底层原理

![hashSEt](./statics/images/hashset.png)

![hashSEt](./statics/images/hashset2.png)

![hashSEt](./statics/images/hash1.png)

#### LinkedHashSet 底层原理

![linkedhashset](./statics/images/linkedHashset.png)

#### TreeSet

![treeset](./statics/images/treeset.png)

#### 可变参数

![treeset](./statics/images/tangeblevar.png)

#### Collections 静态方法

![col](./statics/images/coll.png)

### Map 集合

![map](./statics/images/map1.png)

#### Map 常见方法

![map](./statics/images/map2.png)
![map](./statics/images/map3.png)

#### Map 遍历

![map](./statics/images/map5.png)

##### For 键找值

![map](./statics/images/map4.png)

##### 把键值对存为 entry 对象遍历

![map](./statics/images/map6.png)

##### Lambda

![map](./statics/images/map7.png)

##### hashMap 底层原理

![map](./statics/images/fs.png)

## Stream

初体验：

![map](./statics/images/stream.png)

### 使用步骤

![map](./statics/images/stream1.png)

### 如何获取流

![map](./statics/images/stream2.png)

### Stream 中间方法

![map](./statics/images/stream3.png)

## 文件操作 File IO

File

![file](./statics/images/file.png)

IO 流：读写文件数据/网络数据

### File

![file](./statics/images/file1.png)

初体验
![file](./statics/images/file2.png)

#### 常见方法

![file](./statics/images/file3.png)
文件的创建删除等
![file](./statics/images/file4.png)

文件遍历
![file](./statics/images/file5.png)

#### 案例 fileSearch

![file](./statics/images/file6.png)

### IO 流

IO 分类
![file](./statics/images/fs2.png)

IO 体系
![file](./statics/images/fs3.png)

### FileInputStream

![file](./statics/images/ll1.png)

#### 利用 read 方法一个字节一个字节的读

![file](./statics/images/a.png)
循环改造
![file](./statics/images/b.png)

#### 利用 read[byte[],offset,len] 方法以多个字节读

![file](./statics/images/c.png)
改造
![file](./statics/images/d.png)

性能优化了但读取汉字还是会乱码

#### 使用文件字节流一次性读完

![file](./statics/images/e.png)
![file](./statics/images/f.png)

问题：如果文件过大，则创建的字节数组也很大，可能造成内存溢出

这时可以用字符流来操作

而字节流更适合做数据的转移，如文件复制

### FileOutputStream

![file](./statics/images/g.png)
append = true -> 追加管道
![file](./statics/images/h.png)

#### 文件复制

![file](./statics/images/i.png)

#### Try-Catch-Finally 释放资源

![file](./statics/images/j.png)

#### Try-With-Resources 释放资源

![file](./statics/images/k.png)

### FileReader

![file](./statics/images/l.png)

#### 读的两种方式

![file](./statics/images/m.png)

### FileWriter

![file](./statics/images/n.png)

### 总结

![file](./statics/images/o.png)

### IO-缓冲流

![file](./statics/images/p.png)

#### BufferedInputStream

![file](./statics/images/q.png)
![file](./statics/images/r.png)

#### BufferedReader

![file](./statics/images/s.png)
![file](./statics/images/t.png)

#### BufferedWriter

![file](./statics/images/u.png)
![file](./statics/images/v.png)

### IO-转换流

出现原因：代码编码和被读文件编码不同，出现乱码

#### InputStreamReader

![file](./statics/images/w.png)
![file](./statics/images/x.png)

#### OutputStreamWriter

![file](./statics/images/y.png)

### IO-打印流

![file](./statics/images/z.png)

#### PrintStream

![file](./statics/images/aa.png)

#### PrintWriter

![file](./statics/images/bb.png)
![file](./statics/images/cc.png)

#### 打印流应用-打印重定向 setOut(ps)

![file](./statics/images/dd.png)

### IO-数据流

![file](./statics/images/ee.png)
![file](./statics/images/ff.png)
![file](./statics/images/gg.png)

### IO-序列流

![file](./statics/images/hh.png)

![file](./statics/images/ii.png)
![file](./statics/images/jj.png)
![file](./statics/images/kk.png)

#### 不参与序列化 transient

![file](./statics/images/ll.png)

#### 多个对象的序列化 -> ArrayList

### IO-框架

![file](./statics/images/mm.png)

#### Commons-io

![file](./statics/images/nn.png)
![file](./statics/images/oo.png)
![file](./statics/images/pp.png)

## 特殊文件 .properties xml logback

### properties

![file](./statics/images/qq.png)
![file](./statics/images/rr.png)
![file](./statics/images/ss.png)
![file](./statics/images/tt.png)

### xml

![file](./statics/images/xx.png)

#### 解析 xml dom4j 框架

![file](./statics/images/yy.png)
![file](./statics/images/zz.png)
![file](./statics/images/a1.png)

#### 使用程序拼接写入 xml

![file](./statics/images/a2.png)

#### DTD Schema 文档 约束 xml (了解)

### 日志及框架

![file](./statics/images/a3.png)

#### logback

![file](./statics/images/logback.png)

![file](./statics/images/logger.png)

![file](./statics/images/quick.png)
![file](./statics/images/asdf.png)

## Thread 线程

![file](./statics/images/main2.png)

### 继承 thread

创建方法一：
![file](./statics/images/jjk.png)
![file](./statics/images/thread.png)

### 多线程注意事项:

1.启动线程必须是调用 start，而不是 run

2.不要把主线程任务放到子线程之前

### 实现 runnable 接口

![file](./statics/images/apk.png)
![file](./statics/images/ccd.png)

匿名内部类写法

![file](./statics/images/main.png)
![file](./statics/images/ppp.png)
![file](./statics/images/icon.png)

### 利用 Callable 接口 FutureTask 类

![file](./statics/images/callable.png)  
![file](./statics/images/task.png)  
![file](./statics/images/main1.png)

### 线程安全问题

![file](./statics/images/main3.png)

#### 解决线程安全问题-线程同步

![file](./statics/images/lock.png)

##### 同步代码块

![file](./statics/images/1.png)

静态方法：类名.Class

多账户： this

![file](./statics/images/jk.png)

##### 同步方法

![file](./statics/images/jkjk.png)

##### Lock 锁

![file](./statics/images/domain.png)

### 线程通信

![file](./statics/images/fff.png)

![gaga](./statics/images/gaga.png)

### 线程池

![gaga](./statics/images/pppp.png)

#### 线程池的创建

![gaga](./statics/images/green.png)

![gaga](./statics/images/jjjj.png)
![gaga](./statics/images/yellow.png)

#### 新任务策略

![gaga](./statics/images/apple.png)

#### Executors 工具类

![gag](./statics/images/tool.png)

##### Executors 陷阱

![gag](./statics/images/trap.png)

### 乐观锁 悲观锁

## 网络通信

### 两种架构 ： C/S B/S

### 网络通信三要素

![gag](./statics/images/Snipaste_2024-07-14_17-52-53.png)

#### IP 地址

![gag](./statics/images/ipv4.png)
![gag](./statics/images/ipv6.png)

![gag](./statics/images/ip.png)

#### InetAddress

![gag](./statics/images/inetadd.png)

#### Port 端口号

![gag](./statics/images/yse.png)

#### Protocol 协议

网络上通信的设备，事先规定的连接规则，以及传输数据的规则被称为网络通信协议

![gag](./statics/images/all.png)

##### OSI

![gag](./statics/images/osi.png)

#### UDP 通信

![gag](./statics/images/udp.png)

#### DatagramSocket

![gag](./statics/images/udp2.png)

##### 一发一收案例 客户端发一个 服务端收一个

![gag](./statics/images/udp4.png)

##### 多发多收案例 客户端一直发 服务端一直收

![gag](./statics/images/udp1.png)

#### TCP 通信

![gag](./statics/images/tcp1.png)

![gag](./statics/images/tcp2.png)

![gag](./statics/images/tcp3.png)

##### TCP 一对一 客户端发一个 服务端收一个

![gag](./statics/images/tcpj.png)

![gag](./statics/images/demoa.png)
![gag](./statics/images/demo0.png)
![gag](./statics/images/demo.png)

##### TCP 多对多 客户端一直发 服务端一直收

![gag](./statics/images/demo9.png)
离线处理

![gag](./statics/images/abc.png)

##### TCP 支持与多个客户端同时通信 一个服务端 多个客户端

![gag](./statics/images/tcpp.png)

![gag](./statics/images/img1.png)
![gag](./statics/images/img2.png)
![gag](./statics/images/img4.png)

##### TCP 通过端口转发实现群聊 客户端对客户端

![gag](./statics/images/aa1.png)

![gag](./statics/images/client1.png)
![gag](./statics/images/client2.png)
![gag](./statics/images/client3.png)
![gag](./statics/images/client4.png)

##### TCP 设计一个简单的 B/S Server

![gag](./statics/images/bs.png)
![gag](./statics/images/bs1.png)
用线程池优化
![gag](./statics/images/bs2.png)

### 配置多开

edit Configuration -> bulid and run -> modify options -> mutiple
