<template>
  <a-layout-header style="background: #fff; padding: 0px 15px">
    <a-row type="flex" align="middle">
      <a-col :flex="1">
        <menu-unfold-outlined
          v-if="collapsedSideBar"
          class="trigger icon-2"
          @click="TOGGLE_SIDEBAR"
        />
        <menu-fold-outlined
          v-else
          class="trigger icon-2"
          @click="TOGGLE_SIDEBAR"
        />
        <a-breadcrumb style="display: inline; padding-left: 25px">
          <a-breadcrumb-item>
            <router-link to="/"
              >{{ this.$route.name }}
            </router-link></a-breadcrumb-item
          >
        </a-breadcrumb></a-col
      >
      <a-col :flex="1">
        <a-row type="flex" justify="end">
          <a-button
            class="btn-border-none"
            @click="() => (inputSearch = !inputSearch)"
            ><search-outlined class="icon-1"
          /></a-button>

          <a-input
            v-if="inputSearch"
            class="input-search trigger"
            v-model:value="value"
            placeholder="input search text"
            style="width: 200px"
          />

          <a-button type="text"><printer-outlined class="icon-1" /></a-button>
          <a-button type="text"><file-text-outlined class="icon-1" /></a-button>
          <a-button
            type="text"
            v-if="fullscreen"
            class="trigger"
            @click="() => (fullscreen = !fullscreen)"
            ><fullscreen-outlined class="icon-1"
          /></a-button>
          <a-button
            v-else
            class="trigger btn-border-none"
            @click="() => (fullscreen = !fullscreen)"
            ><fullscreen-exit-outlined class="icon-1"
          /></a-button>
          <a-tooltip placement="bottom">
            <template #title>
              <span>Cỡ chữ</span>
            </template>
            <a-button type="text"
              ><font-size-outlined class="icon-1"
            /></a-button>
          </a-tooltip>
          <a-popover placement="bottomRight" trigger="click">
            <template #title>
              <a class="popover-item">Tiếng việt</a>
              <a class="popover-item">English</a>
            </template>
            <a-button type="text"
              ><font-colors-outlined class="icon-1"
            /></a-button>
          </a-popover>
          <a-popover placement="bottomRight" trigger="click">
            <template #title>
              <a class="popover-item">Hồ sơ</a>
              <a class="popover-item">Dashboard</a>
            </template>
            <template #content>
              <a class="popover-item">Đăng xuất</a>
            </template>
            <a-button type="text"
              ><user-outlined class="icon-1" /> <down-outlined class="icon-3"
            /></a-button>
          </a-popover>
        </a-row>
      </a-col>
    </a-row>
  </a-layout-header>
</template>
<script>
import {
  DownOutlined,
  FileTextOutlined,
  FontColorsOutlined,
  FontSizeOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PrinterOutlined,
  UserOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { mapMutations, mapGetters } from 'vuex';
export default defineComponent({
  computed: mapGetters(['collapsedSideBar']),
  methods: mapMutations(['TOGGLE_SIDEBAR']),
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PrinterOutlined,
    FileTextOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    FontSizeOutlined,
    FontColorsOutlined,
    UserOutlined,
    DownOutlined,
  },

  setup() {
    return {
      fullscreen: ref(false),
      inputSearch: ref(false),
    };
  },
});
</script>
