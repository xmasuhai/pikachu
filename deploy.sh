#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf dist &&

# 生成静态文件
yarn build &&

# 进入生成的文件夹
cd ./dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:xmasuhai/pikachu-website.git master:gh-pages
git push -f git@github.com:xmasuhai/pikachu.git master:gh-pages

cd -
