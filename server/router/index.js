const express = require('express');
const { exec } = require('child_process');
const logger = require('../utils/logger.js');
const router = express.Router();

router.get('/produceCode', async (req, res) => {
  exec('npm run build', (err, stdout, stderr) => {
    if (err) {
      logger.error(err);
      res.send({
        code: 500,
        msg: '文件生成失败',
      });
    }
    logger.info(`stdout: ${stdout}`);
    res.send({
      code: 0,
      msg: '文件生成成功',
    });
  });
});

module.exports = router;