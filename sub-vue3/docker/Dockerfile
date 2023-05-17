# 基于nginx 镜像构建
FROM nginx:1.21.1

# 指定工作目录
# WORKDIR /web

# 将自定义的 Nginx 配置文件复制到容器中
COPY nginx.conf /etc/nginx/nginx.conf

# 复制项目的静态文件到 Nginx 的默认静态文件目录
COPY  dist/ /usr/share/nginx/html

# 可选：暴露容器的端口，如果使用了自定义的 nginx 配置文件，需要与配置文件中的端口一致
EXPOSE 80

# 启动 Nginx 服务器
 CMD ["nginx", "-g", "daemon off;"]
