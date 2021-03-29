<template>
  <div>
    <div class="pdf">
      <p class="arrow" v-if="loadPdfSuccess">
        <span :disable="isDisabled" @click="changePdfPage(0)" :class="{ 'grey': currentPage === 1 }">上一页</span>
        {{currentPage}} / {{pageCount}}
        <span :disable="isDisabled" @click="changePdfPage(1)" :class="{ 'grey': currentPage === pageCount }">下一页</span>
        <span @click="download" class="download">下载</span>
      </p>
      <div class="load_title" v-if="!loadPdfSuccess">正在加载操作手册，请耐心等待...</div>
      <pdf :src="src" :page="currentPage"
           @num-pages="pageCount=$event"
           @page-loaded="currentPage=$event"
           @loaded="loadPdfHandler">
      </pdf>
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  components: { pdf },
  data () {
    return {
      isDisabled: false,
      title: "操作手册",
      loadPdfSuccess: false, // pdf文件下载成功后
      currentPage: 0, // pdf文件页码
      pageCount: 0, // pdf文件总页数
      fileType: 'pdf', // 文件类型
      pdfSrc: '/syq.pdf', // 后端请求返回地址
      src: '' // pdf文件加入下载队列
    }
  },
  created () {
    this.currentPage = 1
    this.src = pdf.createLoadingTask(this.pdfSrc)
  },
  methods: {
    download () {
      window.location.href = this.pdfSrc
    },
    // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
    changePdfPage (val) {
      // 增加节流效果
      if (this.isDisabled) return
      this.isDisabled = true
      setTimeout(() => {
        if (val === 0 && this.currentPage > 1) {
          this.currentPage--
        }
        if (val === 1 && this.currentPage < this.pageCount) {
          this.currentPage++
        }
        this.isDisabled = false
      }, 500)

    },
    // pdf加载时
    loadPdfHandler (e) {
      this.loadPdfSuccess = true
      this.currentPage = 1 // 加载的时候先加载第一页
    }
  }
}
</script>

<style scoped>
.pdf {
  font-size: 14px;
  text-align: center;
}
.arrow {
  margin: 8px 0;
}
.grey {
  color: #9c9c9c;
}
.download {
  color: #07c160;
  position: absolute;
  right: 10px;
}
.load_title {
  margin-top: 25%;
}
</style>
