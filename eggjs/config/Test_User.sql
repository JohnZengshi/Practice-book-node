/*
Navicat MySQL Data Transfer

Source Server         : mysql01
Source Server Version : 50645
Source Host           : localhost:3306
Source Database       : Test_User

Target Server Type    : MYSQL
Target Server Version : 50645
File Encoding         : 65001

Date: 2019-07-26 17:10:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for Tab_User_Info
-- ----------------------------
DROP TABLE IF EXISTS `Tab_User_Info`;
CREATE TABLE `Tab_User_Info` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '姓名',
  `uid` varchar(50) COLLATE utf8_bin NOT NULL,
  `sex` tinyint(2) DEFAULT '1' COMMENT '1男2女',
  `age` tinyint(2) DEFAULT '1',
  `description` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='test user';

-- ----------------------------
-- Records of Tab_User_Info
-- ----------------------------
-- INSERT INTO `Tab_User_Info` VALUES ('1', 'fantasygao', 'uid123', '1', '24', 'this is boy', '2019-07-26 07:29:31', '2019-07-26 07:29:31');
-- INSERT INTO `Tab_User_Info` VALUES ('2', 'demi', 'uid124', '2', '24', 'this is girl', '2019-07-26 07:29:31', '2019-07-26 07:29:31');
-- INSERT INTO `Tab_User_Info` VALUES ('3', 'xxx', 'uid125', '1', '26', 'this is test user', '2019-07-26 07:29:31', '2019-07-26 07:29:31');
-- INSERT INTO `Tab_User_Info` VALUES ('4', 'testu', 'uid126', '2', '44', 'this is test user5', '2019-07-26 07:29:31', '2019-07-26 07:29:31');
-- INSERT INTO `Tab_User_Info` VALUES ('5', 'testu2', 'uid127', '2', '64', 'this is test user4', '2019-07-26 07:29:31', '2019-07-26 07:29:31');
-- INSERT INTO `Tab_User_Info` VALUES ('6', 'testu', 'uid128', '1', '14', 'this is test user2', '2019-07-26 07:29:31', '2019-07-26 07:29:31');
-- INSERT INTO `Tab_User_Info` VALUES ('7', 'testu2', 'uid129', '2', '4', 'this is test user9', '2019-07-26 07:29:31', '2019-07-26 07:29:31');


-- ----------------------------
-- Table structure for Table_Test
-- ----------------------------
DROP TABLE IF EXISTS `Table_Test`;
CREATE TABLE `Table_Test` (
  `id` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  `address` varchar(255) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of Table_Test
-- ----------------------------
-- INSERT INTO `Table_Test` VALUES ('0000000000', '', '');
