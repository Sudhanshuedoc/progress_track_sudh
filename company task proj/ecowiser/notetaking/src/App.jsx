import { Box } from "@chakra-ui/react";
import { useState } from "react";
// import { toaster } from "@/components/ui/toaster";
import axios from "axios";

import "./App.css";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, Input, defineStyle, Button } from "@chakra-ui/react";
import { useEffect } from "react";

const Demo = ({ data, setData }) => {
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
        color="white"
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
        color="white"
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
        color="white"
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
  bg: "#235951",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "bold",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "white",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "fg",
    top: "-3",
    insetStart: "2",
  },
});

function Sidebar({ onNoteAdded }) {
  const [data, setData] = useState({
    title: "",
    tagline: "",
    body: "",
  });
  async function handleClick() {
    try {
      const request = await axios.post(
        "http://localhost:3000/notes",
        JSON.stringify(data),
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(request);
      setData({ title: "", tagline: "", body: "" });
      // Call the callback to refresh the notes list
      await onNoteAdded();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  return (
    <div
      style={{
        width: "30%",
        backgroundColor: "#235951",
        height: "100vh",
        color: "white",
      }}
    >
      <div id="top">
        <h1 id="notio">
          ecojot
          <span id="point">.</span>
        </h1>
      </div>
      <div id="bottom">
        <Demo data={data} setData={setData} />
        <br />
        <br />
        <br />
        <Button
          bg="#fff"
          color="#235951"
          id="btn"
          size="lg"
          onClick={handleClick}
        >
          Add Note
        </Button>
      </div>
    </div>
  );
}
function RightBar({ data, onDelete, onEdit }) {
  const [editData, setEditData] = useState({
    title: "",
    tagline: "",
    body: "",
  });

  const handleEdit = (note) => {
    setEditData({
      id: note.id,
      title: note.title,
      tagline: note.tagline,
      body: note.body,
    });
  };

  return (
    <div style={{ width: "75%", backgroundColor: "#ffffff", height: "100vh" }}>
      <div id="right">
        {data.map((ele) => {
          return (
            <div key={ele.id}>
              <h2>Title: {ele.title}</h2>
              <h2>Tagline: {ele.tagline}</h2>
              <h2>Body: {ele.body}</h2>
              <DialogRoot placement="center" motionPreset="fade-in-bottom">
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(ele)}
                  >
                    EDIT
                  </Button>
                </DialogTrigger>
                <DialogContent color="#235951" bg="#fff">
                  <DialogHeader>
                    <DialogTitle>Edit your Note</DialogTitle>
                  </DialogHeader>
                  <DialogBody>
                    <Demo data={editData} setData={setEditData} />
                  </DialogBody>
                  <DialogFooter>
                    <DialogCloseTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogCloseTrigger>
                    <DialogCloseTrigger asChild>
                      <Button onClick={() => onEdit(editData)}>Save</Button>
                    </DialogCloseTrigger>
                  </DialogFooter>
                </DialogContent>
              </DialogRoot>{" "}
              <Button
                variant="outline"
                size="sm"
                colorScheme="red"
                onClick={() => onDelete(ele.id)}
              >
                DELETE
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function App() {
  const [datas, setData] = useState([]);

  async function fetchData() {
    try {
      let request = await axios.get("http://localhost:3000/notes");
      let data = request.data;
      setData(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:3000/notes/${id}`);
      await fetchData();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  }

  async function handleEdit(editedNote) {
    try {
      await axios.put(
        `http://localhost:3000/notes/${editedNote.id}`,
        JSON.stringify(editedNote),
        { headers: { "Content-Type": "application/json" } }
      );
      await fetchData();
    } catch (error) {
      console.error("Error updating note:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div id="parent">
        <Sidebar onNoteAdded={fetchData} />
        <RightBar data={datas} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </>
  );
}

export default App;
