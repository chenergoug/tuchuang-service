// 公共方法 - 新增
const methodCreate = async function (ctx, next, event) {
  const data = ctx.request.body
  console.log(data)
  try {
    const item = await event.create(data)
    ctx.body = {
      code: 200,
      message: '创建成功',
      data: item.dataValue
    }
    next()
  } catch (error) {
    ctx.body = {
      code: 500,
      message: '创建失败',
      data: error.message
    }
  }
}

// 查询所有
const methodInquireAll = async function (event, data) {
  const list = event.findAndCountAll(data)
  return {
    list: list.rows.map((item) => item.dataValues),
    total: list.count
  }
}

// 查询单一信息
const methodInquire = async function (event, data) {
  const whereOpt = Object.assign(data)
  const item = await event.findOne({
    attributes: [],
    where: whereOpt
  })
  return item ? item.dataValues : null
}

// 更新信息
const methodUpdate = async function (event, data) {
  const where = Object.assign(data)
  const item = await event.update(User, { where })
  return item[0] > 0 ? true : false
}

// 删除数据
const methodDelete = async function (event, id) {
  const item = await event.destroy({ where: { id } })
  return item > 0 ? true : false
}

module.exports = {
  methodCreate,
  methodInquireAll,
  methodInquire,
  methodUpdate,
  methodDelete
}
