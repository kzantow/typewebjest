module.exports = {
    process(src, filename) {
        return `module.exports = ${JSON.stringify(require('path').basename(filename))};`;
    }
};
