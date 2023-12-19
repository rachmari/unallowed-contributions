#!/usr/bin/env node

import coreLib from '@actions/core'

import { checkContentType } from '#src/workflows/fm-utils.js'

const { FILE_PATHS_CONTENT_TYPES, CONTENT_TYPE } = process.env

main()

async function main() {
  const filePaths = JSON.parse(FILE_PATHS_CONTENT_TYPES)
  const containsRai = checkContentType(filePaths, CONTENT_TYPE)
  if (containsRai.length === 0) {
    console.log(`No files with content type ${CONTENT_TYPE} found.`)
    coreLib.setOutput('contentType', false)
  } else {
    console.log(`Files with content type ${CONTENT_TYPE} found!`)
    coreLib.setOutput('contentType', true)
  }
}
