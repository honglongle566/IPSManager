<template>
  <ModeEditUser />
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
  <a-table :columns="columns" :data-source="data" class="mt-1">
    <template #headerCell="{ column }">
      <template v-if="column.dataIndex === 'id'">
        <span> ID </span>
      </template>
      <template v-else-if="column.dataIndex === 'username'">
        <span class="text-center"> Username </span>
      </template>
      <template v-else-if="column.dataIndex === 'actions'">
        <span class="text-center"> Actions </span>
      </template>
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'username'">
        <span class="text-center">{{ record.username }}</span>
      </template>
      <template v-if="column.dataIndex === 'actions'">
        <a-row type="flex" justify="space-around" align="middle">
          <a-space>
            <a-button type="primary" @click="TOGGLE_MODEL_SHOW_EDIT">
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
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
const columns = [
  {
    title: "Id",
    dataIndex: "id",
    sorter: {
      compare: (a, b) => a.id - b.id,
      multiple: 2,
    },
    width: "33%",
  },
  {
    title: "Username",
    dataIndex: "username",
    sorter: true,
    width: "33%",
  },
  {
    title: "Actions",
    dataIndex: "actions",
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    id: i + 1,
    username: `Edrward ${i}`,
  });
}
import ModeEditUser from "../../components/common/ModelEditUser.vue";
export default defineComponent({
  methods: mapMutations(["TOGGLE_MODEL_SHOW_EDIT"]),
  components: {
    SearchOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    ModeEditUser,
  },
  setup() {
    return {
      data,
      columns,
    };
  },
});
</script>
