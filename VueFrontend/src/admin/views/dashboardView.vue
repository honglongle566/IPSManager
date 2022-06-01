<template>
  <a-row :gutter="[16, 16]">
    <a-col :span="8">
      <a-card class="c-card-shadown">
        <a-row type="flex" justify="space-between" align="middle">
          <a-col :span="12">
            <ShopFilled class="icon-lg color-1" />
          </a-col>
          <a-col :span="12" class="flex-right">
            <div>
              <div class="c-card-title">Danh sách người dùng</div>
              <span class="c-card-number">3</span>
            </div>
          </a-col>
        </a-row>
      </a-card></a-col
    >
    <a-col :span="8">
      <a-card class="c-card-shadown">
        <a-row type="flex" justify="space-between" align="middle">
          <a-col :span="12">
            <ShopFilled class="icon-lg color-2" />
          </a-col>
          <a-col :span="12" class="flex-right">
            <div>
              <div class="c-card-title">Danh sách Engine</div>
              <span class="c-card-number">3</span>
            </div>
          </a-col>
        </a-row>
      </a-card></a-col
    >
    <a-col :span="8">
      <a-card class="c-card-shadown">
        <a-row type="flex" justify="space-between" align="middle">
          <a-col :span="12">
            <ShopFilled class="icon-lg color-3" />
          </a-col>
          <a-col :span="12" class="flex-right">
            <div>
              <div class="c-card-title">Danh sách loại Engine</div>
              <span class="c-card-number">3</span>
            </div>
          </a-col>
        </a-row>
      </a-card></a-col
    >
  </a-row>
  <a-row :gutter="[16, 16]" class="mt-1">
    <a-col :span="8">
      <a-card class="c-card-shadown">
        <a-row type="flex" justify="space-between" align="middle">
          <a-col :span="12">
            <ShopFilled class="icon-lg color-4" />
          </a-col>
          <a-col :span="12" class="flex-right">
            <div>
              <div class="c-card-title">Danh sách vai trò</div>
              <span class="c-card-number">3</span>
            </div>
          </a-col>
        </a-row>
      </a-card></a-col
    >
    <a-col :span="8">
      <a-card class="c-card-shadown">
        <a-row type="flex" justify="space-between" align="middle">
          <a-col :span="12">
            <ShopFilled class="icon-lg color-2" />
          </a-col>
          <a-col :span="12" class="flex-right">
            <div>
              <div class="c-card-title">HostIPS</div>
              <span class="c-card-number">3</span>
            </div>
          </a-col>
        </a-row>
      </a-card></a-col
    >
    <a-col :span="8">
      <a-card class="c-card-shadown">
        <a-row type="flex" justify="space-between" align="middle">
          <a-col :span="12">
            <ShopFilled class="icon-lg color-5" />
          </a-col>
          <a-col :span="12" class="flex-right">
            <div>
              <div class="c-card-title">NetIPS</div>
              <span class="c-card-number">3</span>
            </div>
          </a-col>
        </a-row>
      </a-card></a-col
    >
  </a-row>
  <div class="mt-2">
    <div class="c-title">Hệ thống quản trị NetIPS và HostIPS - IPSManager</div>
    <span class="c-content">được thực hiện bởi các thành viên trong nhóm</span>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { ShopFilled } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    ShopFilled,
  },
});
</script>
