<!--
 * @Description:
 * @Autor: Leon
 * @Date: 2020-01-07 19:17:41
 * @LastEditors: 王一丁
 * @LastEditTime: 2021-06-03 10:31:39
 -->

# 常用命令

1. cd 切换目录  
   cd .. 跳转根目录
2. ls 查看文件
   - -a 显示所有文件及目录 (ls 内定将文件名或目录名称开头为"."的视为隐藏档，不会列出)
   - -l 除文件名称外，亦将文件型态、权限、拥有者、文件大小等资讯详细列出
   - -r 将文件以相反次序显示(原定依英文字母次序)
   - -t 将文件依建立时间之先后次序列出
   - -A 同 -a ，但不列出 "." (目前目录) 及 ".." (父目录)
   - -F 在列出的文件名称后加一符号；例如可执行档则加 "\*", 目录则加 "/"
   - -R 若目录下有文件，则以下之文件亦皆依序列出
3. `mv`
   - -b: 当目标文件或目录存在时，在执行覆盖前，会为其创建一个备份。
   - -i: 如果指定移动的源目录或文件与目标的目录或文件同名，则会先询问是否覆盖旧文件，输入 y 表示直接覆盖，输入 n 表示取消该操作。
   - -f: 如果指定移动的源目录或文件与目标的目录或文件同名，不会询问，直接覆盖旧文件。
   - -n: 不要覆盖任何已存在的文件或目录。
   - -u：当源文件比目标文件新或者目标文件不存在时，才执行移动操作
4. cp
   - -a：此选项通常在复制目录时使用，它保留链接、文件属性，并复制目录下的所有内容。其作用等于 dpR 参数组合。
   - -d：复制时保留链接。这里所说的链接相当于 Windows 系统中的快捷方式。
   - -f：覆盖已经存在的目标文件而不给出提示。
   - -i：与-f 选项相反，在覆盖目标文件之前给出提示，要求用户确认是否覆盖，回答"y"时目标文件将被覆盖。
   - -p：除复制文件的内容外，还把修改时间和访问权限也复制到新文件中。
   - -r：若给出的源文件是一个目录文件，此时将复制该目录下所有的子目录和文件。
   - -l：不复制文件，只是生成链接文件。
5. pwd 查看当前位置
6. mkdir 创建文件夹/文件
7. `rm -rf /var(/a.txt)` 删除文件夹/文件
8. cat +文件名 查看文件内容
9. tasklist 查看进程
10. ll +文件名 罗列出当前文件或目录的详细信息，含有时间、读写权限、大小、时间等信息
11. 查找文件

- find / -name mysql 这句命令的意思是在根目录下按名字查找文件夹名叫 mysql 的文件夹。
- locate 命令 例如：locate \*.log 这句命令的意思是查找后缀为.log 的文件

11. source /etc/profile(文件路径) 修改文件后更新文件内容
12. `tar -zxvf saber.tar.gz` gz 文件解压
13. `unzip` zip 文件解压
14. `ssh root@101.36.160.166` 跳转到服务器 (101.36.160.166 西城家园App外网地址 密码:wojMnQE324vQ)
15. `scp ./home.zip root@101.36.160.166:~/xczg/mobile` 将当前服务器文件发送到其他服务器
16. `scp root@172.16.0.41:/data/home.tar.gz /xczg/mobile/` 将目标服务器的文件复制到当前服务器 (172.16.0.41 西城 PC 端内网服务器地址)
17. `ifconfig eth0` 查看内网地址

## 西城家园生产环境发布流程
1. `ssh root@101.36.160.166` 跳转到服务器 (101.36.160.166 西城家园App外网地址 密码:**wojMnQE324vQ**)
2. `scp root@172.16.0.41:/data/home.tar.gz /xczg/mobile/` 将目标服务器的文件复制到当前服务器 (172.16.0.41 西城 PC 端内网服务器地址 密码:**liuyang1234**)
3. `tar -zxvf home.tar.gz` gz文件解压
4. `mv dist dist_01; mv home dist` 修改多个文件名
## Nginx

1. start nginx 启动
2. nginx -s reload 重启 nginx
3. ps -ef|grep nginx 查看进程号
4. nginx -s reopen ： 重新打开日志文件
5. nginx -s stop : 快速停止 nginx
6. nginx -s quit ： 完整有序的停止 nginx
7. nginx -t 查看 nginx.conf 配置文件目录
