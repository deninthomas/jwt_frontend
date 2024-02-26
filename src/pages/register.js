import React from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

export const RegisterPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [email,setEmail] = React.useState("");

  const serviceHandler = async () => {
    const request = {
      username,
      // email,
      password,
    };
    try {
      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        body: JSON.stringify(request),// Convert request object to JSON string
        headers: {
          "Content-Type": "application/json" // Specify content type as JSON
        },
        mode: "no-cors"
       
      });
      console.log("response", response);
    } catch (err) {
      console.log("error occured", err);
    }
  };
  const handleSubmit = () => {
    console.log("handle submit called");
    serviceHandler();
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={10}
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
    >
      <FormControl id="username">
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>

      {/* <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl> */}

      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Button onClick={handleSubmit}>Login</Button>
    </Box>
  );
};
