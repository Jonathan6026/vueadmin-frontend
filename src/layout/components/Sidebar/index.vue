<template>
  <div class="sidebar-warrap">
    <div class="logo-container">
      <el-avatar
        :size="logoHeight"
        shape="square"
        src="https://iconfont.alicdn.com/t/d469c0b8-bbf5-4692-8486-bad5577cfab1.png"
      />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
        Backend System
      </h1>
    </div>

    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'
import {} from 'vue'
// vue新属性 逐渐驱动 动态css
const logoHeight = 44
</script>

<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
  .el-avatar {
    --el-avatar-background-color: none;
  }
}
</style>
