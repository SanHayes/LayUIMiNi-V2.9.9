/**
 * date:2020/02/28
 * author:Mr.Chung
 * version:2.0
 * description:layuimini tab框架扩展
 */
layui.define(["jquery", "layer"], function (exports) {
    var $ = layui.$;
    var layer = layui.layer;

    var miniTheme = {
        /**
         * 主题配置项
         * @param bgcolorId
         * @returns {{headerLogo, menuLeftHover, headerRight, menuLeft, headerRightThis, menuLeftThis}|*|*[]}
         */
        config: function (bgcolorId) {
            var bgColorConfig = [{
                headerRightBg: '#fff', //头部右侧背景色
                headerRightBgThis: '#e4e4e4', //头部右侧选中背景色,
                headerRightColor: 'rgba(107, 107, 107, 0.7)', //头部右侧字体颜色,
                headerRightChildColor: 'rgba(107, 107, 107, 0.7)', //头部右侧下拉字体颜色,
                headerRightColorThis: '#565656', //头部右侧鼠标选中,
                headerRightNavMore: 'rgba(160, 160, 160, 0.7)', //头部右侧更多下拉颜色,
                headerRightNavMoreBg: '#1E9FFF', //头部右侧更多下拉列表选中背景色,
                headerRightNavMoreColor: '#fff', //头部右侧更多下拉列表字体色,
                headerRightToolColor: '#565656', //头部缩放按钮样式,
                headerLogoBg: '#192027', //logo背景颜色,
                headerLogoColor: 'rgb(191, 187, 187)', //logo字体颜色,
                leftMenuNavMore: 'rgb(191, 187, 187)', //左侧菜单更多下拉样式,
                leftMenuBg: '#28333E', //左侧菜单背景,
                leftMenuBgThis: '#1E9FFF', //左侧菜单选中背景,
                leftMenuChildBg: '#0c0f13', //左侧菜单子菜单背景,
                leftMenuColor: 'rgb(191, 187, 187)', //左侧菜单字体颜色,
                leftMenuColorThis: '#fff', //左侧菜单选中字体颜色,
                tabActiveColor: '#1e9fff', //tab选项卡选中颜色,
            }, {
                headerRightBg: '#23262e', //头部右侧背景色
                headerRightBgThis: '#0c0c0c', //头部右侧选中背景色,
                headerRightColor: 'rgba(255,255,255,.7)', //头部右侧字体颜色,
                headerRightChildColor: '#676767', //头部右侧下拉字体颜色,
                headerRightColorThis: '#fff', //头部右侧鼠标选中,
                headerRightNavMore: 'rgba(255,255,255,.7)', //头部右侧更多下拉颜色,
                headerRightNavMoreBg: '#1aa094', //头部右侧更多下拉列表选中背景色,
                headerRightNavMoreColor: '#fff', //头部右侧更多下拉列表字体色,
                headerRightToolColor: '#bbe3df', //头部缩放按钮样式,
                headerLogoBg: '#0c0c0c', //logo背景颜色,
                headerLogoColor: '#fff', //logo字体颜色,
                leftMenuNavMore: 'rgb(191, 187, 187)', //左侧菜单更多下拉样式,
                leftMenuBg: '#23262e', //左侧菜单背景,
                leftMenuBgThis: '#737373', //左侧菜单选中背景,
                leftMenuChildBg: 'rgba(0,0,0,.3)', //左侧菜单子菜单背景,
                leftMenuColor: 'rgb(191, 187, 187)', //左侧菜单字体颜色,
                leftMenuColorThis: '#fff', //左侧菜单选中字体颜色,
                tabActiveColor: '#23262e', //tab选项卡选中颜色,
            }, {
                headerRightBg: '#ffa4d1', //头部右侧背景色
                headerRightBgThis: '#bf7b9d', //头部右侧选中背景色,
                headerRightColor: 'rgba(255,255,255,.7)', //头部右侧字体颜色,
                headerRightChildColor: '#676767', //头部右侧下拉字体颜色,
                headerRightColorThis: '#fff', //头部右侧鼠标选中,
                headerRightNavMore: 'rgba(255,255,255,.7)', //头部右侧更多下拉颜色,
                headerRightNavMoreBg: '#ffa4d1', //头部右侧更多下拉列表选中背景色,
                headerRightNavMoreColor: '#fff', //头部右侧更多下拉列表字体色,
                headerRightToolColor: '#bbe3df', //头部缩放按钮样式,
                headerLogoBg: '#e694bd', //logo背景颜色,
                headerLogoColor: '#fff', //logo字体颜色,
                leftMenuNavMore: 'rgb(191, 187, 187)', //左侧菜单更多下拉样式,
                leftMenuBg: '#1f1f1f', //左侧菜单背景,
                leftMenuBgThis: '#737373', //左侧菜单选中背景,
                leftMenuChildBg: 'rgba(0,0,0,.3)', //左侧菜单子菜单背景,
                leftMenuColor: 'rgb(191, 187, 187)', //左侧菜单字体颜色,
                leftMenuColorThis: '#fff', //左侧菜单选中字体颜色,
                tabActiveColor: '#ffa4d1', //tab选项卡选中颜色,
            }, {
                headerRightBg: '#1aa094', //头部右侧背景色
                headerRightBgThis: '#197971', //头部右侧选中背景色,
                headerRightColor: 'rgba(255,255,255,.7)', //头部右侧字体颜色,
                headerRightChildColor: '#676767', //头部右侧下拉字体颜色,
                headerRightColorThis: '#fff', //头部右侧鼠标选中,
                headerRightNavMore: 'rgba(255,255,255,.7)', //头部右侧更多下拉颜色,
                headerRightNavMoreBg: '#1aa094', //头部右侧更多下拉列表选中背景色,
                headerRightNavMoreColor: '#fff', //头部右侧更多下拉列表字体色,
                headerRightToolColor: '#bbe3df', //头部缩放按钮样式,
                headerLogoBg: '#0c0c0c', //logo背景颜色,
                headerLogoColor: '#fff', //logo字体颜色,
                leftMenuNavMore: 'rgb(191, 187, 187)', //左侧菜单更多下拉样式,
                leftMenuBg: '#23262e', //左侧菜单背景,
                leftMenuBgThis: '#1aa094', //左侧菜单选中背景,
                leftMenuChildBg: 'rgba(0,0,0,.3)', //左侧菜单子菜单背景,
                leftMenuColor: 'rgb(191, 187, 187)', //左侧菜单字体颜色,
                leftMenuColorThis: '#fff', //左侧菜单选中字体颜色,
                tabActiveColor: '#1aa094', //tab选项卡选中颜色,
            }, {
                headerRightBg: '#1e9fff', //头部右侧背景色
                headerRightBgThis: '#0069b7', //头部右侧选中背景色,
                headerRightColor: 'rgba(255,255,255,.7)', //头部右侧字体颜色,
                headerRightChildColor: '#676767', //头部右侧下拉字体颜色,
                headerRightColorThis: '#fff', //头部右侧鼠标选中,
                headerRightNavMore: 'rgba(255,255,255,.7)', //头部右侧更多下拉颜色,
                headerRightNavMoreBg: '#1e9fff', //头部右侧更多下拉列表选中背景色,
                headerRightNavMoreColor: '#fff', //头部右侧更多下拉列表字体色,
                headerRightToolColor: '#bbe3df', //头部缩放按钮样式,
                headerLogoBg: '#0c0c0c', //logo背景颜色,
                headerLogoColor: '#fff', //logo字体颜色,
                leftMenuNavMore: 'rgb(191, 187, 187)', //左侧菜单更多下拉样式,
                leftMenuBg: '#1f1f1f', //左侧菜单背景,
                leftMenuBgThis: '#1e9fff', //左侧菜单选中背景,
                leftMenuChildBg: 'rgba(0,0,0,.3)', //左侧菜单子菜单背景,
                leftMenuColor: 'rgb(191, 187, 187)', //左侧菜单字体颜色,
                leftMenuColorThis: '#fff', //左侧菜单选中字体颜色,
                tabActiveColor: '#1e9fff', //tab选项卡选中颜色,
            }, {
                headerRightBg: '#ffb800', //头部右侧背景色
                headerRightBgThis: '#d09600', //头部右侧选中背景色,
                headerRightColor: 'rgba(255,255,255,.7)', //头部右侧字体颜色,
                headerRightChildColor: '#676767', //头部右侧下拉字体颜色,
                headerRightColorThis: '#fff', //头部右侧鼠标选中,
                headerRightNavMore: 'rgba(255,255,255,.7)', //头部右侧更多下拉颜色,
                headerRightNavMoreBg: '#d09600', //头部右侧更多下拉列表选中背景色,
                headerRightNavMoreColor: '#fff', //头部右侧更多下拉列表字体色,
                headerRightToolColor: '#bbe3df', //头部缩放按钮样式,
                headerLogoBg: '#243346', //logo背景颜色,
                headerLogoColor: '#fff', //logo字体颜色,
                leftMenuNavMore: 'rgb(191, 187, 187)', //左侧菜单更多下拉样式,
                leftMenuBg: '#2f4056', //左侧菜单背景,
                leftMenuBgThis: '#8593a7', //左侧菜单选中背景,
                leftMenuChildBg: 'rgba(0,0,0,.3)', //左侧菜单子菜单背景,
                leftMenuColor: 'rgb(191, 187, 187)', //左侧菜单字体颜色,
                leftMenuColorThis: '#fff', //左侧菜单选中字体颜色,
                tabActiveColor: '#ffb800', //tab选项卡选中颜色,
            }, {
                headerRightBg: '#e82121', //头部右侧背景色
                headerRightBgThis: '#ae1919', //头部右侧选中背景色,
                headerRightColor: 'rgba(255,255,255,.7)', //头部右侧字体颜色,
                headerRightChildColor: '#676767', //头部右侧下拉字体颜色,
                headerRightColorThis: '#fff', //头部右侧鼠标选中,
                headerRightNavMore: 'rgba(255,255,255,.7)', //头部右侧更多下拉颜色,
                headerRightNavMoreBg: '#ae1919', //头部右侧更多下拉列表选中背景色,
                headerRightNavMoreColor: '#fff', //头部右侧更多下拉列表字体色,
                headerRightToolColor: '#bbe3df', //头部缩放按钮样式,
                headerLogoBg: '#0c0c0c', //logo背景颜色,
                headerLogoColor: '#fff', //logo字体颜色,
                leftMenuNavMore: 'rgb(191, 187, 187)', //左侧菜单更多下拉样式,
                leftMenuBg: '#1f1f1f', //左侧菜单背景,
                leftMenuBgThis: '#3b3f4b', //左侧菜单选中背景,
                leftMenuChildBg: 'rgba(0,0,0,.3)', //左侧菜单子菜单背景,
                leftMenuColor: 'rgb(191, 187, 187)', //左侧菜单字体颜色,
                leftMenuColorThis: '#fff', //左侧菜单选中字体颜色,
                tabActiveColor: '#e82121', //tab选项卡选中颜色,
            }, {
                headerRightBg: '#963885', //头部右侧背景色
                headerRightBgThis: '#772c6a', //头部右侧选中背景色,
                headerRightColor: 'rgba(255,255,255,.7)', //头部右侧字体颜色,
                headerRightChildColor: '#676767', //头部右侧下拉字体颜色,
                headerRightColorThis: '#fff', //头部右侧鼠标选中,
                headerRightNavMore: 'rgba(255,255,255,.7)', //头部右侧更多下拉颜色,
                headerRightNavMoreBg: '#772c6a', //头部右侧更多下拉列表选中背景色,
                headerRightNavMoreColor: '#fff', //头部右侧更多下拉列表字体色,
                headerRightToolColor: '#bbe3df', //头部缩放按钮样式,
                headerLogoBg: '#243346', //logo背景颜色,
                headerLogoColor: '#fff', //logo字体颜色,
                leftMenuNavMore: 'rgb(191, 187, 187)', //左侧菜单更多下拉样式,
                leftMenuBg: '#2f4056', //左侧菜单背景,
                leftMenuBgThis: '#586473', //左侧菜单选中背景,
                leftMenuChildBg: 'rgba(0,0,0,.3)', //左侧菜单子菜单背景,
                leftMenuColor: 'rgb(191, 187, 187)', //左侧菜单字体颜色,
                leftMenuColorThis: '#fff', //左侧菜单选中字体颜色,
                tabActiveColor: '#963885', //tab选项卡选中颜色,
            }, {
                headerRightBg: '#2D8CF0', //头部右侧背景色
                headerRightBgThis: '#0069b7', //头部右侧选中背景色,
                headerRightColor: 'rgba(255,255,255,.7)', //头部右侧字体颜色,
                headerRightChildColor: '#676767', //头部右侧下拉字体颜色,
                headerRightColorThis: '#fff', //头部右侧鼠标选中,
                headerRightNavMore: 'rgba(255,255,255,.7)', //头部右侧更多下拉颜色,
                headerRightNavMoreBg: '#0069b7', //头部右侧更多下拉列表选中背景色,
                headerRightNavMoreColor: '#fff', //头部右侧更多下拉列表字体色,
                headerRightToolColor: '#bbe3df', //头部缩放按钮样式,
                headerLogoBg: '#0069b7', //logo背景颜色,
                headerLogoColor: '#fff', //logo字体颜色,
                leftMenuNavMore: 'rgb(191, 187, 187)', //左侧菜单更多下拉样式,
                leftMenuBg: '#1f1f1f', //左侧菜单背景,
                leftMenuBgThis: '#2D8CF0', //左侧菜单选中背景,
                leftMenuChildBg: 'rgba(0,0,0,.3)', //左侧菜单子菜单背景,
                leftMenuColor: 'rgb(191, 187, 187)', //左侧菜单字体颜色,
                leftMenuColorThis: '#fff', //左侧菜单选中字体颜色,
                tabActiveColor: '#2d8cf0', //tab选项卡选中颜色,
            }, {
                headerRightBg: '#ffb800', //头部右侧背景色
                headerRightBgThis: '#d09600', //头部右侧选中背景色,
                headerRightColor: 'rgba(255,255,255,.7)', //头部右侧字体颜色,
                headerRightChildColor: '#676767', //头部右侧下拉字体颜色,
                headerRightColorThis: '#fff', //头部右侧鼠标选中,
                headerRightNavMore: 'rgba(255,255,255,.7)', //头部右侧更多下拉颜色,
                headerRightNavMoreBg: '#d09600', //头部右侧更多下拉列表选中背景色,
                headerRightNavMoreColor: '#fff', //头部右侧更多下拉列表字体色,
                headerRightToolColor: '#bbe3df', //头部缩放按钮样式,
                headerLogoBg: '#d09600', //logo背景颜色,
                headerLogoColor: '#fff', //logo字体颜色,
                leftMenuNavMore: 'rgb(191, 187, 187)', //左侧菜单更多下拉样式,
                leftMenuBg: '#2f4056', //左侧菜单背景,
                leftMenuBgThis: '#3b3f4b', //左侧菜单选中背景,
                leftMenuChildBg: 'rgba(0,0,0,.3)', //左侧菜单子菜单背景,
                leftMenuColor: 'rgb(191, 187, 187)', //左侧菜单字体颜色,
                leftMenuColorThis: '#fff', //左侧菜单选中字体颜色,
                tabActiveColor: '#ffb800', //tab选项卡选中颜色,
            }, {
                headerRightBg: '#e82121', //头部右侧背景色
                headerRightBgThis: '#ae1919', //头部右侧选中背景色,
                headerRightColor: 'rgba(255,255,255,.7)', //头部右侧字体颜色,
                headerRightChildColor: '#676767', //头部右侧下拉字体颜色,
                headerRightColorThis: '#fff', //头部右侧鼠标选中,
                headerRightNavMore: 'rgba(255,255,255,.7)', //头部右侧更多下拉颜色,
                headerRightNavMoreBg: '#ae1919', //头部右侧更多下拉列表选中背景色,
                headerRightNavMoreColor: '#fff', //头部右侧更多下拉列表字体色,
                headerRightToolColor: '#bbe3df', //头部缩放按钮样式,
                headerLogoBg: '#d91f1f', //logo背景颜色,
                headerLogoColor: '#fff', //logo字体颜色,
                leftMenuNavMore: 'rgb(191, 187, 187)', //左侧菜单更多下拉样式,
                leftMenuBg: '#1f1f1f', //左侧菜单背景,
                leftMenuBgThis: '#3b3f4b', //左侧菜单选中背景,
                leftMenuChildBg: 'rgba(0,0,0,.3)', //左侧菜单子菜单背景,
                leftMenuColor: 'rgb(191, 187, 187)', //左侧菜单字体颜色,
                leftMenuColorThis: '#fff', //左侧菜单选中字体颜色,
                tabActiveColor: '#e82121', //tab选项卡选中颜色,
            }, {
                headerRightBg: '#963885', //头部右侧背景色
                headerRightBgThis: '#772c6a', //头部右侧选中背景色,
                headerRightColor: 'rgba(255,255,255,.7)', //头部右侧字体颜色,
                headerRightChildColor: '#676767', //头部右侧下拉字体颜色,
                headerRightColorThis: '#fff', //头部右侧鼠标选中,
                headerRightNavMore: 'rgba(255,255,255,.7)', //头部右侧更多下拉颜色,
                headerRightNavMoreBg: '#772c6a', //头部右侧更多下拉列表选中背景色,
                headerRightNavMoreColor: '#fff', //头部右侧更多下拉列表字体色,
                headerRightToolColor: '#bbe3df', //头部缩放按钮样式,
                headerLogoBg: '#772c6a', //logo背景颜色,
                headerLogoColor: '#fff', //logo字体颜色,
                leftMenuNavMore: 'rgb(191, 187, 187)', //左侧菜单更多下拉样式,
                leftMenuBg: '#2f4056', //左侧菜单背景,
                leftMenuBgThis: '#626f7f', //左侧菜单选中背景,
                leftMenuChildBg: 'rgba(0,0,0,.3)', //左侧菜单子菜单背景,
                leftMenuColor: 'rgb(191, 187, 187)', //左侧菜单字体颜色,
                leftMenuColorThis: '#fff', //左侧菜单选中字体颜色,
                tabActiveColor: '#963885', //tab选项卡选中颜色,
            }];
            if (bgcolorId === undefined) {
                return bgColorConfig;
            } else {
                return bgColorConfig[bgcolorId];
            }
        },

        /**
         * 初始化
         * @param options
         */
        render: function (options) {
            options.bgColorDefault = options.bgColorDefault || false;
            options.listen = options.listen || false;
            var bgcolorId = sessionStorage.getItem('layuiminiBgcolorId');
            if (bgcolorId === null || bgcolorId === undefined || bgcolorId === '') {
                bgcolorId = options.bgColorDefault;
            }
            miniTheme.buildThemeCss(bgcolorId);
            if (options.listen) miniTheme.listen(options);
        },

        /**
         * 构建主题样式
         * @param bgcolorId
         * @returns {boolean}
         */
        buildThemeCss: function (bgcolorId) {
            if (!bgcolorId) {
                return false;
            }
            var bgcolorData = miniTheme.config(bgcolorId);
            var styleHtml = '';
            styleHtml += '/*头部右侧背景色 headerRightBg */\n';
            styleHtml += '.layui-layout-admin .layui-header {background-color: ' + bgcolorData.headerRightBg + ' !important}';
            styleHtml += '\n/*头部右侧选中背景色 headerRightBgThis */\n';
            styleHtml += '.layui-layout-admin .layui-header .layuimini-header-content > ul > .layui-nav-item.layui-this, .layuimini-tool i:hover {background-color: ' + bgcolorData.headerRightBgThis + ' !important}';
            styleHtml += '\n/*头部右侧字体颜色 headerRightColor */\n';
            styleHtml += '.layui-layout-admin .layui-header .layui-nav .layui-nav-item a {color: ' + bgcolorData.headerRightColor + '}';
            styleHtml += '\n/*头部右侧下拉字体颜色 headerRightChildColor */\n';
            styleHtml += '.layui-layout-admin .layui-header .layui-nav .layui-nav-item .layui-nav-child a {color: ' + bgcolorData.headerRightChildColor + ' !important}';
            styleHtml += '\n/*头部右侧鼠标选中 headerRightColorThis */\n';
            styleHtml += '.layui-header .layuimini-menu-header-pc.layui-nav .layui-nav-item a:hover, .layui-header .layuimini-header-menu.layuimini-pc-show.layui-nav .layui-this a {color: ' + bgcolorData.headerRightColorThis + ' !important}';
            styleHtml += '\n/*头部右侧更多下拉颜色 headerRightNavMore */\n';
            styleHtml += '.layui-header .layui-nav .layui-nav-more {border-top-color: ' + bgcolorData.headerRightNavMore + ' !important}';
            styleHtml += '\n/*头部右侧更多下拉颜色 headerRightNavMore */\n';
            styleHtml += '.layui-header .layui-nav .layui-nav-mored, .layui-header .layui-nav-itemed > a .layui-nav-more {border-color: transparent transparent ' + bgcolorData.headerRightNavMore + ' !important}';
            styleHtml += '\n/*头部右侧更多下拉配置色 headerRightNavMoreBg headerRightNavMoreColor */\n';
            styleHtml += '.layui-header .layui-nav .layui-nav-child dd.layui-this a, .layui-header .layui-nav-child dd.layui-this, .layui-layout-admin .layui-header .layui-nav .layui-nav-item .layui-nav-child .layui-this a {background-color: ' + bgcolorData.headerRightNavMoreBg + ' !important; color:' + bgcolorData.headerRightNavMoreColor + ' !important}';
            styleHtml += '\n/*头部缩放按钮样式 headerRightToolColor */\n';
            styleHtml += '.layui-layout-admin .layui-header .layuimini-tool i {color: ' + bgcolorData.headerRightToolColor + '}';
            styleHtml += '\n/*logo背景颜色 headerLogoBg */\n';
            styleHtml += '.layui-layout-admin .layuimini-logo {background-color: ' + bgcolorData.headerLogoBg + ' !important}';
            styleHtml += '\n/*logo字体颜色 headerLogoColor */\n';
            styleHtml += '.layui-layout-admin .layuimini-logo h1 {color: ' + bgcolorData.headerLogoColor + '}';
            styleHtml += '\n/*左侧菜单更多下拉样式 leftMenuNavMore */\n';
            styleHtml += '.layuimini-menu-left .layui-nav .layui-nav-more, .layuimini-menu-left-zoom.layui-nav .layui-nav-more {border-top-color: ' + bgcolorData.leftMenuNavMore + '}';
            styleHtml += '\n/*左侧菜单更多下拉样式 leftMenuNavMore */\n';
            styleHtml += '.layuimini-menu-left .layui-nav .layui-nav-mored, .layuimini-menu-left .layui-nav-itemed > a .layui-nav-more, .layuimini-menu-left-zoom.layui-nav .layui-nav-mored, .layuimini-menu-left-zoom.layui-nav-itemed > a .layui-nav-more {border-color: transparent transparent ' + bgcolorData.leftMenuNavMore + ' !important}';
            styleHtml += '\n/*左侧菜单背景 leftMenuBg */\n';
            styleHtml += '.layui-side.layui-bg-black, .layui-side.layui-bg-black > .layuimini-menu-left > ul, .layuimini-menu-left-zoom > ul {background-color: ' + bgcolorData.leftMenuBg + ' !important}';
            styleHtml += '\n/*左侧菜单选中背景 leftMenuBgThis */\n';
            styleHtml += '.layuimini-menu-left .layui-nav-tree .layui-this, .layuimini-menu-left .layui-nav-tree .layui-this > a, .layuimini-menu-left .layui-nav-tree .layui-nav-child dd.layui-this, .layuimini-menu-left .layui-nav-tree .layui-nav-child dd.layui-this a, .layuimini-menu-left-zoom.layui-nav-tree .layui-this, .layuimini-menu-left-zoom.layui-nav-tree .layui-this > a, .layuimini-menu-left-zoom.layui-nav-tree .layui-nav-child dd.layui-this, .layuimini-menu-left-zoom.layui-nav-tree .layui-nav-child dd.layui-this a {background-color: ' + bgcolorData.leftMenuBgThis + ' !important}';
            styleHtml += '\n/*左侧菜单子菜单背景 leftMenuChildBg */\n';
            styleHtml += '.layuimini-menu-left .layui-nav-itemed > .layui-nav-child{background-color: ' + bgcolorData.leftMenuChildBg + ' !important}';
            styleHtml += '\n/*左侧菜单字体颜色 leftMenuColor */\n';
            styleHtml += '.layuimini-menu-left .layui-nav .layui-nav-item a, .layuimini-menu-left-zoom.layui-nav .layui-nav-item a {color: ' + bgcolorData.leftMenuColor + ' !important}';
            styleHtml += '\n/*左侧菜单选中字体颜色 leftMenuColorThis */\n';
            styleHtml += '.layuimini-menu-left .layui-nav .layui-nav-item a:hover, .layuimini-menu-left .layui-nav .layui-this a, .layuimini-menu-left-zoom.layui-nav .layui-nav-item a:hover, .layuimini-menu-left-zoom.layui-nav .layui-this a {color:' + bgcolorData.leftMenuColorThis + ' !important}';
            styleHtml += '\n/*tab选项卡选中颜色 tabActiveColor */\n';
            styleHtml += '.layuimini-tab .layui-tab-title .layui-this .layuimini-tab-active {background-color: ' + bgcolorData.tabActiveColor + '}';
            $('#layuimini-bg-color').html(styleHtml);
        },

        /**
         * 构建主题选择html
         * @param options
         * @returns {string}
         */
        buildBgColorHtml: function (options) {
            options.bgColorDefault = options.bgColorDefault || 0;
            var bgcolorId = parseInt(sessionStorage.getItem('layuiminiBgcolorId'));
            if (isNaN(bgcolorId)) bgcolorId = options.bgColorDefault;
            var bgColorConfig = miniTheme.config();
            var html = '';
            $.each(bgColorConfig, function (key, val) {
                if (key === bgcolorId) {
                    html += '<li class="layui-this" data-select-bgcolor="' + key + '">';
                } else {
                    html += '<li data-select-bgcolor="' + key + '">';
                }
                html += '<a href="javascript:;" data-skin="skin-blue" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 12px; background: ' + val.headerLogoBg + ';"></span><span style="display:block; width: 80%; float: left; height: 12px; background: ' + val.headerRightBg + ';"></span></div><div><span style="display:block; width: 20%; float: left; height: 40px; background: ' + val.leftMenuBg + ';"></span><span style="display:block; width: 80%; float: left; height: 40px; background: #fff;"></span></div></a></li>';
            });
            return html;
        },

        /**
         * 监听
         * @param options
         */
        listen: function (options) {
            $('body').on('click', '[data-bgcolor]', function () {
                var loading = layer.load(0, {shade: false, time: 2 * 1000});
                var clientHeight = (document.documentElement.clientHeight) - 200;
                var html = `
                    <div class="layuimini-color">
                        <div class="color-title"><span>配色方案</span></div>
                        <div class="color-content">
                            <ul>
                `;
                html += miniTheme.buildBgColorHtml(options);
                html += `
                            </ul>
                        </div>
                        <div class="more-menu-list">
                            <a class="more-menu-item" href="http://layuimini.99php.cn/docs/index.html" target="_blank"><i class="layui-icon layui-icon-read" style="font-size: 19px;"></i> 开发文档</a>
                            <a class="more-menu-item" href="https://github.com/zhongshaofa/layuimini" target="_blank"><i class="layui-icon layui-icon-tabs" style="font-size: 16px;"></i> 开源地址</a>
                            <a class="more-menu-item" href="http://layuimini.99php.cn" target="_blank"><i class="layui-icon layui-icon-theme"></i> 官方网站</a>
                        </div>
                    </div>
                `;
                layer.open({
                    type: 1,
                    title: false,
                    closeBtn: 0,
                    shade: 0.2,
                    anim: 2,
                    shadeClose: true,
                    id: 'layuiminiBgColor',
                    area: ['340px', clientHeight + 'px'],
                    offset: 'rb',
                    content: html,
                    success: function (index, layero) {
                    },
                    end: function () {
                        $('.layuimini-select-bgcolor').removeClass('layui-this');
                    }
                });
                layer.close(loading);
            });

            $('body').on('click', '[data-select-bgcolor]', function () {
                var bgcolorId = $(this).attr('data-select-bgcolor');
                $('.layuimini-color .color-content ul .layui-this').attr('class', '');
                $(this).attr('class', 'layui-this');
                sessionStorage.setItem('layuiminiBgcolorId', bgcolorId);
                miniTheme.render({
                    bgColorDefault: bgcolorId,
                    listen: false,
                });
            });
        }
    };

    exports("miniTheme", miniTheme);
});