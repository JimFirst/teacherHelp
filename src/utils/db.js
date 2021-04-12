const env = 'dev-e18550'
// const env = 'online-e18550'
wx.cloud.init({
  env: env,
  traceUser: true
})
const db = wx.cloud.database({
  env: env
})

export default {
  // 获取列表总数
  count(name, search = {}) {
    return db.collection(name).where(search).count()
  },
  // 获取分页
  getPage(name, data, search = {}) {
    return db.collection(name).where(search).skip((data.page - 1) *data.size).limit(data.size).get()
  },
  // 增
  add(name, data) {
    return db.collection(name).add({
      data: data
    })
  },
  // 更新
  update(name, id, data) {
    return db.collection(name).doc(id).update({
      data: data
    })
  },
  // 删
  del(name, id) {
    return db.collection(name).doc(id).remove()
  },
  getDetail(name, id) {
    return db.collection(name).doc(id).get()
  } 
}