const Generator = require('yeoman-generator')
class Base extends Generator {
  beginPriority(priority) {
    this.log()
    this.log()
    this.log('-------------------')
    this.log(priority)
    this.log('-------------------')
    this.log()
  }
}

module.exports = class extends Base {
  // note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts)

    this.argument('appname', { type: String, required: false })
  }

  initializing() {
    this.beginPriority('initializing')
  }
  async prompting() {
    this.beginPriority('prompting')
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'appname',
        message: 'Your project name',
        default: this.options.appname || this.appname,
      },
      {
        type: 'confirm',
        name: 'cool',
        message: 'Would you like to enable the Cool feature?',
      },
    ])
  }
  configuring() {
    this.beginPriority('configuring')
    this.destinationRoot(this.answers.appname)
    this.log('Change working directory to:', this.destinationRoot())
  }
  default() {
    this.beginPriority('default')
  }
  writing() {
    // https://github.com/sboudrias/mem-fs-editor
    this.beginPriority('writing')
    //
    // Copy dot files
    //
    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig'),
    )
    this.fs.copy(
      this.templatePath('.eslintrc.js'),
      this.destinationPath('.eslintrc.js'),
    )
    this.fs.copy(
      this.templatePath('.gitattributes'),
      this.destinationPath('.gitattributes'),
    )
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore'),
    )
    this.fs.copyTpl(
      this.templatePath('.gitlab-ci.yml'),
      this.destinationPath('.gitlab-ci.yml'),
      { appname: this.answers.appname },
    )
    this.fs.copy(
      this.templatePath('.prettierrc.js'),
      this.destinationPath('.prettierrc.js'),
    )
    this.fs.copy(
      this.templatePath('.stylelintrc.js'),
      this.destinationPath('.stylelintrc.js'),
    )
    //
    // Copy config files
    //
    this.fs.copy(
      this.templatePath('cache.config.js'),
      this.destinationPath('cache.config.js'),
    )
    this.fs.copyTpl(
      this.templatePath('ecosystem.config.js'),
      this.destinationPath('ecosystem.config.js'),
      { appname: this.answers.appname },
    )
    this.fs.copy(
      this.templatePath('jsconfig.json'),
      this.destinationPath('jsconfig.json'),
    )
    //
    // Copy nuxt.config.js
    //
    this.fs.copy(
      this.templatePath('nuxt.config.build.js'),
      this.destinationPath('nuxt.config.build.js'),
    )
    this.fs.copy(
      this.templatePath('nuxt.config.css.js'),
      this.destinationPath('nuxt.config.css.js'),
    )
    this.fs.copy(
      this.templatePath('nuxt.config.env.js'),
      this.destinationPath('nuxt.config.env.js'),
    )
    this.fs.copy(
      this.templatePath('nuxt.config.head.js'),
      this.destinationPath('nuxt.config.head.js'),
    )
    this.fs.copy(
      this.templatePath('nuxt.config.js'),
      this.destinationPath('nuxt.config.js'),
    )
    this.fs.copy(
      this.templatePath('nuxt.config.modules.js'),
      this.destinationPath('nuxt.config.modules.js'),
    )
    this.fs.copy(
      this.templatePath('nuxt.config.plugins.js'),
      this.destinationPath('nuxt.config.plugins.js'),
    )
    this.fs.copy(
      this.templatePath('nuxt.config.router.js'),
      this.destinationPath('nuxt.config.router.js'),
    )
    this.fs.copy(
      this.templatePath('nuxt.config.router.js'),
      this.destinationPath('nuxt.config.router.js'),
    )
    this.fs.copy(
      this.templatePath('nuxt.config.server-middleware.js'),
      this.destinationPath('nuxt.config.server-middleware.js'),
    )
    //
    // Copy package.json
    //
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
    )
    //
    // Copy README.md
    //
    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
    )
    //
    // Copy VS Code settings
    //
    this.fs.copy(
      this.templatePath('.vscode/settings.json'),
      this.destinationPath('.vscode/settings.json'),
    )
  }
  conflicts() {
    this.beginPriority('conflicts')
  }
  install() {
    this.beginPriority('install')
    // this.npmInstall();
  }
  end() {
    this.beginPriority('end')
  }

  method1() {
    this.log('method 1 just ran')
    this.log()
  }
  method2() {
    this.log('destinationRoot', this.destinationRoot())
    this.log('destinationPath', this.destinationPath('index.js'))
    this.log('contextRoot', this.contextRoot)
    this.log('sourceRoot', this.sourceRoot())
    this.log('templatePath', this.templatePath('app/index.js'))
    this.log('method 2 just ran')
  }
}
