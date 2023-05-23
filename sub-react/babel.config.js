module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}], '@babel/preset-react', '@babel/preset-typescript'],
    plugins: [['@babel/plugin-proposal-decorators', {legacy: true}]]
};
//支持修饰装饰语法ß
