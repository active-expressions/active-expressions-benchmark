import fs from 'fs-extra';
import pathLib from 'path';
import chalk from 'chalk';

export function parseFilters(filters) {
  const result = {
    positive: [],
    negative: [],
  }

  for (const filter of filters) {
    let filterList = result.positive;
    let actualFilter = filter;
    if (filter.startsWith('-')) {
      filterList = result.negative;
      actualFilter = filter.slice(1);
    }
    const tags = actualFilter.split('.');
    tags.forEach(tag => console.assert(isTagName(tag)));
    filterList.push(tags);
  }

  return result;
}

export function isTagName(tag) {
  return tag.length
          && !tag.startsWith('_')
          && !tag.includes('.')
          && !tag.startsWith('-');
}
  
export async function collectFilteredBenchmarks(directory, filters, verbose = 0) {
  const benchmarks = await collectAvailableBenchmarks(directory);
  return filterBenchmarks(benchmarks, filters);

  async function collectAvailableBenchmarks(directory) {
    const benchmarks = [];
    try {
      const files = await fs.readdir(directory, { withFileTypes: true });
      for (const file of files) {
        const filePath = pathLib.join(directory, file.name);
        if (file.isDirectory()) {
          if (!isTagName(file.name)) continue;
          const children = await collectAvailableBenchmarks(filePath);
          for (const { path, tags } of children) {
            benchmarks.push({
              path: path,
              tags: [file.name, ...tags],
            });
          }
        } else {
          const basename = pathLib.basename(file.name, '.js');
          if (!isTagName(basename)) continue;
          benchmarks.push({
            path: filePath,
            tags: [basename],
          });
        }
      }
    } catch (err) {
      console.log(`Failed to collect available benchmarks: ${chalk.red(err.message)}`);
      console.error(err);
      process.exit(1);
    }
    return benchmarks;
  }

  function filterBenchmarks(benchmarks, filters) {
    const notExcludedBenchmarks = benchmarks.filter(({ path, tags }) => {
      return !filters.negative.some(filterTags => {
        return filterTags.every(filterTag => tags.includes(filterTag));
      })
    })
    
    if (!filters.positive.length) return notExcludedBenchmarks;
    return notExcludedBenchmarks.filter(({ path, tags }) => {
      return filters.positive.some(filterTags => {
        return filterTags.every(filterTag => tags.includes(filterTag));
      });
    })
  }
}