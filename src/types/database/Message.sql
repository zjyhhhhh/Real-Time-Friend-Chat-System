CREATE DATABASE IF NOT EXISTS FriendChat;

use FriendChat;

CREATE TABLE Message(
  id VARCHAR(100) PRIMARY KEY,
  senderId VARCHAR(50),
  `text` VARCHAR(400),
  `timestamp` VARCHAR(20)
);

describe Message;