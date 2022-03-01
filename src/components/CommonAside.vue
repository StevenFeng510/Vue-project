<template>
    <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#f1c40f"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
    >
        <h3>{{ menuTitle }}</h3>
        <el-menu-item
            @click="clickMenu(item)"
            v-for="item in noChildren"
            :key="item.path"
            :index="item.path + ''"
        >
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu v-for="child in hasChildren" :key="child.path" :index="child.path + ''">
            <template slot="title">
                <i :class="'el-icon-' + child.icon"></i>
                <span slot="title">{{ child.label }}</span>
            </template>
            <el-menu-item-group v-for="(subitem, subindex) in child.children" :key="subitem.path">
                <el-menu-item @click="clickMenu(subitem)" :index="subindex + ''">
                    {{ subitem.label }}
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {
                    path: '/',
                    name: 'home',
                    label: '首页',
                    icon: 's-home',
                    url: 'Home/Home',
                },
                {
                    path: '/mall',
                    name: 'mall',
                    label: '商品管理',
                    icon: 'video-play',
                    url: 'MallManage/MallManage',
                },
                {
                    path: '/user',
                    name: 'user',
                    label: '用户管理',
                    icon: 'user',
                    url: 'UserManage/UserManage',
                },
                {
                    label: '其他',
                    icon: 'location',
                    children: [
                        {
                            path: '/page1',
                            name: 'page1',
                            label: '页面1',
                            icon: 'setting',
                            url: 'Other/PageOne',
                        },
                        {
                            path: '/page2',
                            name: 'page2',
                            label: '页面2',
                            icon: 'setting',
                            url: 'Other/PageTwo',
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        clickMenu(item) {
            this.$router.push({
                name: item.name,
            });
            this.$store.commit('selectMenu', item);
        },
    },
    computed: {
        // 无子路由
        noChildren() {
            return this.menu.filter((item) => !item.children);
        },
        // 有子路由
        hasChildren() {
            return this.menu.filter((item) => item.children);
        },
        // state中 是否展开
        isCollapse() {
            return this.$store.state.tab.isCollapse;
        },
        menuTitle() {
            return this.isCollapse ? '后台' : '后台管理系统';
        },
    },
};
</script>

<style lang="less" soped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.el-menu {
    height: 100%;
    border: none;
    h3 {
        color: #fff;
        text-align: center;
        line-height: 40px;
    }
}
</style>
