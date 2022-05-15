<template>
  <a-layout-header style="background: #fff; padding: 0px 15px">
    <a-row type="flex" align="middle">
      <a-col :flex="1">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger icon-2"
          @click="() => changeSibar()"
        />
        <menu-fold-outlined
          v-else
          class="trigger icon-2"
          @click="() => changeSibar()"
        />
        <a-breadcrumb style="display: inline; padding-left: 25px">
          <a-breadcrumb-item><a href="">Home</a></a-breadcrumb-item>
          <a-breadcrumb-item>Application Center</a-breadcrumb-item>
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
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
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
  props: ['collapsed', 'changeSibar'],

  setup() {
    return {
      fullscreen: ref(false),
      inputSearch: ref(false),
    };
  },
});
</script>
