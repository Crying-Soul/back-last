-- MariaDB dump 10.19-11.3.0-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: digital_skills
-- ------------------------------------------------------
-- Server version	11.3.0-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bots`
--

DROP TABLE IF EXISTS `bots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bots` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL DEFAULT '╨Ю╨╗╨╡╨│',
  `logo` varchar(1024) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL DEFAULT '''/assets/img/default-bot.jpg''',
  `status` varchar(255) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL DEFAULT 'offline',
  `coin_logo` varchar(1024) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL DEFAULT '''/assets/img/default-coin.jpg''',
  `coin_name` varchar(255) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL DEFAULT 'Roblocs',
  `bg_dialog` varchar(1024) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL DEFAULT '''/assets/img/default-bot-bg.jpg''',
  `last_start` date DEFAULT NULL,
  `last_stop` date DEFAULT NULL,
  `api_key` varchar(50) CHARACTER SET utf16 COLLATE utf16_general_ci DEFAULT NULL,
  `wellcome_text` varchar(50) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL DEFAULT '╨Я╤А╨╕╨▓╨╡╤В! ╨п - ╨▒╨╛╤В ╨Ю╨╗╨╡╨│',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bots`
--

LOCK TABLES `bots` WRITE;
/*!40000 ALTER TABLE `bots` DISABLE KEYS */;
INSERT INTO `bots` VALUES
(19,'123','/users/18/user-18-logo.jpg','online','\'/assets/img/default-coin.jpg\'','Roblocs','\'/assets/img/default-bot-bg.jpg\'','2023-09-22',NULL,NULL,'╨Я╤А╨╕╨▓╨╡╤В! ╨п - ╨▒╨╛╤В ╨Ю╨╗╨╡╨│'),
(20,'╨Ю╨╗╨╡╨│','\'/assets/img/default-bot.jpg\'','offline','\'/assets/img/default-coin.jpg\'','Roblocs','\'/assets/img/default-bot-bg.jpg\'',NULL,NULL,NULL,'╨Я╤А╨╕╨▓╨╡╤В! ╨п - ╨▒╨╛╤В ╨Ю╨╗╨╡╨│'),
(21,'╨Ю╨╗╨╡╨│','\'/assets/img/default-bot.jpg\'','offline','\'/assets/img/default-coin.jpg\'','Roblocs','\'/assets/img/default-bot-bg.jpg\'',NULL,NULL,NULL,'╨Я╤А╨╕╨▓╨╡╤В! ╨п - ╨▒╨╛╤В ╨Ю╨╗╨╡╨│');
/*!40000 ALTER TABLE `bots` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL DEFAULT '╨Ю╨Ю╨Ю "╨Ш╨Ф╨Х╨п"',
  `phone` varchar(100) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL DEFAULT '8 (800) 555-35-35',
  `address` varchar(100) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL DEFAULT '╨г╨╗╨╕╤Ж╨░ ╨Я╤Г╤И╨║╨╕╨╜╨░, ╨┤╨╛╨╝ ╨║╨╛╨╗╨╛╤В╤Г╤И╨║╨╕╨╜╨░',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES
(23,'New name','8 (800) 555-66-66','new address'),
(24,'╨Ю╨Ю╨Ю \"╨Ш╨Ф╨Х╨п\"','8 (800) 555-35-35','╨г╨╗╨╕╤Ж╨░ ╨Я╤Г╤И╨║╨╕╨╜╨░, ╨┤╨╛╨╝ ╨║╨╛╨╗╨╛╤В╤Г╤И╨║╨╕╨╜╨░'),
(25,'╨Ю╨Ю╨Ю \"╨Ш╨Ф╨Х╨п\"','8 (800) 555-35-35','╨г╨╗╨╕╤Ж╨░ ╨Я╤Г╤И╨║╨╕╨╜╨░, ╨┤╨╛╨╝ ╨║╨╛╨╗╨╛╤В╤Г╤И╨║╨╕╨╜╨░');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `functions`
--

DROP TABLE IF EXISTS `functions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `functions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf16 COLLATE utf16_general_ci DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf16 COLLATE utf16_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `functions`
--

LOCK TABLES `functions` WRITE;
/*!40000 ALTER TABLE `functions` DISABLE KEYS */;
INSERT INTO `functions` VALUES
(1,'╨Я╤А╨╕╤П╤В╨╡╨╗╤М-╨┐╨╛╨╝╨╛╤Й╨╜╨╕╨║.','100'),
(2,'╨Т╨╜╤Г╤В╤А╨╡╨╜╨╜╤П╤П ╨▓╨░╨╗╤О╤В╨░.','100'),
(3,'╨Э╨░╤Б╤В╨░╨▓╨╜╨╕╨║.','100');
/*!40000 ALTER TABLE `functions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plans`
--

DROP TABLE IF EXISTS `plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `description` longtext CHARACTER SET utf16 COLLATE utf16_general_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plans`
--

LOCK TABLES `plans` WRITE;
/*!40000 ALTER TABLE `plans` DISABLE KEYS */;
INSERT INTO `plans` VALUES
(1,'╨Я╤А╨╛╨▒╨╜╤Л╨╣','╨Ю╨│╤А╨░╨╜╨╕╤З╨╡╨╜╨╕╤П: 5 ╤Б╨╛╤В╤А╤Г╨┤╨╜╨╕╨║╨╛╨▓, ╨╛╨┤╨╕╨╜ ╨╝╨╡╨╜╨╡╨┤╨╢╨╡╤А, ╨▒╨╡╨╖ ╨╜╨░╤Б╤В╤А╨╛╨╣╨║╨╕ ╨╛╤Д╨╛╤А╨╝╨╗╨╡╨╜╨╕╤П, ╨╛╨│╤А╨░╨╜╨╕╤З╨╡╨╜╨╜╨╛╨╡ ╤З╨╕╤Б╨╗╨╛ ╤Б╨┐╨╕╤Б╨║╨╛╨▓ ╨┐╤А╨╕ ╤А╨░╨▒╨╛╤В╨╡ ╤Б ╨▓╨╕╤А╤В╤Г╨░╨╗╤М╨╜╨╛╨╣ ╨▓╨░╨╗╤О╤В╨╛╨╣.',0),
(2,'╨С╨░╨╖╨╛╨▓╤Л╨╣','╨д╤Г╨╜╨║╤Ж╨╕╨╕: ╨Ю╨┐╨╛╨▓╨╡╤Й╨╡╨╜╨╕╨╡ ╨╕ ╨┐╤А╨╕╤П╤В╨╡╨╗╤М-╤Б╨┐╤А╨░╨▓╨╛╤З╨╜╨╕╨║.',100);
/*!40000 ALTER TABLE `plans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_bot`
--

DROP TABLE IF EXISTS `user_bot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_bot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `bot_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_bot`
--

LOCK TABLES `user_bot` WRITE;
/*!40000 ALTER TABLE `user_bot` DISABLE KEYS */;
INSERT INTO `user_bot` VALUES
(18,18,19),
(19,18,20),
(20,18,21);
/*!40000 ALTER TABLE `user_bot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_plan`
--

DROP TABLE IF EXISTS `user_plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_plan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `plan_id` int(11) NOT NULL DEFAULT 1,
  `from` date DEFAULT curdate(),
  `to` date DEFAULT (curdate() + interval 1 month),
  `price` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `USER` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_plan`
--

LOCK TABLES `user_plan` WRITE;
/*!40000 ALTER TABLE `user_plan` DISABLE KEYS */;
INSERT INTO `user_plan` VALUES
(12,18,1,'2023-09-22','2024-07-22',1500),
(13,19,1,'2023-09-22','2024-12-22',300),
(14,20,1,'2023-09-22','2023-10-22',0);
/*!40000 ALTER TABLE `user_plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_plan_functions`
--

DROP TABLE IF EXISTS `user_plan_functions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_plan_functions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_plan_id` int(11) NOT NULL,
  `function_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_plan_functions`
--

LOCK TABLES `user_plan_functions` WRITE;
/*!40000 ALTER TABLE `user_plan_functions` DISABLE KEYS */;
INSERT INTO `user_plan_functions` VALUES
(22,12,1),
(23,12,2),
(24,12,3);
/*!40000 ALTER TABLE `user_plan_functions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `password` varchar(512) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `company_id` int(11) NOT NULL,
  `token` varchar(1024) CHARACTER SET utf16 COLLATE utf16_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(18,'Vasa','qwerty@mail.ru','$2b$11$oCWTNVmHtnB69KURxy7KM.ONHie/gi32eFxSFjYQ/X1Cq3OOsBvci',23,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE4LCJpYXQiOjE2OTUzNDM1NzV9.DXnq7XcHrf0xjb2Pdf6169LMcX8EghqE5SAtuMiK_ts'),
(19,'Egor','grebnevegor@mail.ru','$2b$11$Qhfb0UQZ2dAKji0HnI2oluG/3ezWCMFzgA3RfQKMkW1mxYhyqrlbe',24,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE5LCJpYXQiOjE2OTUzNTI3Njd9.-0lbXGjunfk1hGd4DfiyB-7A6Qyqso9JSy_uZLKfF18'),
(20,'Teacher','teacher_2@mail.ru','$2b$11$DFS/q2C9KmQJe6MmweP8g.mYaTvzpodWaMHeiE6KCnl65eAS3AJsO',25,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIwLCJpYXQiOjE2OTUzNTY0MzR9.bj4UHml9ZMEq6PzjDw8cEbuGXwLru39dXEO8XfXblxw');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-22  8:59:29
