<template>
    <div class="common-table">
        <el-table :data="tableData" height="650px" stripe>
            <el-table-column
                show-overflow-tooltip
                v-for="item in tableLabel"
                :key="item.prop"
                :label="item.label"
                :width="item.width ? item.width : 125"
            >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" min-width="100">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button type="danger" size="mini" @click="handleDelete(scope.row)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @current-change="changePage"
            :current-page.sync="config.page"
            :page-size="20"
            layout="prev,pager,next"
            :total="config.total"
            class="pager"
        >
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: 'CommonTable',
    props: {
        tableData: Array,
        tableLabel: Array,
        config: Object,
    },
    data() {
        return {};
    },
    methods: {
        handleEdit(row) {
            this.$emit('edit', row);
        },
        handleDelete(row) {
            this.$emit('del', row);
        },
        changePage(page) {
            this.$emit('changePage', page);
        },
    },
};
</script>

<style lang="less" scoped>
.common-table {
    height: calc(100% - 62px);
    background: #fff;
    position: relative;
    .pager {
        position: absolute;
        bottom: 0;
        right: 20px;
    }
}
</style>
