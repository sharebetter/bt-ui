<template>
    <div class="page-header">
        <a class="logo" href="/">
            <img src="../assets/logo.png">
            <span>BT-UI</span>
        </a>
        <a href="https://github.com/ouyangshikang/bt-ui" class="github">
            <span>Github</span>
            <svg aria-hidden="true" height="70" version="1.1" viewBox="0 0 16 16" width="30"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
    </div>
</template>

<style lang="scss">
.page-header{
    height: 66px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(29, 29, 29, 0.07) 0px 10px 60px 0px;
    .logo{
        display: flex;
        align-items: center;
        float: left;
        margin-left: 60px;
        cursor: pointer;
        img{
            height: 50px;
            border-radius: 10px;
        }
        span {
            font-family: fantasy;
            font-size: 21px;
            font-weight: bold;
            margin-top: 10px;
            margin-left: 8px;
        }
    }
    .github {
        display: flex;
        align-content: center;
        justify-content: center;
        margin-right: 50px;
        color: #2c3e50;
        font-weight: 500;
        height: 66px;
        line-height: 66px;
        cursor: pointer;
        span {
            margin-right: 10px;
            margin-top: 3px;
            &:hover {
                color: #808ea7;
            }
        }
    }
}
</style>
