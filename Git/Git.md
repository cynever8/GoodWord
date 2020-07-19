## windows命令行
### 1.切换目录
* > 1、从C盘切换到其他盘，D盘、E盘
* 输入“d”
* > 2、打开D盘下的某个文件夹
* 输入“cd test”
* > 3、返回上一级目录
* 输入“cd ..”
* > 4、回到根目录
* 输入“cd \”
### 2.查看目录内容
* 输入“dir”
### 3.新建、复制、删除目录文件或文件夹

* 1、输入命令“mkdir”和“md”来
> 创建文件夹

* 2、输入命令“type nul>*.*”
> 创建空文件，输入命令“echo [fileContent]>*.*”创建非空文件夹

* 3、输入命令“copy test.txt test3.txt”
> 复制文件

* 4、输入命令“xcopy D\test\test1 d:\test\test3 /s /e”
> 复制文件参数“/s”表示子文件一起复制参数“/d”表示如果目标文件比源文件老才覆盖

* 5、输入命令“del *.*”
> 删除文件

* 6、输入命令“rd <folderName>”
> 删除文件夹
### 4.查看文件内容
* 输入命令“type test4.txt”显示文本内容

## GIT操作
#### 安装git
* [Git官网下载](https://git-scm.com/)
* Linux上安装：sudo apt-get install git
* Mac上安装XCode自带Git
---
#### 全局配置git
* `git config --global user.name ""`
* `git config --global user.email ""`
---
#### 创建版本库
* 1.创建文件夹：`mkdir directory`
* 2.进入文件：`cd directory`
* 3.检查目录：`pwd`
* 4.初始化git库：`git init`
---
#### 向版本库中添加项目或文件
* `git add filename`
  * `git add . 添加全部`
* `git commit -m ""`
---
#### 检查git版本库与工作区中文件版本的状态
* `git status`
---
#### 版本回退
*   返回上一个版本：`git reset --hard HEAD^`
*   返回第n个版本：`git reset --hard HEAD~n`
*   返回指定的版本：
    * 显示从最近到最远的提交日志 

      > $ `git log`
      >
      > $ `git log --pretty=oneline`

    * `git reflog 查看历史命令`

    * `git reset --hard ID`
---
#### 工作区
> 开发项目保存的文件夹称为工作区
---
#### 暂缓区
> 版本add后的内存区称为暂缓区
---
#### 版本库
> commit后代码管理的地方称为版本库
---
#### 撤销修改
* `git checkout -- filename`
---
#### 撤销暂缓区
* `git reset HEAD filename`
---
#### 删除文件
* 工作区删除文件：`rm filename`
* 版本库中删除文件：`git rm filename`
---
#### 远程仓库
* 创建密钥：`ssh-keygen -t rsa -C "youremail"`
* 注册一个github账号
* 添加远程库：`git remote add origin "giturl"`
* 向远程库中推送本地库：git push -u origin master
  * 第二次就不用输入-u了
---
#### 把远程库克隆到本地
* git clone giturl
---
#### 分支管理
* 创建分支：`git branch branchname`
* 切换分支：`git checkout branchname`
* 查看当前分支：`git branch`
* 合并分支：`git merge branchname`
* 删除分支：`git branch -D branchname`
  - 删除远程分支: `git push origin --delete "branchName"`
---
#### 获取远程分支
* `git checkout -b dev origin/dev`
* 从远程库中拿到最新的分支，然后本地解决冲突：`git pull`
    * 要先设置链接，然后pull

#### 标签管理
| 指令                                                     | 结果                                               |
| -------------------------------------------------------- | -------------------------------------------------- |
| `git tag <tagname>`                                      | 创建标签: 默认标签是打在最新提交的commit上的。     |
| `git tag <tagname> 6224937`                              | 给某个commit打标签                                 |
| `git show <tagname>`                                     | 查看标签信息                                       |
| `git tag -a <tagname> -m "version 0.1 released" 3628164` | 创建带有说明的标签，用-a指定标签名，-m指定说明文字 |
| `git tag -d <tagname>`                                   | 删除标签                                           |
| `git push origin <tagname>`                              | 推送某个标签到远程                                 |
| `git push origin --tags`                                 | 一次性推送全部尚未推送到远程的本地标签             |
| `git push origin :refs/tags/<tagname>`                   | 远程删除标签(1.先删除本地标签 2.再删除远程标签)    |

### 错误解决方案

1. You've successfully authenticated, but Gitee.com does not provide she access.
  > git pull origin master --allow-unrelated-histories
