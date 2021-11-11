<template>
  <div class="app-layout">
    <n-grid>
      <n-gi :span="24">
        <div class="layout-head pdlr28">{{ userName || '--' }}</div>
      </n-gi>
    </n-grid>
    <n-grid x-gap="12">
      <n-gi :span="24">
        <n-layout has-sider class="menu-wrap">
          <n-layout-sider
            bordered
            collapse-mode="width"
            :collapsed-width="64"
            :width="240"
            :collapsed="collapsed"
            show-trigger
            @collapse="collapsed = true"
            @expand="collapsed = false"
          >
            <n-space vertical>
              <n-menu
                :collapsed="collapsed"
                :collapsed-width="64"
                :collapsed-icon-size="22"
                :options="menuOptions"
                v-model:value="activeKey"
              />
            </n-space>
          </n-layout-sider>
          <n-layout>
            <n-grid :cols="24">
              <n-gi :span="1">
                <n-switch class="pdt28 pdb28 pdl14" v-model:value="collapsed" />
              </n-gi>
              <n-gi :span="23">
                <n-breadcrumb separator="/" class="pdt28 pdb28">
                  <n-breadcrumb-item href="/">首页</n-breadcrumb-item>
                  <n-breadcrumb-item
                    ><a href="/">活动管理</a></n-breadcrumb-item
                  >
                  <n-breadcrumb-item>活动列表</n-breadcrumb-item>
                  <n-breadcrumb-item>活动详情</n-breadcrumb-item>
                </n-breadcrumb>
              </n-gi>
            </n-grid>
            <div class="com">
              <n-data-table
                :data="tableData"
                style="width: 100%"
                :columns="columns"
                :pagination="pagination"
              />
            </div>
          </n-layout>
        </n-layout>
      </n-gi>
    </n-grid>
  </div>
</template>
<script lang="ts" setup>
import { h, ref, reactive } from 'vue'
import {
  useMessage,
  NButton,
  NIcon,
  PaginationProps,
  DataTableColumns,
} from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from '@vicons/ionicons5'

const message = useMessage()

function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

interface User {
  name: string
  pwd: string
}

interface Table {
  date: string
  name: string
  address: string
}
const activeKey = ref('whisky')
const collapsed = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (index: string, indexPath: string[]) => {
  console.log(index, indexPath)
}

const user: string | null = localStorage.getItem('user')

const userName: string | null = user && (JSON.parse(user) as User).name
const tableData = reactive<Table[]>([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
  },
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄',
  },
])
const menuOptions = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon),
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(PersonIcon),
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon),
          },
        ],
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky',
          },
        ],
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich',
          },
        ],
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes',
      },
    ],
  },
]

function sendMail(rowData: any) {
  message.info('send mail to ' + rowData.name)
}

const columns = reactive<DataTableColumns>([
  {
    title: 'Name',
    key: 'name',
    align: 'center',
  },
  {
    title: 'Date',
    key: 'date',
  },
  {
    title: 'Address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'actions',
    render(row) {
      return h(
        NButton,
        {
          size: 'small',
          type: 'primary',
          onClick: () => sendMail(row),
        },
        { default: () => '发送邮件' }
      )
    },
  },
])
const pagination = reactive<PaginationProps>({
  pageSize: 10,
})
</script>
<style lang="less" scoped>
.app-layout {
  height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.layout-head {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 56px;
  background-color: #99a9bf;
}
.text-center {
  text-align: center;
}
.menu-wrap {
  height: calc(100vh - 56px);
}
.pdlr28 {
  padding-left: 28px;
  padding-right: 28px;
}
.pdt28 {
  padding-top: 28px;
}

.pdr28 {
  padding-right: 28px;
}
.pdb28 {
  padding-bottom: 28px;
}
.pdl28 {
  padding-left: 28px;
}

.pdl14 {
  padding-left: 14px;
}
</style>
