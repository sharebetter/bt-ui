<template>
    <div class="bt-scrollbar">
        <bar :width="sizeHeight" :move="moveY" v-if="!native && sizeHeight"></bar>
        <bar :width="sizeWidth" :move="moveX" :vertical="false" v-if="!native && sizeWidth"></bar>
        <div
            class="bt-scrollbar__wrap"
            :class="{'nativeScroll-hide': !native}"
            ref="wrap"
            @scroll="handleScroll"
        >
            <div class="resize" ref="resize">
                <slot></slot>
                <div class="multiple-page">
                    <ul class="pages-list">
                        <li v-for="(layout, index) in layouts" :key="index" class="pages-layout"></li>
                    </ul>
                    <div class="pages-layout" @click="Addlayouts">+</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill';
import bar from './bar';

export default {
    name: 'BtScrollbar',
    props: {
        native: { // 使用原生滚动条
            type: Boolean,
            default: false
        },
        noresize: {
            type: Boolean,
            default: false
        }

    },
    components: { bar },
    data() {
        return {
            moveX: 0,
            moveY: 0,
            sizeWidth: '0',
            sizeHeight: '0',
            layouts: [0, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
        };
    },
    computed: {
        wrap() {
            return this.$refs.wrap;
        }
    },
    methods: {
        Addlayouts() {
            this.layouts.push(1);
        },
        handleScroll() {
            const wrap = this.wrap;
            this.moveY = ((wrap.scrollTop * 100) / wrap.clientHeight);
            this.moveX = ((wrap.scrollLeft * 100) / wrap.clientWidth);
            // console.log('moveX, moveY', this.moveX, this.moveY);
        },
        // 滚动条长度计算
        scrollUpdate() {
            const wrap = this.wrap;
            if(!wrap) {
                return;
            }
            let heightRatio = wrap.clientHeight * 100 / wrap.scrollHeight;
            let widthRatio = wrap.clientWidth * 100 / wrap.scrollWidth;

            this.sizeHeight = heightRatio < 100 ? (heightRatio + '%') : '';
            this.sizeWidth = widthRatio < 100 ? (widthRatio + '%') : '';
            console.log(this.sizeHeight, this.sizeWidth);
        },
        addResizeListener(element) {
            const resizeObserver = new ResizeObserver(entries => {
                entries.forEach(entry => {
                    console.log(entry);
                    this.scrollUpdate();
                });
            });
            resizeObserver.observe(element);
        },
        removeResizeListener(element) {
            const resizeObserver = new ResizeObserver(entries => {
                entries.forEach(entry => {
                    console.log(entry);
                    this.scrollUpdate();
                });
            });
            resizeObserver.unobserve(element);
        }
    },
    mounted() {
        if (this.native) {
            return;
        }
        this.$nextTick(this.scrollUpdate);
        !this.noresize && this.addResizeListener(this.$refs.resize);
    },
    destroyed() {
        !this.noresize && this.removeResizeListener(this.$refs.resize);
    }
};
</script>

<style lang="scss">
.multiple-page {
    display: inline-flex;
    margin: auto;
    .pages-list {
        display: inline-flex;
        align-items: center;
        padding: 0;
        .pages-layout {
            display: inline-block;
            height: 54px;
            width: 80px;
            margin-left: 8px;
            border: 1px solid #412345;
        }
    }
}
</style>
