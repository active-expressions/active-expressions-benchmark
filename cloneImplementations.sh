#!/usr/bin/env sh 

CWD=`pwd`
DIR=`dirname "$0"`
cd "${DIR}/implementations"

# ticking
git clone https://github.com/active-expressions/aexpr-ticking.git
# interpretation
git clone https://github.com/active-expressions/aexpr-interpretation.git
git clone https://github.com/active-expressions/babel-plugin-locals.git
# rewriting
git clone https://github.com/active-expressions/aexpr-source-transformation-propagation.git
git clone https://github.com/active-expressions/babel-plugin-aexpr-source-transformation.git
# proxies
git clone https://github.com/active-expressions/aexpr-proxies.git
git clone https://github.com/active-expressions/babel-plugin-active-expression-proxies.git

cd $CWD