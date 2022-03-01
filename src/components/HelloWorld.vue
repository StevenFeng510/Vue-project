<template>
    <div class="hello">
        <router-link to="/">
            <el-button>默认按钮</el-button>
        </router-link>
        <router-link to="/user">
            <el-button type="primary" @click="open">主要按钮</el-button>
        </router-link>

        <el-dialog :visible.sync="dialogVisible" title="Hello world">
            <div>这是一个对话框</div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    data() {
        return {
            dialogVisible: false,
        };
    },
    methods: {
        open() {
            this.dialogVisible = true;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
