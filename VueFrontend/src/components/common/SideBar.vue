<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="box-logo">
      <div v-if="collapsed" class="trigger box-brand">
        <img src="../../assets/sygnet.svg" alt="" class="brand-logo" />
      </div>
      <a-row v-else class="trigger box-brand">
        <img src="../../assets/logo.svg" alt="" class="brand-logo" />
        <div class="brand-title">IPSManager</div>
      </a-row>
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
        <home-outlined class="icon-2" />
        <span> Trang chủ</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <global-outlined class="icon-2" />
          <span> NetIPS </span>
        </template>
        <a-menu-item key="s1"
          ><span><file-search-outlined /> Giám sát xâm nhập</span></a-menu-item
        >
        <a-menu-item key="s2"
          ><span><safety-certificate-outlined /> Cảnh báo</span></a-menu-item
        >
        <a-menu-item key="s3"
          ><span><table-outlined /> Bất thường</span></a-menu-item
        >
        <a-menu-item key="s4"
          ><span><search-outlined /> Tìm kiếm</span></a-menu-item
        >
        <a-menu-item key="s4"
          ><span><line-chart-outlined /> Thống kê</span></a-menu-item
        >
        <a-menu-item key="s4"
          ><span><bar-chart-outlined /> Báo cáo</span></a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <setting-outlined class="icon-2" />
          <span> Quản trị </span>
        </template>
        <a-menu-item key="a1"
          ><span><team-outlined /> Danh sách</span></a-menu-item
        >
        <a-menu-item key="a2"
          ><span
            ><deployment-unit-outlined />
            Vai trò
          </span></a-menu-item
        >
        <a-menu-item key="a3"
          ><span>
            <tool-outlined />
            Cài đặt</span
          ></a-menu-item
        >
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import {
  BarChartOutlined,
  DeploymentUnitOutlined,
  FileSearchOutlined,
  GlobalOutlined,
  HomeOutlined,
  LineChartOutlined,
  SafetyCertificateOutlined,
  SearchOutlined,
  SettingOutlined,
  TableOutlined,
  TeamOutlined,
  ToolOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    SettingOutlined,
    HomeOutlined,
    GlobalOutlined,
    SafetyCertificateOutlined,
    SearchOutlined,
    TeamOutlined,
    BarChartOutlined,
    LineChartOutlined,
    TableOutlined,
    FileSearchOutlined,
    DeploymentUnitOutlined,
    ToolOutlined,
  },

  setup() {
    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
    };
  },
});
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
