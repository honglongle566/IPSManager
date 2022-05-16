<template>
  <a-layout-sider
    v-model:collapsed="collapsedSideBar"
    :trigger="null"
    collapsible
  >
    <div class="box-logo">
      <div v-if="collapsedSideBar" class="trigger box-brand">
        <img src="../../assets/sygnet.svg" alt="" class="brand-logo" />
      </div>
      <a-row v-else class="trigger box-brand">
        <div class="brand-title">IPSManager</div>
      </a-row>
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="dashboard">
        <router-link to="/">
          <home-outlined class="icon-2" />
          <span>Trang chủ</span>
        </router-link>
      </a-menu-item>

      <a-sub-menu key="netIPS">
        <template #title>
          <global-outlined class="icon-2" />
          <span> NetIPS </span>
        </template>
        <router-link to="/net-ips/intrusion">
          <a-menu-item key="intrusion"
            ><span
              ><file-search-outlined /> Giám sát xâm nhập</span
            ></a-menu-item
          >
        </router-link>
        <router-link to="/net-ips/alert"
          ><a-menu-item key="alert"
            ><span><safety-certificate-outlined /> Cảnh báo</span>
          </a-menu-item></router-link
        >
        <router-link to="/net-ips/anomalies"
          ><a-menu-item key="anomalies"
            ><span><table-outlined /> Bất thường</span>
          </a-menu-item></router-link
        >
        <router-link to="/net-ips/search"
          ><a-menu-item key="search"
            ><span><search-outlined /> Tìm kiếm</span>
          </a-menu-item></router-link
        >
        <router-link to="/net-ips/statistics"
          ><a-menu-item key="statistics"
            ><span><line-chart-outlined /> Thống kê</span>
          </a-menu-item></router-link
        >
        <router-link to="/net-ips/report"
          ><a-menu-item key="report"
            ><span><bar-chart-outlined /> Báo cáo</span>
          </a-menu-item></router-link
        >
      </a-sub-menu>
      <a-sub-menu key="setting">
        <template #title>
          <setting-outlined class="icon-2" />
          <span> Quản trị </span>
        </template>
        <router-link to="/setting/user-list"
          ><a-menu-item key="userList"
            ><span><team-outlined /> Danh sách</span>
          </a-menu-item></router-link
        >
        <router-link to="/setting/role-list"
          ><a-menu-item key="roleList"
            ><span
              ><deployment-unit-outlined />
              Vai trò
            </span>
          </a-menu-item></router-link
        >
        <router-link to="/setting/system-setting"
          ><a-menu-item key="systemSetting"
            ><span>
              <tool-outlined />
              Cài đặt</span
            >
          </a-menu-item></router-link
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
import { mapGetters } from 'vuex';

export default defineComponent({
  computed: mapGetters(['collapsedSideBar']),

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
