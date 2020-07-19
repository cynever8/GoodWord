1. 如何删除本地库
    > rm -rf .git
    > 就是删除本地的隐藏的.git文件夹
    
2. 删除远程分支
    > 在Git v1.7.0 之后，可以使用这种语法删除远程分支：
    > $ git push origin --delete "branchName"

3. git 提交后姓名为unknown 
    > 原因: 因为没有设置用户名和邮箱
    >  git config --global user.email"邮箱"
    >  git config --global user.name "姓名"

4. git fatch 和 pull
   1. ![git fatch 和 pull](../../img/git&#32;ftch&#32;merge.png)
   2. git有四个工作空间的概念，分别为 工作空间、暂存区、本地仓库、远程仓库。
   3. pull=fetch+merge
   4. fetch是从远程仓库更新到本地仓库，pull是从远程仓库直接更新到工作空间中
    
5. git merge 和 git merge --no-ff的区别
   1. git merge –no-ff 可以保存你之前的分支历史。能够更好的查看 merge历史，以及branch 状态。
   2. git merge 则不会显示 feature，只保留单条分支记录。