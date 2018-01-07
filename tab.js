function Tab(node) {
    this.$node = $(node)
    this.init()
}

Tab.prototype = {
    constructor: Tab,
    init: function () {
        this.$tab = this.$node.find('.panel .tab')
        this.$test = this.$node.find('.main .test')
        this.bind()
    },
    bind: function () {
        var _this = this
        this.$tab.on('click', function () {
            var index = $(this).index()
            $(this).addClass('active').siblings().removeClass('active')
            _this.$test.eq(index).addClass('active').siblings().removeClass('active')
        })
    }
}

var tab1 = new Tab(document.querySelectorAll('.tab-container')[0])
var tab2 = new Tab(document.querySelectorAll('.tab-container')[1])