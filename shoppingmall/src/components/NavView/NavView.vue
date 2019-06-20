<template>

       <div class="container">

           <nav class="navbar navbar-default navbar-fixed-top">
               <div class="container">
                   <div class="container-fluid">
                       <!-- Brand and toggle get grouped for better mobile display -->
                       <div class="navbar-header">
                           <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                               <span class="sr-only">Toggle navigation</span>
                               <span class="icon-bar"></span>
                               <span class="icon-bar"></span>
                               <span class="icon-bar"></span>
                           </button>
                           <a class="navbar-brand" href="#">XX商城</a>
                       </div>

                       <!-- Collect the nav links, forms, and other content for toggling -->
                       <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                           <ul class="nav navbar-nav">

                               <!--主页-->
                               <li><router-link to="/">主页</router-link></li>

                               <!--商品分类下拉列表-->
                               <li class="dropdown">
                                   <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">商品分类 <span class="caret"></span></a>
                                   <ul class="dropdown-menu">
                                       <li><a href="#">Action</a></li>
                                       <li><a href="#">Another action</a></li>
                                       <li><a href="#">Something else here</a></li>
                                       <li role="separator" class="divider"></li>
                                       <li><a href="#">Separated link</a></li>
                                       <li role="separator" class="divider"></li>
                                       <li><a href="#">One more separated link</a></li>
                                   </ul>
                               </li>
                           </ul>


                           <!--搜索框-->
                           <form class="navbar-form navbar-left">
                               <div class="form-group">
                                   <input type="text" class="form-control" placeholder="Search">
                               </div>
                               <button type="submit" class="btn btn-default">搜索</button>
                           </form>

                           <!--右边购物车-->
                           <ul class="nav navbar-nav navbar-right">
                               <li><router-link to="/CartView">购物车</router-link></li>


                               <li v-if="username === null"><a href="#">登陆</a></li>


                               <li v-else-if="username !== null" class="dropdown">
                                   <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                                      aria-haspopup="true" aria-expanded="false">欢迎：{{username}}<span
                                           class="caret"></span></a>
                                   <ul class="dropdown-menu">
                                       <li><router-link to="/MineView">我的主页</router-link></li>
                                       <li role="separator" class="divider"></li>
                                       <li><a href="#">退出</a></li>
                                   </ul>
                               </li>
                           </ul>


                       </div><!-- /.navbar-collapse -->
                   </div><!-- /.container-fluid -->
               </div>
           </nav>

       </div>

</template>

<script>

    export default {
        name: 'navView',
        data(){
            return{
                username:"dan"
        }

        }
    }
</script>

<style scoped>


</style>
