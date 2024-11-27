import { Box, defineStyle, Field, Input } from "@chakra-ui/react";

const Edit = ({ data, setData }) => {
  function handleChange(e) {
    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  }
  // console.log(data);
  return (
    <Field.Root>
      <Box
        pos="relative"
        w="full"
        color="black"
        border="2px solid white"
        borderRadius="4px"
      >
        <Input
          className="peer"
          placeholder=""
          value={data.title}
          name="title"
          onChange={handleChange}
        />
        <Field.Label css={floatingStyles}>Title</Field.Label>
      </Box>{" "}
      <br />
      <Box
        pos="relative"
        w="full"
        color="black"
        border="2px solid white"
        borderRadius="4px"
      >
        <Input
          className="peer"
          placeholder=""
          value={data.tagline}
          name="tagline"
          onChange={handleChange}
        />
        <Field.Label css={floatingStyles}>Tagline</Field.Label>
      </Box>
      <br />
      <Box
        pos="relative"
        w="full"
        color="black"
        border="2px solid white"
        borderRadius="4px"
      >
        <Input
          className="peer"
          placeholder=""
          value={data.body}
          name="body"
          onChange={handleChange}
        />
        <Field.Label css={floatingStyles}>Body</Field.Label>
      </Box>
    </Field.Root>
  );
};

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "#fff",
  px: "0.5",
  top: "-3",
  color: "#000",
  insetStart: "2",
  fontWeight: "bold",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "black",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "black",
    top: "-3",
    insetStart: "2",
  },
});
export default Edit;
