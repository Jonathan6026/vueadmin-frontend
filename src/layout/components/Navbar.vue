<template>
  <div class="navbar">
    <hamburger class="hamburger-container" />
    <!-- 面包屑 -->
    <breadcrumb id="guide-breadcrumb" class="breadcrumb-container" />
    <div class="right-menu">
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            src="https://iconfont.alicdn.com/t/e89430ee-42ed-4d98-8ea2-6987122dc98a.png"
          >
          </el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <!-- 下拉菜单 -->
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>主页</el-dropdown-item>
            </router-link>
            <a href="#" target="__blank">
              <el-dropdown-item divided @click="getWeather"
                >内容主页</el-dropdown-item
              >
              <el-dropdown-item divided @click="logout"
                >退出登录</el-dropdown-item
              >
            </a>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import Hamburger from '@/components/Hamburger/index'
import Breadcrumb from '@/components/Breadcrumb/index'
import { useStore } from 'vuex'
const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
const getWeather = () => {
  store.dispatch('user/getWeather')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .breadcrumb-container {
    float: left;
  }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 动画
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
    ::v-deep .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
      }
    }

    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
