const express = require('express')
const router = express.Router()

const fs = require('fs')

const getFileUpdatedDate = (path) => {
  const stats = fs.statSync(path)
  return stats.mtime.toLocaleString()
}

router.get('/', (req, res) => {
  res.render('learnasm') //, { last_edit: getFileUpdatedDate('/root/public/md/learndec-intro.md') })
})

module.exports = router

