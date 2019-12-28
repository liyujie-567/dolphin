import Mock from 'mockjs'

const data = {
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name': '@cname',
    'date': '@date(yyyy-MM-dd)',
    'datetime': '@datetime',
    'now': '@now',
    'CardId': '@id',
    'guid': '@guid',
    'url': '@url',
    'email': '@email'
  }],
  // 随机生成一个10～30之间的正整数
  'integer': '@integer(10, 30)',
  //  随机生成浮点数，参数分别为整数部分最小值和最大值、小数部分保留最小位数和最大位数
  'float': '@float(60, 100, 2, 2)',
  // 随机生成boolean
  'boolean': '@boolean',
  // 随机生成字符串
  'string|1-2': '@string',
  // 随机生成名字
  'name': '@cname',
  // 按照格式随机生成时间
  'date': '@date(yyyy-MM-dd)',
  // 随机生成时间
  'datetime': '@datetime',
  // 当前时间
  'now': '@now',
  // 随机生成一个 18 位身份证
  'CardId': '@id',
  // 随机生成一个 GUID
  'guid': '@guid',
  // 随机生成url字符串
  'url': '@url',
  // 随机生成邮箱
  'email': '@email',
  // 随机生成一个大小为200x200的图片链接
  'image': '@image(200x200)',
  // 随机生成一句标题，其中每个单词的首字母大写
  'title': '@title',
  // 把生随机成的标题全部转为大写
  'upper': '@upper(@title)',
  // 随机生成一段中文文本
  'cparagraph': '@cparagraph',
  // 随机生成一段中文文本
  'csentence': '@csentence',
  // 返回一个内容从2开始到9的整型数组
  'range': '@range(2, 10)',
  // 随机生成地区 华中
  'region': '@region',
  // 随机生成省会 省
  'province': '@province',
  // 随机生成城市 市
  'city': '@city',
  // 随机生成一个（中国）县
  'county': '@county'
}

Mock.mock('/api/test', 'post', data)

export default Mock
