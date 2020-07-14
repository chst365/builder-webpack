const assert = require('assert')

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js')
    console.log(baseConfig)
    it('entry', () => {
        assert.equal(baseConfig.entry.index, '/Users/zhangzhuang/Downloads/geektime-webpack-course-master/code/chapter05/my-project/builder-webpack/test/smoke/template/src/index/index.js')
    })
})