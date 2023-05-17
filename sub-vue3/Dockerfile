# 使用基于 Node.js 的镜像作为构建环境
FROM node:14.17.1 as build-stage

# 设置工作目录
WORKDIR /usr/local/web

# 复制 package.json 和 package-lock.json 文件到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 将项目文件复制到工作目录
COPY . .

# 构建项目
RUN npm run build

# 使用 Nginx 作为生产环境的服务器
FROM nginx:1.21.0

# 复制构建好的项目文件到 Nginx 的默认静态文件目录
COPY --from=build-stage /usr/local/web/dist /usr/share/nginx/html

# 暴露容器的 80 端口
EXPOSE 80

# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]
