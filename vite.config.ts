import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      //为true时在项目根目录自动创建
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
    	//自动加载的组件目录，默认值为 ['src/components']
      dirs: ['src/components'],
      //组件名称包含目录，防止同名组件冲突
      directoryAsNamespace: true,
      //指定类型声明文件，为true时在项目根目录创建
      dts: 'types/components.d.ts',
      resolvers: [VantResolver()],
    })
  ],
  resolve:{
    alias:{
      '@': resolve(__dirname, 'src')
    }
  }
})
