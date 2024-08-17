-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 17, 2024 at 10:41 PM
-- Server version: 5.7.24
-- PHP Version: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `project_name` varchar(255) NOT NULL,
  `project_thumbnail` varchar(255) NOT NULL,
  `project_url` varchar(255) NOT NULL,
  `project_description` text NOT NULL,
  `project_languages` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `project_name`, `project_thumbnail`, `project_url`, `project_description`, `project_languages`) VALUES
(1, 'Humber E-sports Design Project', 'images/Humbersports.png', 'https://www.figma.com/design/0PDRkXYztrbk4JHhxcYMwg/Humber-esports?node-id=0-1&t=B3WtpL3jTHVKsKSM-1', 'Description of Humber E-sports Design Project', 'HTML, CSS, JavaScript'),
(2, 'Interactive Canva Using P5.js Library', 'images/P5js.png', 'https://brenojose.github.io/uselesswebsite/', 'Description of Interactive Canva Using P5.js Library', 'JavaScript, P5.js'),
(3, 'Handmade Figma Card Design Artwork', 'images/handmadecard.png', 'https://www.figma.com/design/e0sjLEnHU757Fr3qCsCkIi/IXD-5106-Assign-1?node-id=0-1&t=ppWBT40Tt1RnQWaP-1', 'Description of Handmade Figma Card Design Artwork', 'Figma, Design');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
