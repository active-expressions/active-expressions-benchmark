"use strict"

import yargs from 'yargs';

import * as cmdBuild from './cmds/build.mjs';
import * as cmdRun from './cmds/run.mjs';
import * as cmdList from './cmds/list.mjs';
import * as cmdCleanup from './cmds/cleanup.mjs';
import * as cmdWatch from './cmds/watch.mjs';

yargs
  .scriptName('bench')
  .usage('$0 <command> [<args>]')
  .options({
    'v': {
      alias: 'verbose',
      describe: 'verbosity level (0 = default, 1 = error output, 2 = logging)',
      type: 'count',
    }
  })
  .command(cmdBuild)
  .command(cmdRun)
  .command(cmdCleanup)
  .command(cmdList)
  .command(cmdWatch)
  .parserConfiguration({
    "unknown-options-as-args": true, //otherwise negative filters are parsed as options
  })
  .demandCommand(1, "")
  .strictCommands()
  .help()
  .version(false)
  .argv