const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting () {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'your project name',
                default: this.appname // appname 项目生成目录名称
            }
        ]).then(answers => {
            this.answers = answers
        }) // 为了更好的完成异步
    }
    writing () {
        // this.fs.write(
        //     this.destinationPath('text.txt'),
        //     Math.random().toString()
        // )
        // const teml = this.templatePath('foo.txt')
        // const output = this.destinationPath('foo.txt')
        // const context = {title: 'hello, exo', success: false}

        const teml = this.templatePath('bar.html')
        const output = this.destinationPath('bar.html')
        const context = this.answers
        this.fs.copyTpl(teml, output, context)
    }
}