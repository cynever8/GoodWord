1. 如何删除本地库
   > rm -rf .git
   > 就是删除本地的隐藏的.git 文件夹
2. 删除远程分支

   > 在 Git v1.7.0 之后，可以使用这种语法删除远程分支：
   > \$ git push origin --delete "branchName"

3. git 提交后姓名为 unknown

   > 原因: 因为没有设置用户名和邮箱
   > git config --global user.email"邮箱"
   > git config --global user.name "姓名"

4. git fatch 和 pull
   1. ![git fatch 和 pull](<../../img/git ftch merge.png>)
   2. git 有四个工作空间的概念，分别为 工作空间、暂存区、本地仓库、远程仓库。
   3. pull=fetch+merge
   4. fetch 是从远程仓库更新到本地仓库，pull 是从远程仓库直接更新到工作空间中
5. git merge 和 git merge --no-ff 的区别

   1. git merge –no-ff 可以保存你之前的分支历史。能够更好的查看 merge 历史，以及 branch 状态。
   2. git merge 则不会显示 feature，只保留单条分支记录。

6. 撤销远程分支
   1. 先在本地回退到相应的版本：git reset --hard <版本号>
      1. 注意使用 --hard 参数会抛弃当前工作区的修改
      2. 使用 --soft 参数的话会回退到之前的版本，但是保留当前工作区的修改，可以重新提交
   2. 提交代码: git push origin <分支名> --force
      1. 为了覆盖掉远端的版本信息，使远端的仓库也回退到相应的版本，需要加上参数--force

