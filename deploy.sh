#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'betaworks.fun' > CNAME

git init
git add -A
git commit -m 'deploy'

# deploy to github
git push -f git@github.com:heaps/betaworks-dist.git master

cd -