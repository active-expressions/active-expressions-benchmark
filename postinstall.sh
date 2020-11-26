#!/usr/bin/env bash

declare -A subrepos
subrepos[implementations/aexpr-source-transformation-propagation]=https://github.com/active-expressions/aexpr-source-transformation-propagation
subrepos[implementations/babel-plugin-aexpr-source-transformation]=https://github.com/active-expressions/babel-plugin-aexpr-source-transformation
subrepos[implementations/aexpr-ticking]=https://github.com/active-expressions/aexpr-ticking
subrepos[implementations/babel-plugin-locals]=https://github.com/active-expressions/babel-plugin-locals
subrepos[implementations/aexpr-interpretation]=https://github.com/active-expressions/aexpr-interpretation
subrepos[implementations/babel-plugin-aexpr-proxies]=https://github.com/active-expressions/babel-plugin-active-expression-proxies
subrepos[implementations/aexpr-proxies]=https://github.com/active-expressions/aexpr-proxies

for FOLDER in "${!subrepos[@]}"
do
  REMOTE_URL="${subrepos[$FOLDER]}"
  echo "############ SETUP $REMOTE_URL IN FOLDER $FOLDER"
  git clone $REMOTE_URL $FOLDER
  cd $FOLDER
  npm install
  cc ../..
done

echo "Implementation Repos installed"
