import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
import {
  stat
} from 'fs';

export const store = new Vuex.Store({
  state: {
    areaList: [{
        isSelected: false,
        name_en: "Xinyi Dist.",
        name_zh: "信義區",
        length: 0
      },
      {
        isSelected: false,
        name_en: "Daan Dist.",
        name_zh: "大安區",
        length: 0
      },
      {
        isSelected: false,
        name_en: "Zhongshan Dist.",
        name_zh: "中山區",
        length: 0
      },
      {
        isSelected: false,
        name_en: "Songshan Dist.",
        name_zh: "松山區",
        length: 0
      },
      {
        isSelected: false,
        name_en: "Nangang Dist.",
        name_zh: "南港區",
        length: 0
      },
      {
        isSelected: false,
        name_en: "Zhongzheng Dist.",
        name_zh: "中正區",
        length: 0
      },
      {
        isSelected: false,
        name_en: "Wanhua Dist.",
        name_zh: "萬華區",
        length: 0
      },
      {
        isSelected: false,
        name_en: "Wenshan Dist.",
        name_zh: "文山區",
        length: 0
      },
      {
        isSelected: false,
        name_en: "Datong Dist.",
        name_zh: "大同區",
        length: 0
      },
      {
        isSelected: false,
        name_en: "Shilin Dist.",
        name_zh: "士林區",
        length: 0
      },
      {
        isSelected: false,
        name_en: "Neihu Dist.",
        name_zh: "內湖區",
        length: 0
      },
      {
        isSelected: false,
        name_en: "Beitou Dist.",
        name_zh: "北投區",
        length: 0
      }
    ],
    isLoading: true,
    searchKeyword: '',
    originalData: [],
    pageData: {
      pageStart: 1,
      currentPage: 1,
      pageSize: 10,
      totalPage: 0,
    },
    totalLength: 0,
    rentable: false,
    rentableAmount: 1,
    returnable: false,
    returnableAmount: 1,

  },
  getters: {
    selectedTags: state => {
      return state.areaList.filter(area => area.isSelected)
    },
    filteredData: state => {
      let finalData = []
      /**
       * 關鍵字搜尋
       */
      finalData = state.originalData === '' ? state.originalData : state.originalData.filter(ele => {
        let tempStr = JSON.stringify(ele)
        let regexWords = state.searchKeyword.split(' ').join('|')
        if (tempStr.match(new RegExp(regexWords, 'i')) !== null) {
          return true
        }
      })
      /**
       * 地區數量計算
       */
      state.areaList.forEach(ele => {
        let count = 0
        finalData.forEach(bike => {
          if (bike.sarea === ele.name_zh) count++
        })
        ele.length = count
      })
      /**
       * 地區篩選
       */
      finalData = store.getters.selectedTags.length == 0 ? finalData : finalData.filter(ele => store.getters.selectedTags.some(filter => filter.name_zh == ele.sarea))
      /**
       * 是否可借OR可歸還
       */
      finalData = state.rentable ? finalData.filter(ele => ele.sbi > 0) : finalData
      finalData = state.returnable ? finalData.filter(ele => ele.bemp > 0) : finalData
      /**
       * 分頁
       */
      state.pageData.totalPage = Math.ceil(finalData.length / state.pageData.pageSize)
      state.totalLength = finalData.length

      let start = (state.pageData.currentPage - 1) * state.pageData.pageSize
      let end = start + state.pageData.pageSize

      return finalData.slice(start, end)
    }
  },
  mutations: {
    'UPDATE_ORIGINAL_DATA' (state, payload) {
      state.originalData = payload
      state.isLoading = false
    },
    'UPDATE_SEARCH_KEYWORD' (state, payload) {
      state.searchKeyword = payload
      state.pageData.currentPage = 1
    },
    'CLEAR_SEARCH_KEYWORD' (state) {
      state.searchKeyword = ''
      state.pageData.currentPage = 1
    },
    'CHANGE_PAGE' (state, payload) {
      state.pageData.currentPage = payload
      store.dispatch('scrollToTop')
    },
    'UPDATE_FILTER_TAGS' (state, payload) {
      payload.isSelected = !payload.isSelected
      state.pageData.currentPage = 1
      store.dispatch('scrollToTop')
    },
    'DELETE_TAG' (state, payload) {
      payload.isSelected = !payload.isSelected
      state.pageData.currentPage = 1
    },
    'CLEAR_ALL_TAGS' (state) {
      state.areaList.forEach(ele => ele.isSelected = false)
      state.pageData.currentPage = 1
    },
    'UPDATE_RENTABLE' (state) {
      state.rentable = !state.rentable
    },
    'UPDATE_RETURNBLE' (state) {
      state.returnable = !state.returnable
    }
  },
  actions: {
    getOriData({
      commit
    }) {
      axios.get('https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.gz')
        .then(res => {
          let data = []
          let ori = res.data.retVal
          for (let i in ori) {
            data.push(ori[i])
          }
          commit('UPDATE_ORIGINAL_DATA', data)
        })
    },
    /**
     * 移動到最上
     */
    scrollToTop() {
      const scrollHeight = window.scrollY
      const scrollStep = Math.PI / (500 / 15)
      const cosParameter = scrollHeight / 2
      let scrollCount = 0
      let scrollMargin
      const scrollInterval = setInterval(function () {
        if (window.scrollY != 0) {
          scrollCount = scrollCount + 1
          scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep)
          window.scrollTo(0, (scrollHeight - scrollMargin))
        } else clearInterval(scrollInterval)
      }, 15)
    }
  },
})
