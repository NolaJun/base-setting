<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"></van-address-edit>

    <van-popup v-model="show" round position="bottom">
      <van-area :area-list="areaList" value="110101" />
    </van-popup>
  </div>
</template>

<script>
import { AddressEdit, Popup, Area, Toast } from 'vant'
export default {
  name: 'AddAddress',
  components: {
    [Toast.name]: Toast,
    [Area.name]: Area,
    [Popup.name]: Popup,
    [AddressEdit.name]: AddressEdit
  },
  data () {
    return {
      areaList,
      searchResult: [],
      show: false
    }
  },
  methods: {
    onSave () {
      Toast('save')
    },
    onDelete () {
      Toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>
