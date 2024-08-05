import React from "react";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import {
  Flex,
  Stack,
  Heading,
  Box,
  Text,
  List,
  ListItem,
} from "@chakra-ui/layout";
import { useState } from "react";
const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const [selectedNumber, setSelectedNumber] = useState();

  const [dice, setDice] = useState(1);

  const [error, setError] = useState(null);

  const [score, setScore] = useState(0);

  const numbers = [1, 2, 3, 4, 5, 6];
  const startGameHandler = () => {
    setGameStarted(true);
  };

  const onNumberClicked = (value) => {
    setSelectedNumber(value);
    setError(null);
  };
  const genRandomNo = () => {
    if (selectedNumber) {
      const generatedNo = Math.ceil(Math.random() * 6);
      setDice(generatedNo);

      if (selectedNumber === generatedNo){
        setScore((prev) => prev + generatedNo);
      }
      else{
        setScore((prev) => prev - 2);
      }
    } else {
      setError("Please Select Number");
    }
  };
  return (
    <>
      {gameStarted ? (
        <>
          <Stack
            justify="center"
            align="center"
            maxW="1300px"
            mx="auto"
            h="100vh"
          >
            <Heading
              as="h1"
              color={error ? "red" : "black"}
              fontSize="6xl"
              m="2"
            >
              {error ? error : "Selected Number"}
            </Heading>
            <Flex pb="5">
              {numbers.map((value) => (
                <Flex
                  justify="center"
                  align="center"
                  h="50px"
                  w="50px"
                  bg={selectedNumber === value ? "green" : "black"}
                  color="white"
                  fontSize="2xl"
                  key={value}
                  mr={4}
                  cursor="pointer"
                  borderRadius="md"
                  onClick={() => onNumberClicked(value)}
                >
                  {value}
                </Flex>
              ))}
            </Flex>
            <Box h="150px" w="150px" onClick={genRandomNo}>
              <Image src={`/dice/dice${dice}.png`} />
            </Box>
            <Text as="p" fontSize="xl">
              CLick on dice to roll
            </Text>
            <Text color={score > 0 ? "green" : "red"} fontSize="8xl" fontWeight="bold">
              {score}
            </Text>
            <Text fontSize="5xl" fontWeight="bold">
              Total Score
            </Text>
            <Button onClick={() => setScore(0)}>Reset Score</Button>
          </Stack>
          <Stack maxW="900px" mx="auto">
            <Heading as="h2">Game Rules:-</Heading>
            <List>
              <ListItem>Select Number any number</ListItem>
              <ListItem>CLick on dice image to roll it</ListItem>
              <ListItem>
                Select number is equal to obtained dice result then you will get
                same point of dice
              </ListItem>
              <ListItem>
                Select Number is equal to obtained dice result then you will get
                same point of dice
              </ListItem>
            </List>
          </Stack>
        </>
      ) : (
        <Flex justify="center" align="center">
          <Image width="50%" src="/dices.png" />
          <Stack>
            <Heading fontSize="7xl" as="h1">
              The Dice Game
            </Heading>
            <Button
              alignSelf="flex-end"
              bg="black"
              color="white"
              _hover={{ bg: "grey" }}
              onClick={startGameHandler}
            >
              Start Game
            </Button>
          </Stack>
        </Flex>
      )}
    </>
  );
};

export default App;
