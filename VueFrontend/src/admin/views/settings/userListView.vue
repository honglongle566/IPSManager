<template>
  <a-row>
    <a-col :span="8">
      <a-row>
        <a-col :span="16">
          <a-input
            v-model:value="value"
            placeholder="Từ khóa"
            class="input-login"
          />
        </a-col>
        <a-col :span="8">
          <a-button type="primary">
            <template #icon><SearchOutlined /></template>
            Tìm kiếm
          </a-button>
        </a-col>
      </a-row></a-col
    >
    <a-col :span="8" :offset="8">
      <a-row justify="end">
        <a-space>
          <a-button>Xuất XLS</a-button>
          <a-button>Xuất CSV</a-button>
          <a-button type="primary">
            <template #icon><PlusOutlined /></template>
            Thêm
          </a-button>
        </a-space>
      </a-row></a-col
    >
  </a-row>
  <a-table
    :columns="columns"
    :row-key="(record) => record.login.uuid"
    :data-source="dataSource"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span> ID </span>
      </template>
      <template v-else-if="column.key === 'gender'">
        <span> Username </span>
      </template>
      <template v-else-if="column.key === 'email'">
        <span> Actions </span>
      </template>
    </template>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'"
        >{{ text.first }} {{ text.last }}</template
      >
      <template v-else-if="column.dataIndex === 'email'">
        <a-row type="flex" justify="space-around" align="middle">
          <a-space>
            <a-button type="primary">
              <EditOutlined />
            </a-button>
            <a-button type="primary" danger> <DeleteOutlined /> </a-button
          ></a-space>
        </a-row>
      </template>
    </template>
  </a-table>
</template>
<script>
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";
import { usePagination } from "vue-request";
import { computed, defineComponent } from "vue";
import axios from "axios";
const columns = [
  {
    title: "name",
    dataIndex: "name",
    sorter: true,
    width: "33%",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    sorter: true,
    width: "33%",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];
const queryData = (params) => {
  return axios.get("https://randomuser.me/api?noinfo", {
    params,
  });
};
export default defineComponent({
  components: {
    SearchOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
  },
  setup() {
    const {
      data: dataSource,
      run,
      loading,
      current,
      pageSize,
    } = usePagination(queryData, {
      formatResult: (res) => res.data.results,
      pagination: {
        currentKey: "page",
        pageSizeKey: "results",
      },
    });
    const pagination = computed(() => ({
      total: 200,
      current: current.value,
      pageSize: pageSize.value,
    }));

    const handleTableChange = (pag, filters, sorter) => {
      run({
        results: pag.pageSize,
        page: pag?.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    };

    return {
      dataSource,
      pagination,
      loading,
      columns,
      handleTableChange,
    };
  },
});
</script>
