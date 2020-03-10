#!/usr/bin/env node

const [,, ...args] = process.argv;

const clapify = (str) => {
    return str.reduce((acc, current) => {
        return acc + ' 👏 ' + current;
    }, '');
};

const result = clapify(args);
console.log(result);