-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 30, 2025 at 11:12 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `distrowiki`
--

-- --------------------------------------------------------

--
-- Table structure for table `distro`
--

CREATE TABLE `distro` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `description` text NOT NULL,
  `maintenance_score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `distro`
--

INSERT INTO `distro` (`id`, `name`, `description`, `maintenance_score`) VALUES
(1, 'arch', '', 4),
(2, 'mint', '', 1),
(3, 'alpine', '', 4),
(4, 'ubuntu', '', 2),
(5, 'debian', '', 3),
(6, 'pop-os', '', 1),
(7, 'fedora', '', 3),
(8, 'gentoo', '', 5),
(9, 'nobara', '', 2),
(10, 'garuda', '', 2),
(11, 'manjaro', '', 3),
(12, 'zorin-os', '', 2),
(13, 'open-suse', '', 3),
(14, 'kali-linux', '', 3),
(15, 'void-linux', '', 4),
(16, 'rocky-linux', '', 4),
(17, 'elementary-os', '', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `distro`
--
ALTER TABLE `distro`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `distro`
--
ALTER TABLE `distro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
